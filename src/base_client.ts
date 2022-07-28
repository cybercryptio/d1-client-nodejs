import { ChannelCredentials, Client as grpcClient, credentials, Metadata } from '@grpc/grpc-js';
import { Message, Method, rpc, RPCImplCallback } from 'protobufjs/minimal';
import { d1 } from './proto';
import { readFileSync } from 'fs';
import { CallMetadataGenerator } from '@grpc/grpc-js/build/src/call-credentials';
import { D1InsecureChannelCredentials } from "./credentials/D1InsecureChannelCredentials";
import { ICredentials } from "./credentials/ICredentials";

/** Base client providing common client functionality */
export abstract class D1BaseClient {
  protected client: grpcClient;
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
   * @param creds The credentials to use for authentication
   */
  constructor(serverUrl: string, creds: ICredentials, certPath?: string) {
    let channelCreds: ChannelCredentials = new D1InsecureChannelCredentials();
    if (certPath) {
      const cert = readFileSync(certPath);
      channelCreds = credentials.createSsl(cert);
    }
    const metaCallback: CallMetadataGenerator = async (_, callback) => {
      const meta = new Metadata();
      const token = await creds.getToken();
      meta.add('authorization', `Bearer ${token}`);
      callback(null, meta);
    };
    const callCreds = credentials.createFromMetadataGenerator(metaCallback);
    const combCreds = credentials.combineChannelCredentials(channelCreds, callCreds);
    this.client = new grpcClient(serverUrl, combCreds);
    this.authn = new d1.authn.Authn((method, requestData, callback) => {
      this.client.makeUnaryRequest(
        `/d1.authn.Authn/${method.name}`,
        (arg) => arg as Buffer,
        (arg) => arg as Buffer,
        requestData,
        callback,
      );
    });
    this.authz = new d1.authz.Authz((method, requestData, callback) => {
      this.client.makeUnaryRequest(
        `/d1.authz.Authz/${method.name}`,
        (arg) => arg as Buffer,
        (arg) => arg as Buffer,
        requestData,
        callback,
      );
    });
    this.version = new d1.version.Version((method, requestData, callback) => {
      this.client.makeUnaryRequest(
        `/d1.version.Version/${method.name}`,
        (arg) => arg as Buffer,
        (arg) => arg as Buffer,
        requestData,
        callback,
      );
    });
    this.index = new d1.index.Index((method, requestData, callback) => {
      this.client.makeUnaryRequest(
        `/d1.index.Index/${method.name}`,
        (arg) => arg as Buffer,
        (arg) => arg as Buffer,
        requestData,
        callback,
      );
    });
  }
}
