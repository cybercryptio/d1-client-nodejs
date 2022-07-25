# Copyright 2020-2022 CYBERCRYPT

##### Help message #####
help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make <target> \033[36m\033[0m\n\nTargets:\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

##### Config #####
SHELL := /bin/bash

##### Build targets #####
.PHONY: build
build: # Build all clients
	npm run build

.PHONY: tests
tests: ## Run all tests
	npm run test

.PHONY: lint
lint: ## Run linting
	npm run lint

##### Cleanup targets #####
.PHONY: clean
clean: ## Remove build artifacts
	npm run clean
