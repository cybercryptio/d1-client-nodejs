[@cybercryptio/d1-client-nodejs](../README.md) / [Exports](../modules.md) / D1StorageClient

# Class: D1StorageClient

Client used for connecting to D1 Storage

## Hierarchy

- [`D1BaseClient`](D1BaseClient.md)

  ↳ **`D1StorageClient`**

## Table of contents

### Constructors

- [constructor](D1StorageClient.md#constructor)

### Properties

- [authn](D1StorageClient.md#authn)
- [authz](D1StorageClient.md#authz)
- [client](D1StorageClient.md#client)
- [index](D1StorageClient.md#index)
- [storage](D1StorageClient.md#storage)
- [version](D1StorageClient.md#version)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new D1StorageClient**(`serverUrl`, `creds`, `certPath?`)

Constructs a new D1StorageClient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serverUrl` | `string` | The URL of the server to connect to |
| `creds` | [`ICredentials`](../interfaces/ICredentials.md) | The credentials to use for authentication |
| `certPath?` | `string` | The path to the certificate to use for authentication |

#### Overrides

[D1BaseClient](D1BaseClient.md).[constructor](D1BaseClient.md#constructor)

## Properties

### <a id="authn" name="authn"></a> authn

• `Readonly` **authn**: `Authn`

The authn client

#### Inherited from

[D1BaseClient](D1BaseClient.md).[authn](D1BaseClient.md#authn)

___

### <a id="authz" name="authz"></a> authz

• `Readonly` **authz**: `Authz`

The authz client

#### Inherited from

[D1BaseClient](D1BaseClient.md).[authz](D1BaseClient.md#authz)

___

### <a id="client" name="client"></a> client

• `Protected` **client**: `Client`

#### Inherited from

[D1BaseClient](D1BaseClient.md).[client](D1BaseClient.md#client)

___

### <a id="index" name="index"></a> index

• `Readonly` **index**: `Index`

The index client

#### Inherited from

[D1BaseClient](D1BaseClient.md).[index](D1BaseClient.md#index)

___

### <a id="storage" name="storage"></a> storage

• `Readonly` **storage**: `Storage`

The Storage client

___

### <a id="version" name="version"></a> version

• `Readonly` **version**: `Version`

The version client

#### Inherited from

[D1BaseClient](D1BaseClient.md).[version](D1BaseClient.md#version)
