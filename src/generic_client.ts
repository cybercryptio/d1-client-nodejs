import { d1 } from './proto';
import { D1BaseClient } from './base_client';
import { ICredentials } from './credentials';

/** Client used for connecting to D1 Generic */
export class D1GenericClient extends D1BaseClient {
  /** The Generic client */
  public readonly generic: d1.generic.Generic;

  /** Constructs a new D1GenericClient
   * @param serverUrl The URL of the server to connect to
   * @param certPath The path to the certificate to use for authentication
   * @param creds The credentials to use for authentication
   */
  constructor(serverUrl: string, creds: ICredentials, certPath: string | undefined = undefined) {
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
