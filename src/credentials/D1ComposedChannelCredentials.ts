import { CallCredentials, ChannelCredentials } from '@grpc/grpc-js';

// Beacase the gRPC implementation doesn't allow sending call credentials over an insecure channel,
// we need to implement our own channel credentials, to allow this.
// This implementation is a pure copy/paste of the implementation in the gRPC library, with the check
// for the insecure channel removed.

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
      return (
        this.channelCredentials._equals(other.channelCredentials) && this.callCredentials._equals(other.callCredentials)
      );
    } else {
      return false;
    }
  }
}
