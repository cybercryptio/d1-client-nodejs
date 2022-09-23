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

import { Client as grpcClient, credentials } from '@grpc/grpc-js';
import { d1 } from '../proto';
import { readFileSync } from 'fs';
import { ICredentials } from './ICredentials';


export class UsernamePasswordCredentials implements ICredentials {
  private grpcClient: grpcClient;
  private readonly authnClient: d1.authn.Authn;
  #expirationTime: Date = new Date(0);
  #accessToken: string = '';
  private static MS_PER_MINUTE = 60 * 1000;

  constructor(
    private readonly username: string,
    private readonly password: string,
    private readonly endpoint: string,
    private readonly certPath?: string
  ) {
    let channelCreds = credentials.createInsecure();
    if (certPath) {
      const cert = readFileSync(certPath);
      channelCreds = credentials.createSsl(cert);
    }
    this.grpcClient = new grpcClient(endpoint, channelCreds);
    this.authnClient = new d1.authn.Authn((method, requestData, callback) => {
      this.grpcClient.makeUnaryRequest(
        `/d1.authn.Authn/${method.name}`,
        (arg) => arg as Buffer,
        (arg) => arg as Buffer,
        requestData,
        callback
      );
    });
  }

  public async getToken(): Promise<string> {
    if (Date.now() > this.#expirationTime.getTime()) {
      const response = await this.authnClient.loginUser({ userId: this.username, password: this.password });
      this.#expirationTime = new Date((response.expiryTime as number) - UsernamePasswordCredentials.MS_PER_MINUTE);
      this.#accessToken = response.accessToken;
    }

    return this.#accessToken;
  }
}
