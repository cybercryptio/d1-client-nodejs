[@cybercryptio/d1-client-nodejs](../README.md) / [Exports](../modules.md) / D1GenericClient

# Class: D1GenericClient

Client used for connecting to D1 Generic

## Hierarchy

- [`D1BaseClient`](D1BaseClient.md)

  ↳ **`D1GenericClient`**

## Table of contents

### Constructors

- [constructor](D1GenericClient.md#constructor)

### Properties

- [authn](D1GenericClient.md#authn)
- [authz](D1GenericClient.md#authz)
- [client](D1GenericClient.md#client)
- [generic](D1GenericClient.md#generic)
- [index](D1GenericClient.md#index)
- [version](D1GenericClient.md#version)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new D1GenericClient**(`serverUrl`, `creds`, `certPath?`)

Constructs a new D1GenericClient

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

### <a id="generic" name="generic"></a> generic

• `Readonly` **generic**: `Generic`

The Generic client

___

### <a id="index" name="index"></a> index

• `Readonly` **index**: `Index`

The index client

#### Inherited from

[D1BaseClient](D1BaseClient.md).[index](D1BaseClient.md#index)

___

### <a id="version" name="version"></a> version

• `Readonly` **version**: `Version`

The version client

#### Inherited from

[D1BaseClient](D1BaseClient.md).[version](D1BaseClient.md#version)
