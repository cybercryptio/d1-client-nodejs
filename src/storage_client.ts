import { d1 } from './proto'
import { D1BaseClient } from './base_client';

/** Client used for connecting to D1 Storage */
export class D1StorageClient extends D1BaseClient {
    /** The Storage client */
    public readonly storage: d1.storage.Storage;

    /** Constructs a new D1StorageClient
     * @param serverUrl The URL of the server to connect to
     * @param certPath The path to the certificate to use for authentication
     * @param getToken The function to call to get the token to use for authentication
     */
    constructor(readonly serverUrl: string, readonly certPath: string, getToken: () => string) {
        super(serverUrl, certPath, getToken);
        this.storage = new d1.storage.Storage(super.rpcImpl);
    }
}