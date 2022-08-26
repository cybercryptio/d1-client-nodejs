# NodeJS Client Packages for CYBERCRYPT D1

NodeJS client packages for

* [CYBERCRYPT D1 Generic](https://github.com/cybercryptio/d1-service-generic)
* [CYBERCRYPT D1 Storage](https://github.com/cybercryptio/d1-service-storage)

## Configuring the client

### Username and password

Username and password is only available when using the Standalone ID provider in D1,
you can refer to the [D1 Generic Getting Started](https://github.com/cybercryptio/d1-service-generic/blob/master/documentation/getting_started.md)
or the [D1 Storage Getting Started](https://github.com/cybercryptio/d1-service-storage/blob/master/documentation/getting_started.md) guide
for details on how to obtain these.

When using the username and password the access token is automatically refreshed when it expires.

```typescript
import { D1GenericClient, D1StorageClient, UsernamePasswordCredentials } from '@cybercryptio/d1-client-nodejs';

const d1Username = "bd778920-f130-4a5c-b577-79d71bedae67";
const d1Password = "Iy7ZH89rUj4H8dqagKUSqmkVOFULxghtgJR-rSreeVk";
const d1Endpoint = "https://localhost:9000";
const creds = new UsernamePasswordCredentials(d1Username, d1Password, d1Endpoint);
const client = new D1GenericClient(endpoint, creds);
// OR
const client = new D1StorageClient(endpoint, creds);
```

### OIDC

When using the OIDC provider you will need to obtain an ID token the usual way, and then provide it to the client.

```typescript
import { D1GenericClient, D1StorageClient, TokenCredentials } from '@cybercryptio/d1-client-nodejs';

const d1Endpoint = "https://localhost:9000";
const idToken = "eyJ ... zcifQ.ewo ... NzAKfQ.ggW8h ... Mzqg";
const creds = new TokenCredentials(idToken);
const client = new D1GenericClient(endpoint, creds);
// OR
const client = new D1StorageClient(endpoint, creds);
```

## API Reference

[API Reference](documentation/api/README.md)
