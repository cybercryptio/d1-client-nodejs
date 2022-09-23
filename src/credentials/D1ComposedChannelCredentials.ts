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
