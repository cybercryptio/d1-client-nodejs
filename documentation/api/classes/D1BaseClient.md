[@cybercryptio/d1-client-nodejs](../README.md) / [Exports](../modules.md) / D1BaseClient

# Class: D1BaseClient

Base client providing common client functionality

## Hierarchy

- **`D1BaseClient`**

  ↳ [`D1GenericClient`](D1GenericClient.md)

  ↳ [`D1StorageClient`](D1StorageClient.md)

## Table of contents

### Constructors

- [constructor](D1BaseClient.md#constructor)

### Properties

- [authn](D1BaseClient.md#authn)
- [authz](D1BaseClient.md#authz)
- [client](D1BaseClient.md#client)
- [index](D1BaseClient.md#index)
- [version](D1BaseClient.md#version)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new D1BaseClient**(`serverUrl`, `creds`, `certPath?`)

Constructs a new D1BaseClient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serverUrl` | `string` | The URL of the server to connect to |
| `creds` | [`ICredentials`](../interfaces/ICredentials.md) | The credentials to use for authentication |
| `certPath?` | `string` | The path to the certificate to use for authentication |

## Properties

### <a id="authn" name="authn"></a> authn

• `Readonly` **authn**: `Authn`

The authn client

___

### <a id="authz" name="authz"></a> authz

• `Readonly` **authz**: `Authz`

The authz client

___

### <a id="client" name="client"></a> client

• `Protected` **client**: `Client`

___

### <a id="index" name="index"></a> index

• `Readonly` **index**: `Index`

The index client

___

### <a id="version" name="version"></a> version

• `Readonly` **version**: `Version`

The version client
