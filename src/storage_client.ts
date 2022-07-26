import { d1 } from './proto';
import { D1BaseClient } from './base_client';
import { ICredentials } from './credentials';

/** Client used for connecting to D1 Storage */
export class D1StorageClient extends D1BaseClient {
  /** The Storage client */
  public readonly storage: d1.storage.Storage;

  /** Constructs a new D1StorageClient
   * @param serverUrl The URL of the server to connect to
   * @param certPath The path to the certificate to use for authentication
   * @param creds The credentials to use for authentication
   */
  constructor(serverUrl: string, creds: ICredentials, certPath: string | undefined = undefined) {
    super(serverUrl, creds, certPath);
    this.storage = new d1.storage.Storage((method, requestData, callback) => {
      this.client.makeUnaryRequest(
        `/d1.storage.Storage/${method.name}`,
        (arg) => arg as Buffer,
        (arg) => arg as Buffer,
        requestData,
        callback,
      );
    });
  }
}
