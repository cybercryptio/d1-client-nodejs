// Copyright 2022 CYBERCRYPT
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { d1 } from './proto';
import { D1BaseClient } from './base_client';
import { ICredentials } from "./credentials/ICredentials";

/** Client used for connecting to D1 Generic */
export class D1GenericClient extends D1BaseClient {
  /** The Generic client */
  public readonly generic: d1.generic.Generic;

  /** Constructs a new D1GenericClient
   * @param serverUrl The URL of the server to connect to
   * @param certPath The path to the certificate to use for authentication
   * @param creds The credentials to use for authentication
   */
  constructor(serverUrl: string, creds: ICredentials, certPath?: string) {
    super(serverUrl, creds, certPath);
    this.generic = new d1.generic.Generic((method, requestData, callback) => {
      this.client.makeUnaryRequest(
        `/d1.generic.Generic/${method.name}`,
        (arg) => arg as Buffer,
        (arg) => arg as Buffer,
        requestData,
        callback,
      );
    });
  }
}
