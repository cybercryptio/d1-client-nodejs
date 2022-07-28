import { CallCredentials, ChannelCredentials } from '@grpc/grpc-js';
import { D1ComposedChannelCredentials } from "./D1ComposedChannelCredentials";

// Beacase the gRPC implementation doesn't allow sending call credentials over an insecure channel,
// we need to implement our own channel credentials, to allow this.
// This implementation is a pure copy/paste of the implementation in the gRPC library, with the check
// for the insecure channel removed.

export class D1InsecureChannelCredentials extends ChannelCredentials {
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
    return other instanceof D1InsecureChannelCredentials;
  }
}
