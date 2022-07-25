import { CallCredentials, ChannelCredentials, Client as grpcClient, credentials } from '@grpc/grpc-js';
import { Message, Method, rpc, RPCImplCallback } from 'protobufjs';
import { d1 } from './proto';
import { readFileSync } from 'fs';

export interface ICredentials {
    getToken(): Promise<string>;
}

export class UsernamePasswordCredentials implements ICredentials {
    private grpcClient: grpcClient;
    private readonly authnClient: d1.authn.Authn;
    #expirationTime: Date = new Date(0);
    #accessToken: string = "";
    private static MS_PER_MINUTE = 60 * 1000;

    constructor(private readonly username: string, private readonly password: string, private readonly endpoint: string, private readonly certPath: string | undefined = undefined) {
        let channelCreds = credentials.createInsecure();
        if (certPath) {
            const cert = readFileSync(certPath);
            channelCreds = credentials.createSsl(cert);
        }
        this.grpcClient = new grpcClient(endpoint, channelCreds);
        this.authnClient = new d1.authn.Authn((method, requestData, callback) => {
            this.grpcClient.makeUnaryRequest(`/d1.authn.Authn/${method.name}`, arg => arg as Buffer, arg => arg as Buffer, requestData, callback);
        });
    }

    public async getToken(): Promise<string> {
        if (Date.now() > this.#expirationTime.getTime()) {
            let response = await this.authnClient.loginUser({ userId: this.username, password: this.password });
            this.#expirationTime = new Date(response.expiryTime as number - UsernamePasswordCredentials.MS_PER_MINUTE);
            this.#accessToken = response.accessToken;
        }

        return this.#accessToken;
    }
}

export class TokenCredentials implements ICredentials {
    constructor(private readonly token: string) { }

    public async getToken(): Promise<string> {
        return this.token;
    }
}

export class D1ChannelCredentials extends ChannelCredentials {
    constructor(callCredentials?: CallCredentials) {
        super(callCredentials);
    }
    compose(callCredentials: CallCredentials): ChannelCredentials {
        const combinedCallCredentials = this.callCredentials.compose(callCredentials);
        return new D1ComposedChannelCredentials(this, combinedCallCredentials);
    }
    _getConnectionOptions() {
        return null;
    }
    _isSecure() {
        return false;
    }
    _equals(other: ChannelCredentials) {
        return other instanceof D1ChannelCredentials;
    }
}

export class D1ComposedChannelCredentials extends ChannelCredentials {
    constructor(private readonly channelCredentials: ChannelCredentials, private readonly callCreds: CallCredentials) {
        super(callCreds);
    }
    compose(callCredentials: CallCredentials): ChannelCredentials {
        const combinedCallCredentials = this.callCredentials.compose(callCredentials);
        return new D1ComposedChannelCredentials(this.channelCredentials, combinedCallCredentials);
    }
    _getConnectionOptions() {
        return this.channelCredentials._getConnectionOptions();
    }
    _isSecure() {
        return true;
    }
    _equals(other: D1ComposedChannelCredentials) {
        if (this === other) {
            return true;
        }
        if (other instanceof D1ComposedChannelCredentials) {
            return (this.channelCredentials._equals(other.channelCredentials) &&
                this.callCredentials._equals(other.callCredentials));
        }
        else {
            return false;
        }
    }
}