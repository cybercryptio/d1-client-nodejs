# Copyright 2020-2022 CYBERCRYPT
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# 	http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

##### Help message #####
help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make <target> \033[36m\033[0m\n\nTargets:\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

##### Config #####
SHELL := /bin/bash
apiDocsDir = "./documentation/api"

##### Build targets #####
.PHONY: build
build: ## Build all clients
	npm run build
	$(MAKE) apidocs

.PHONY: publish
publish: build ## Publish package
	npm publish --access public

.PHONY: tests
tests: docker-generic-tests docker-storage-tests ## Run all tests

docker-generic-tests: docker-generic-tests-up ## Run Generic tests
	USER_INFO=$$(docker exec d1-service-generic /d1-service-generic create-user | tail -n 1) && \
		export E2E_TEST_UID=$$(echo $$USER_INFO | jq -r ".user_id") && \
		export E2E_TEST_PASS=$$(echo $$USER_INFO | jq -r ".password") && \
		npm run test generic
	@make docker-generic-tests-down

.PHONY: docker-generic-tests-up
docker-generic-tests-up: ## Start docker Generic test environment
	cd tests/integration && \
		docker-compose --profile generic up -d

.PHONY: docker-generic-tests-down
docker-generic-tests-down: ## Stop docker Generic test environment
	docker-compose --profile generic -f tests/integration/compose.yaml down -v

.PHONY: docker-storage-tests
docker-storage-tests: docker-storage-tests-up ## Run Storage tests
	USER_INFO=$$(docker exec d1-service-storage /d1-service-storage create-user | tail -n 1) && \
		export E2E_TEST_UID=$$(echo $$USER_INFO | jq -r ".user_id") && \
		export E2E_TEST_PASS=$$(echo $$USER_INFO | jq -r ".password") && \
		npm run test storage
	@make docker-storage-tests-down

.PHONY: docker-storage-tests-up
docker-storage-tests-up: ## Start docker Storage test environment
	cd tests/integration && \
		docker-compose --profile storage up -d

.PHONY: docker-storage-test-down
docker-storage-tests-down: ## Stop docker Storage test environment
	docker-compose --profile storage -f tests/integration/compose.yaml down -v

.PHONY: lint
lint: ## Run linting
	npm run lint

.PHONY: apidocs
apidocs: ## Generate API documentation
	npx typedoc

.PHONY: apidocs-verify
apidocs-verify: ## Verify API documentation is up-to-date
	git ls-files --other --modified --deleted --exclude-standard -- $(apiDocsDir)  | sed q1

##### Cleanup targets #####
.PHONY: clean
clean: ## Remove build artifacts
	npm run clean
