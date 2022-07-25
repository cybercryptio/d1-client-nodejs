import { Client as grpcClient, credentials, Metadata } from '@grpc/grpc-js';
import { Message, Method, rpc, RPCImplCallback } from 'protobufjs/minimal';
import { d1 } from './proto';
import { readFileSync } from 'fs';
import { CallMetadataGenerator } from '@grpc/grpc-js/build/src/call-credentials';

/** Base client providing common client functionality */
export abstract class D1BaseClient {
    protected readonly client: grpcClient;
    /** The authn client */
    public readonly authn: d1.authn.Authn;
    /** The authz client */
    public readonly authz: d1.authz.Authz;
    /** The version client */
    public readonly version: d1.version.Version;
    /** The index client */
    public readonly index: d1.index.Index;

    /** Constructs a new D1BaseClient
     * @param serverUrl The URL of the server to connect to
     * @param certPath The path to the certificate to use for authentication
     * @param getToken The function to call to get the token to use for authentication
     */
    constructor(serverUrl: string, certPath: string, getToken: () => string) {
        let channelCreds = credentials.createInsecure();
        if (certPath) {
            const cert = readFileSync(certPath);
            channelCreds = credentials.createSsl(cert);
        }
        const metaCallback: CallMetadataGenerator = (_, callback) => {
            const meta = new Metadata();
            meta.add('authorization', `Bearer ${getToken()}`);
            callback(null, meta);
        };
        const callCreds = credentials.createFromMetadataGenerator(metaCallback);
        const combCreds = credentials.combineChannelCredentials(channelCreds, callCreds);
        this.client = new grpcClient(serverUrl, combCreds);
        this.authn = new d1.authn.Authn(this.rpcImpl);
        this.authz = new d1.authz.Authz(this.rpcImpl);
        this.version = new d1.version.Version(this.rpcImpl);
        this.index = new d1.index.Index(this.rpcImpl);
    }

    /**
     * RPC implementation use when performing service requests on the network
     * @param method The method to call
     * @param requestData The request to send
     * @param callback The callback to call with the response
     */
    protected rpcImpl(method: (Method | rpc.ServiceMethod<Message<{}>, Message<{}>>), requestData: Uint8Array, callback: RPCImplCallback) {
        this.client.makeUnaryRequest(method.name, arg => arg as Buffer, arg => arg as Buffer, requestData, callback);
    }
}