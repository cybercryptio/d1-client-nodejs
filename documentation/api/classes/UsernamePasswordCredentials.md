[@cybercryptio/d1-client-nodejs](../README.md) / [Exports](../modules.md) / UsernamePasswordCredentials

# Class: UsernamePasswordCredentials

## Implements

- [`ICredentials`](../interfaces/ICredentials.md)

## Table of contents

### Constructors

- [constructor](UsernamePasswordCredentials.md#constructor)

### Properties

- [#accessToken](UsernamePasswordCredentials.md##accesstoken)
- [#expirationTime](UsernamePasswordCredentials.md##expirationtime)
- [authnClient](UsernamePasswordCredentials.md#authnclient)
- [grpcClient](UsernamePasswordCredentials.md#grpcclient)
- [MS\_PER\_MINUTE](UsernamePasswordCredentials.md#ms_per_minute)

### Methods

- [getToken](UsernamePasswordCredentials.md#gettoken)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new UsernamePasswordCredentials**(`username`, `password`, `endpoint`, `certPath?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password` | `string` |
| `endpoint` | `string` |
| `certPath?` | `string` |

## Properties

### <a id="#accesstoken" name="#accesstoken"></a> #accessToken

• `Private` **#accessToken**: `string` = `''`

___

### <a id="#expirationtime" name="#expirationtime"></a> #expirationTime

• `Private` **#expirationTime**: `Date`

___

### <a id="authnclient" name="authnclient"></a> authnClient

• `Private` `Readonly` **authnClient**: `Authn`

___

### <a id="grpcclient" name="grpcclient"></a> grpcClient

• `Private` **grpcClient**: `Client`

___

### <a id="ms_per_minute" name="ms_per_minute"></a> MS\_PER\_MINUTE

▪ `Static` `Private` **MS\_PER\_MINUTE**: `number`

## Methods

### <a id="gettoken" name="gettoken"></a> getToken

▸ **getToken**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

[ICredentials](../interfaces/ICredentials.md).[getToken](../interfaces/ICredentials.md#gettoken)
