import { d1 } from './proto'
import { D1BaseClient } from './base_client';

/** Client used for connecting to D1 Generic */
export class D1GenericClient extends D1BaseClient {
    /** The Generic client */
    public readonly generic: d1.generic.Generic;

    /** Constructs a new D1GenericClient
     * @param serverUrl The URL of the server to connect to
     * @param certPath The path to the certificate to use for authentication
     * @param getToken The function to call to get the token to use for authentication
     */
    constructor(readonly serverUrl: string, readonly certPath: string, getToken: () => string) {
        super(serverUrl, certPath, getToken);
        this.generic = new d1.generic.Generic(super.rpcImpl);
    }
}