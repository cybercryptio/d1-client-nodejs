import * as $protobuf from 'protobufjs';
/** Namespace d1. */
export namespace d1 {
  /** Namespace authn. */
  namespace authn {
    /** Represents an Authn */
    class Authn extends $protobuf.rpc.Service {
      /**
       * Constructs a new Authn service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

      /**
       * Creates new Authn service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Authn;

      /**
       * Creates a new user.
       * This call can fail if the auth storage cannot be reached, in which case an error is returned.
       * @param request CreateUserRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and CreateUserResponse
       */
      public createUser(request: d1.authn.ICreateUserRequest, callback: d1.authn.Authn.CreateUserCallback): void;

      /**
       * Creates a new user.
       * This call can fail if the auth storage cannot be reached, in which case an error is returned.
       * @param request CreateUserRequest message or plain object
       * @returns Promise
       */
      public createUser(request: d1.authn.ICreateUserRequest): Promise<d1.authn.CreateUserResponse>;

      /**
       * Logs in an existing user, returning a User Access Token and an expiry time.
       * This call can fail if the caller provides the wrong credentials or if the auth storage cannot be reached,
       * in which case an error is returned.
       * @param request LoginUserRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and LoginUserResponse
       */
      public loginUser(request: d1.authn.ILoginUserRequest, callback: d1.authn.Authn.LoginUserCallback): void;

      /**
       * Logs in an existing user, returning a User Access Token and an expiry time.
       * This call can fail if the caller provides the wrong credentials or if the auth storage cannot be reached,
       * in which case an error is returned.
       * @param request LoginUserRequest message or plain object
       * @returns Promise
       */
      public loginUser(request: d1.authn.ILoginUserRequest): Promise<d1.authn.LoginUserResponse>;

      /**
       * Deletes an existing user.
       * This call can fail if the user does not exist,
       * or if the auth storage cannot be reached, in which case an error is returned.
       * @param request RemoveUserRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and RemoveUserResponse
       */
      public removeUser(request: d1.authn.IRemoveUserRequest, callback: d1.authn.Authn.RemoveUserCallback): void;

      /**
       * Deletes an existing user.
       * This call can fail if the user does not exist,
       * or if the auth storage cannot be reached, in which case an error is returned.
       * @param request RemoveUserRequest message or plain object
       * @returns Promise
       */
      public removeUser(request: d1.authn.IRemoveUserRequest): Promise<d1.authn.RemoveUserResponse>;

      /**
       * Creates a new group with the requested scopes. The caller is added to the group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @param request CreateGroupRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and CreateGroupResponse
       */
      public createGroup(request: d1.authn.ICreateGroupRequest, callback: d1.authn.Authn.CreateGroupCallback): void;

      /**
       * Creates a new group with the requested scopes. The caller is added to the group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @param request CreateGroupRequest message or plain object
       * @returns Promise
       */
      public createGroup(request: d1.authn.ICreateGroupRequest): Promise<d1.authn.CreateGroupResponse>;

      /**
       * Adds a user to a group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @param request AddUserToGroupRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and AddUserToGroupResponse
       */
      public addUserToGroup(
        request: d1.authn.IAddUserToGroupRequest,
        callback: d1.authn.Authn.AddUserToGroupCallback,
      ): void;

      /**
       * Adds a user to a group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @param request AddUserToGroupRequest message or plain object
       * @returns Promise
       */
      public addUserToGroup(request: d1.authn.IAddUserToGroupRequest): Promise<d1.authn.AddUserToGroupResponse>;

      /**
       * Removes a user from a group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @param request RemoveUserFromGroupRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and RemoveUserFromGroupResponse
       */
      public removeUserFromGroup(
        request: d1.authn.IRemoveUserFromGroupRequest,
        callback: d1.authn.Authn.RemoveUserFromGroupCallback,
      ): void;

      /**
       * Removes a user from a group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @param request RemoveUserFromGroupRequest message or plain object
       * @returns Promise
       */
      public removeUserFromGroup(
        request: d1.authn.IRemoveUserFromGroupRequest,
      ): Promise<d1.authn.RemoveUserFromGroupResponse>;
    }

    namespace Authn {
      /**
       * Callback as used by {@link d1.authn.Authn#createUser}.
       * @param error Error, if any
       * @param [response] CreateUserResponse
       */
      type CreateUserCallback = (error: Error | null, response?: d1.authn.CreateUserResponse) => void;

      /**
       * Callback as used by {@link d1.authn.Authn#loginUser}.
       * @param error Error, if any
       * @param [response] LoginUserResponse
       */
      type LoginUserCallback = (error: Error | null, response?: d1.authn.LoginUserResponse) => void;

      /**
       * Callback as used by {@link d1.authn.Authn#removeUser}.
       * @param error Error, if any
       * @param [response] RemoveUserResponse
       */
      type RemoveUserCallback = (error: Error | null, response?: d1.authn.RemoveUserResponse) => void;

      /**
       * Callback as used by {@link d1.authn.Authn#createGroup}.
       * @param error Error, if any
       * @param [response] CreateGroupResponse
       */
      type CreateGroupCallback = (error: Error | null, response?: d1.authn.CreateGroupResponse) => void;

      /**
       * Callback as used by {@link d1.authn.Authn#addUserToGroup}.
       * @param error Error, if any
       * @param [response] AddUserToGroupResponse
       */
      type AddUserToGroupCallback = (error: Error | null, response?: d1.authn.AddUserToGroupResponse) => void;

      /**
       * Callback as used by {@link d1.authn.Authn#removeUserFromGroup}.
       * @param error Error, if any
       * @param [response] RemoveUserFromGroupResponse
       */
      type RemoveUserFromGroupCallback = (error: Error | null, response?: d1.authn.RemoveUserFromGroupResponse) => void;
    }

    /** Properties of a CreateUserRequest. */
    interface ICreateUserRequest {
      /** The scopes the user should be assigned. */
      scopes?: d1.scopes.Scope[] | null;
    }

    /** Represents a CreateUserRequest. */
    class CreateUserRequest implements ICreateUserRequest {
      /**
       * Constructs a new CreateUserRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.ICreateUserRequest);

      /** The scopes the user should be assigned. */
      public scopes: d1.scopes.Scope[];

      /**
       * Creates a new CreateUserRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns CreateUserRequest instance
       */
      public static create(properties?: d1.authn.ICreateUserRequest): d1.authn.CreateUserRequest;

      /**
       * Encodes the specified CreateUserRequest message. Does not implicitly {@link d1.authn.CreateUserRequest.verify|verify} messages.
       * @param message CreateUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link d1.authn.CreateUserRequest.verify|verify} messages.
       * @param message CreateUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.authn.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a CreateUserRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns CreateUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.CreateUserRequest;

      /**
       * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns CreateUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.CreateUserRequest;

      /**
       * Verifies a CreateUserRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns CreateUserRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.CreateUserRequest;

      /**
       * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
       * @param message CreateUserRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.CreateUserRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this CreateUserRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for CreateUserRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateUserResponse. */
    interface ICreateUserResponse {
      /** ID of the new user. */
      userId?: string | null;

      /** The users password. */
      password?: string | null;
    }

    /** Represents a CreateUserResponse. */
    class CreateUserResponse implements ICreateUserResponse {
      /**
       * Constructs a new CreateUserResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.ICreateUserResponse);

      /** ID of the new user. */
      public userId: string;

      /** The users password. */
      public password: string;

      /**
       * Creates a new CreateUserResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns CreateUserResponse instance
       */
      public static create(properties?: d1.authn.ICreateUserResponse): d1.authn.CreateUserResponse;

      /**
       * Encodes the specified CreateUserResponse message. Does not implicitly {@link d1.authn.CreateUserResponse.verify|verify} messages.
       * @param message CreateUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.ICreateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified CreateUserResponse message, length delimited. Does not implicitly {@link d1.authn.CreateUserResponse.verify|verify} messages.
       * @param message CreateUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.authn.ICreateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a CreateUserResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns CreateUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.CreateUserResponse;

      /**
       * Decodes a CreateUserResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns CreateUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.CreateUserResponse;

      /**
       * Verifies a CreateUserResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a CreateUserResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns CreateUserResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.CreateUserResponse;

      /**
       * Creates a plain object from a CreateUserResponse message. Also converts values to other types if specified.
       * @param message CreateUserResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.CreateUserResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this CreateUserResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for CreateUserResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginUserRequest. */
    interface ILoginUserRequest {
      /** ID of the user. */
      userId?: string | null;

      /** The users password. */
      password?: string | null;
    }

    /** Represents a LoginUserRequest. */
    class LoginUserRequest implements ILoginUserRequest {
      /**
       * Constructs a new LoginUserRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.ILoginUserRequest);

      /** ID of the user. */
      public userId: string;

      /** The users password. */
      public password: string;

      /**
       * Creates a new LoginUserRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns LoginUserRequest instance
       */
      public static create(properties?: d1.authn.ILoginUserRequest): d1.authn.LoginUserRequest;

      /**
       * Encodes the specified LoginUserRequest message. Does not implicitly {@link d1.authn.LoginUserRequest.verify|verify} messages.
       * @param message LoginUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.ILoginUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified LoginUserRequest message, length delimited. Does not implicitly {@link d1.authn.LoginUserRequest.verify|verify} messages.
       * @param message LoginUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.authn.ILoginUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a LoginUserRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns LoginUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.LoginUserRequest;

      /**
       * Decodes a LoginUserRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns LoginUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.LoginUserRequest;

      /**
       * Verifies a LoginUserRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a LoginUserRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns LoginUserRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.LoginUserRequest;

      /**
       * Creates a plain object from a LoginUserRequest message. Also converts values to other types if specified.
       * @param message LoginUserRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.LoginUserRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this LoginUserRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for LoginUserRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginUserResponse. */
    interface ILoginUserResponse {
      /** Access token to be used in subsequent requests. */
      accessToken?: string | null;

      /** The expiration time of the access token. */
      expiryTime?: number | Long | null;
    }

    /** Represents a LoginUserResponse. */
    class LoginUserResponse implements ILoginUserResponse {
      /**
       * Constructs a new LoginUserResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.ILoginUserResponse);

      /** Access token to be used in subsequent requests. */
      public accessToken: string;

      /** The expiration time of the access token. */
      public expiryTime: number | Long;

      /**
       * Creates a new LoginUserResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns LoginUserResponse instance
       */
      public static create(properties?: d1.authn.ILoginUserResponse): d1.authn.LoginUserResponse;

      /**
       * Encodes the specified LoginUserResponse message. Does not implicitly {@link d1.authn.LoginUserResponse.verify|verify} messages.
       * @param message LoginUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.ILoginUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified LoginUserResponse message, length delimited. Does not implicitly {@link d1.authn.LoginUserResponse.verify|verify} messages.
       * @param message LoginUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.authn.ILoginUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a LoginUserResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns LoginUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.LoginUserResponse;

      /**
       * Decodes a LoginUserResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns LoginUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.LoginUserResponse;

      /**
       * Verifies a LoginUserResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a LoginUserResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns LoginUserResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.LoginUserResponse;

      /**
       * Creates a plain object from a LoginUserResponse message. Also converts values to other types if specified.
       * @param message LoginUserResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.LoginUserResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this LoginUserResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for LoginUserResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemoveUserRequest. */
    interface IRemoveUserRequest {
      /** ID of the user to remove. */
      userId?: string | null;
    }

    /** Represents a RemoveUserRequest. */
    class RemoveUserRequest implements IRemoveUserRequest {
      /**
       * Constructs a new RemoveUserRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.IRemoveUserRequest);

      /** ID of the user to remove. */
      public userId: string;

      /**
       * Creates a new RemoveUserRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RemoveUserRequest instance
       */
      public static create(properties?: d1.authn.IRemoveUserRequest): d1.authn.RemoveUserRequest;

      /**
       * Encodes the specified RemoveUserRequest message. Does not implicitly {@link d1.authn.RemoveUserRequest.verify|verify} messages.
       * @param message RemoveUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.IRemoveUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified RemoveUserRequest message, length delimited. Does not implicitly {@link d1.authn.RemoveUserRequest.verify|verify} messages.
       * @param message RemoveUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.authn.IRemoveUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RemoveUserRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns RemoveUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.RemoveUserRequest;

      /**
       * Decodes a RemoveUserRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns RemoveUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.RemoveUserRequest;

      /**
       * Verifies a RemoveUserRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a RemoveUserRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns RemoveUserRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.RemoveUserRequest;

      /**
       * Creates a plain object from a RemoveUserRequest message. Also converts values to other types if specified.
       * @param message RemoveUserRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.RemoveUserRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this RemoveUserRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for RemoveUserRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemoveUserResponse. */
    interface IRemoveUserResponse {}

    /** Represents a RemoveUserResponse. */
    class RemoveUserResponse implements IRemoveUserResponse {
      /**
       * Constructs a new RemoveUserResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.IRemoveUserResponse);

      /**
       * Creates a new RemoveUserResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RemoveUserResponse instance
       */
      public static create(properties?: d1.authn.IRemoveUserResponse): d1.authn.RemoveUserResponse;

      /**
       * Encodes the specified RemoveUserResponse message. Does not implicitly {@link d1.authn.RemoveUserResponse.verify|verify} messages.
       * @param message RemoveUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.IRemoveUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified RemoveUserResponse message, length delimited. Does not implicitly {@link d1.authn.RemoveUserResponse.verify|verify} messages.
       * @param message RemoveUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.authn.IRemoveUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RemoveUserResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns RemoveUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.RemoveUserResponse;

      /**
       * Decodes a RemoveUserResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns RemoveUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.RemoveUserResponse;

      /**
       * Verifies a RemoveUserResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a RemoveUserResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns RemoveUserResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.RemoveUserResponse;

      /**
       * Creates a plain object from a RemoveUserResponse message. Also converts values to other types if specified.
       * @param message RemoveUserResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.RemoveUserResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this RemoveUserResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for RemoveUserResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateGroupRequest. */
    interface ICreateGroupRequest {
      /** The scopes the group should be assigned. */
      scopes?: d1.scopes.Scope[] | null;
    }

    /** Represents a CreateGroupRequest. */
    class CreateGroupRequest implements ICreateGroupRequest {
      /**
       * Constructs a new CreateGroupRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.ICreateGroupRequest);

      /** The scopes the group should be assigned. */
      public scopes: d1.scopes.Scope[];

      /**
       * Creates a new CreateGroupRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns CreateGroupRequest instance
       */
      public static create(properties?: d1.authn.ICreateGroupRequest): d1.authn.CreateGroupRequest;

      /**
       * Encodes the specified CreateGroupRequest message. Does not implicitly {@link d1.authn.CreateGroupRequest.verify|verify} messages.
       * @param message CreateGroupRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.ICreateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified CreateGroupRequest message, length delimited. Does not implicitly {@link d1.authn.CreateGroupRequest.verify|verify} messages.
       * @param message CreateGroupRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.authn.ICreateGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a CreateGroupRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns CreateGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.CreateGroupRequest;

      /**
       * Decodes a CreateGroupRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns CreateGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.CreateGroupRequest;

      /**
       * Verifies a CreateGroupRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a CreateGroupRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns CreateGroupRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.CreateGroupRequest;

      /**
       * Creates a plain object from a CreateGroupRequest message. Also converts values to other types if specified.
       * @param message CreateGroupRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.CreateGroupRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this CreateGroupRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for CreateGroupRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateGroupResponse. */
    interface ICreateGroupResponse {
      /** ID of the new group. */
      groupId?: string | null;
    }

    /** Represents a CreateGroupResponse. */
    class CreateGroupResponse implements ICreateGroupResponse {
      /**
       * Constructs a new CreateGroupResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.ICreateGroupResponse);

      /** ID of the new group. */
      public groupId: string;

      /**
       * Creates a new CreateGroupResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns CreateGroupResponse instance
       */
      public static create(properties?: d1.authn.ICreateGroupResponse): d1.authn.CreateGroupResponse;

      /**
       * Encodes the specified CreateGroupResponse message. Does not implicitly {@link d1.authn.CreateGroupResponse.verify|verify} messages.
       * @param message CreateGroupResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.ICreateGroupResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified CreateGroupResponse message, length delimited. Does not implicitly {@link d1.authn.CreateGroupResponse.verify|verify} messages.
       * @param message CreateGroupResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authn.ICreateGroupResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a CreateGroupResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns CreateGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.CreateGroupResponse;

      /**
       * Decodes a CreateGroupResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns CreateGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.CreateGroupResponse;

      /**
       * Verifies a CreateGroupResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a CreateGroupResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns CreateGroupResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.CreateGroupResponse;

      /**
       * Creates a plain object from a CreateGroupResponse message. Also converts values to other types if specified.
       * @param message CreateGroupResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.CreateGroupResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this CreateGroupResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for CreateGroupResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddUserToGroupRequest. */
    interface IAddUserToGroupRequest {
      /** ID of the user to add. */
      userId?: string | null;

      /** ID of the group the user should be added to. */
      groupId?: string | null;
    }

    /** Represents an AddUserToGroupRequest. */
    class AddUserToGroupRequest implements IAddUserToGroupRequest {
      /**
       * Constructs a new AddUserToGroupRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.IAddUserToGroupRequest);

      /** ID of the user to add. */
      public userId: string;

      /** ID of the group the user should be added to. */
      public groupId: string;

      /**
       * Creates a new AddUserToGroupRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns AddUserToGroupRequest instance
       */
      public static create(properties?: d1.authn.IAddUserToGroupRequest): d1.authn.AddUserToGroupRequest;

      /**
       * Encodes the specified AddUserToGroupRequest message. Does not implicitly {@link d1.authn.AddUserToGroupRequest.verify|verify} messages.
       * @param message AddUserToGroupRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.IAddUserToGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified AddUserToGroupRequest message, length delimited. Does not implicitly {@link d1.authn.AddUserToGroupRequest.verify|verify} messages.
       * @param message AddUserToGroupRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authn.IAddUserToGroupRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes an AddUserToGroupRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns AddUserToGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.AddUserToGroupRequest;

      /**
       * Decodes an AddUserToGroupRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns AddUserToGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.AddUserToGroupRequest;

      /**
       * Verifies an AddUserToGroupRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an AddUserToGroupRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AddUserToGroupRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.AddUserToGroupRequest;

      /**
       * Creates a plain object from an AddUserToGroupRequest message. Also converts values to other types if specified.
       * @param message AddUserToGroupRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.AddUserToGroupRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this AddUserToGroupRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for AddUserToGroupRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddUserToGroupResponse. */
    interface IAddUserToGroupResponse {}

    /** Represents an AddUserToGroupResponse. */
    class AddUserToGroupResponse implements IAddUserToGroupResponse {
      /**
       * Constructs a new AddUserToGroupResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.IAddUserToGroupResponse);

      /**
       * Creates a new AddUserToGroupResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns AddUserToGroupResponse instance
       */
      public static create(properties?: d1.authn.IAddUserToGroupResponse): d1.authn.AddUserToGroupResponse;

      /**
       * Encodes the specified AddUserToGroupResponse message. Does not implicitly {@link d1.authn.AddUserToGroupResponse.verify|verify} messages.
       * @param message AddUserToGroupResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.IAddUserToGroupResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified AddUserToGroupResponse message, length delimited. Does not implicitly {@link d1.authn.AddUserToGroupResponse.verify|verify} messages.
       * @param message AddUserToGroupResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authn.IAddUserToGroupResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes an AddUserToGroupResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns AddUserToGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.AddUserToGroupResponse;

      /**
       * Decodes an AddUserToGroupResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns AddUserToGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.AddUserToGroupResponse;

      /**
       * Verifies an AddUserToGroupResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an AddUserToGroupResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AddUserToGroupResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.AddUserToGroupResponse;

      /**
       * Creates a plain object from an AddUserToGroupResponse message. Also converts values to other types if specified.
       * @param message AddUserToGroupResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.AddUserToGroupResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this AddUserToGroupResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for AddUserToGroupResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemoveUserFromGroupRequest. */
    interface IRemoveUserFromGroupRequest {
      /** ID of the user to remove. */
      userId?: string | null;

      /** ID of the group the user should be removed from. */
      groupId?: string | null;
    }

    /** Represents a RemoveUserFromGroupRequest. */
    class RemoveUserFromGroupRequest implements IRemoveUserFromGroupRequest {
      /**
       * Constructs a new RemoveUserFromGroupRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.IRemoveUserFromGroupRequest);

      /** ID of the user to remove. */
      public userId: string;

      /** ID of the group the user should be removed from. */
      public groupId: string;

      /**
       * Creates a new RemoveUserFromGroupRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RemoveUserFromGroupRequest instance
       */
      public static create(properties?: d1.authn.IRemoveUserFromGroupRequest): d1.authn.RemoveUserFromGroupRequest;

      /**
       * Encodes the specified RemoveUserFromGroupRequest message. Does not implicitly {@link d1.authn.RemoveUserFromGroupRequest.verify|verify} messages.
       * @param message RemoveUserFromGroupRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.IRemoveUserFromGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified RemoveUserFromGroupRequest message, length delimited. Does not implicitly {@link d1.authn.RemoveUserFromGroupRequest.verify|verify} messages.
       * @param message RemoveUserFromGroupRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authn.IRemoveUserFromGroupRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a RemoveUserFromGroupRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns RemoveUserFromGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authn.RemoveUserFromGroupRequest;

      /**
       * Decodes a RemoveUserFromGroupRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns RemoveUserFromGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.RemoveUserFromGroupRequest;

      /**
       * Verifies a RemoveUserFromGroupRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a RemoveUserFromGroupRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns RemoveUserFromGroupRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.RemoveUserFromGroupRequest;

      /**
       * Creates a plain object from a RemoveUserFromGroupRequest message. Also converts values to other types if specified.
       * @param message RemoveUserFromGroupRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.RemoveUserFromGroupRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this RemoveUserFromGroupRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for RemoveUserFromGroupRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemoveUserFromGroupResponse. */
    interface IRemoveUserFromGroupResponse {}

    /** Represents a RemoveUserFromGroupResponse. */
    class RemoveUserFromGroupResponse implements IRemoveUserFromGroupResponse {
      /**
       * Constructs a new RemoveUserFromGroupResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authn.IRemoveUserFromGroupResponse);

      /**
       * Creates a new RemoveUserFromGroupResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RemoveUserFromGroupResponse instance
       */
      public static create(properties?: d1.authn.IRemoveUserFromGroupResponse): d1.authn.RemoveUserFromGroupResponse;

      /**
       * Encodes the specified RemoveUserFromGroupResponse message. Does not implicitly {@link d1.authn.RemoveUserFromGroupResponse.verify|verify} messages.
       * @param message RemoveUserFromGroupResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authn.IRemoveUserFromGroupResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified RemoveUserFromGroupResponse message, length delimited. Does not implicitly {@link d1.authn.RemoveUserFromGroupResponse.verify|verify} messages.
       * @param message RemoveUserFromGroupResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authn.IRemoveUserFromGroupResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a RemoveUserFromGroupResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns RemoveUserFromGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): d1.authn.RemoveUserFromGroupResponse;

      /**
       * Decodes a RemoveUserFromGroupResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns RemoveUserFromGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authn.RemoveUserFromGroupResponse;

      /**
       * Verifies a RemoveUserFromGroupResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a RemoveUserFromGroupResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns RemoveUserFromGroupResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.authn.RemoveUserFromGroupResponse;

      /**
       * Creates a plain object from a RemoveUserFromGroupResponse message. Also converts values to other types if specified.
       * @param message RemoveUserFromGroupResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authn.RemoveUserFromGroupResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this RemoveUserFromGroupResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for RemoveUserFromGroupResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Namespace scopes. */
  namespace scopes {
    /** Access scopes. */
    enum Scope {
      READ = 0,
      CREATE = 1,
      GETACCESS = 2,
      MODIFYACCESS = 3,
      UPDATE = 4,
      DELETE = 5,
      INDEX = 6,
    }
  }

  /** Namespace authz. */
  namespace authz {
    /** Service for managing authorization rules. */
    class Authz extends $protobuf.rpc.Service {
      /**
       * Constructs a new Authz service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

      /**
       * Creates new Authz service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Authz;

      /**
       * Returns a list of groups with access to the specified object.
       * This call can fail if the auth storage cannot be reached, in which case an error is returned.
       * The calling user has to be authenticated and authorized to access the object in order to get the object permissions.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @param request GetPermissionsRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and GetPermissionsResponse
       */
      public getPermissions(
        request: d1.authz.IGetPermissionsRequest,
        callback: d1.authz.Authz.GetPermissionsCallback,
      ): void;

      /**
       * Returns a list of groups with access to the specified object.
       * This call can fail if the auth storage cannot be reached, in which case an error is returned.
       * The calling user has to be authenticated and authorized to access the object in order to get the object permissions.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @param request GetPermissionsRequest message or plain object
       * @returns Promise
       */
      public getPermissions(request: d1.authz.IGetPermissionsRequest): Promise<d1.authz.GetPermissionsResponse>;

      /**
       * Adds a group to the access list of the specified object.
       * This call can fail if the caller does not have access to the object, if the target group does not exist, or if the auth storage cannot be reached.
       * In these cases, an error is returned.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @param request AddPermissionRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and AddPermissionResponse
       */
      public addPermission(
        request: d1.authz.IAddPermissionRequest,
        callback: d1.authz.Authz.AddPermissionCallback,
      ): void;

      /**
       * Adds a group to the access list of the specified object.
       * This call can fail if the caller does not have access to the object, if the target group does not exist, or if the auth storage cannot be reached.
       * In these cases, an error is returned.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @param request AddPermissionRequest message or plain object
       * @returns Promise
       */
      public addPermission(request: d1.authz.IAddPermissionRequest): Promise<d1.authz.AddPermissionResponse>;

      /**
       * Removes a group from the access list of the specified object.
       * This call can fail if the caller does not have access to the object or if the auth storage cannot reached.
       * In these cases, an error is returned.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @param request RemovePermissionRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and RemovePermissionResponse
       */
      public removePermission(
        request: d1.authz.IRemovePermissionRequest,
        callback: d1.authz.Authz.RemovePermissionCallback,
      ): void;

      /**
       * Removes a group from the access list of the specified object.
       * This call can fail if the caller does not have access to the object or if the auth storage cannot reached.
       * In these cases, an error is returned.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @param request RemovePermissionRequest message or plain object
       * @returns Promise
       */
      public removePermission(request: d1.authz.IRemovePermissionRequest): Promise<d1.authz.RemovePermissionResponse>;
    }

    namespace Authz {
      /**
       * Callback as used by {@link d1.authz.Authz#getPermissions}.
       * @param error Error, if any
       * @param [response] GetPermissionsResponse
       */
      type GetPermissionsCallback = (error: Error | null, response?: d1.authz.GetPermissionsResponse) => void;

      /**
       * Callback as used by {@link d1.authz.Authz#addPermission}.
       * @param error Error, if any
       * @param [response] AddPermissionResponse
       */
      type AddPermissionCallback = (error: Error | null, response?: d1.authz.AddPermissionResponse) => void;

      /**
       * Callback as used by {@link d1.authz.Authz#removePermission}.
       * @param error Error, if any
       * @param [response] RemovePermissionResponse
       */
      type RemovePermissionCallback = (error: Error | null, response?: d1.authz.RemovePermissionResponse) => void;
    }

    /** Properties of a GetPermissionsRequest. */
    interface IGetPermissionsRequest {
      /** The ID of the object to get the permission list for. */
      objectId?: string | null;
    }

    /** Represents a request to get the permissions of an object. */
    class GetPermissionsRequest implements IGetPermissionsRequest {
      /**
       * Constructs a new GetPermissionsRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authz.IGetPermissionsRequest);

      /** The ID of the object to get the permission list for. */
      public objectId: string;

      /**
       * Creates a new GetPermissionsRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns GetPermissionsRequest instance
       */
      public static create(properties?: d1.authz.IGetPermissionsRequest): d1.authz.GetPermissionsRequest;

      /**
       * Encodes the specified GetPermissionsRequest message. Does not implicitly {@link d1.authz.GetPermissionsRequest.verify|verify} messages.
       * @param message GetPermissionsRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authz.IGetPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified GetPermissionsRequest message, length delimited. Does not implicitly {@link d1.authz.GetPermissionsRequest.verify|verify} messages.
       * @param message GetPermissionsRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authz.IGetPermissionsRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a GetPermissionsRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns GetPermissionsRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authz.GetPermissionsRequest;

      /**
       * Decodes a GetPermissionsRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns GetPermissionsRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authz.GetPermissionsRequest;

      /**
       * Verifies a GetPermissionsRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a GetPermissionsRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns GetPermissionsRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.authz.GetPermissionsRequest;

      /**
       * Creates a plain object from a GetPermissionsRequest message. Also converts values to other types if specified.
       * @param message GetPermissionsRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authz.GetPermissionsRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this GetPermissionsRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for GetPermissionsRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetPermissionsResponse. */
    interface IGetPermissionsResponse {
      /** List of groups with access to the object. */
      groupIds?: string[] | null;
    }

    /** Represents the result of a request to get permissions for an object. */
    class GetPermissionsResponse implements IGetPermissionsResponse {
      /**
       * Constructs a new GetPermissionsResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authz.IGetPermissionsResponse);

      /** List of groups with access to the object. */
      public groupIds: string[];

      /**
       * Creates a new GetPermissionsResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns GetPermissionsResponse instance
       */
      public static create(properties?: d1.authz.IGetPermissionsResponse): d1.authz.GetPermissionsResponse;

      /**
       * Encodes the specified GetPermissionsResponse message. Does not implicitly {@link d1.authz.GetPermissionsResponse.verify|verify} messages.
       * @param message GetPermissionsResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authz.IGetPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified GetPermissionsResponse message, length delimited. Does not implicitly {@link d1.authz.GetPermissionsResponse.verify|verify} messages.
       * @param message GetPermissionsResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authz.IGetPermissionsResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a GetPermissionsResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns GetPermissionsResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authz.GetPermissionsResponse;

      /**
       * Decodes a GetPermissionsResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns GetPermissionsResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authz.GetPermissionsResponse;

      /**
       * Verifies a GetPermissionsResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a GetPermissionsResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns GetPermissionsResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.authz.GetPermissionsResponse;

      /**
       * Creates a plain object from a GetPermissionsResponse message. Also converts values to other types if specified.
       * @param message GetPermissionsResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authz.GetPermissionsResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this GetPermissionsResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for GetPermissionsResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddPermissionRequest. */
    interface IAddPermissionRequest {
      /** The ID of the object to add the permission to. */
      objectId?: string | null;

      /** The ID of the group to give access. */
      groupId?: string | null;
    }

    /** Represents a request to add permission to an object. */
    class AddPermissionRequest implements IAddPermissionRequest {
      /**
       * Constructs a new AddPermissionRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authz.IAddPermissionRequest);

      /** The ID of the object to add the permission to. */
      public objectId: string;

      /** The ID of the group to give access. */
      public groupId: string;

      /**
       * Creates a new AddPermissionRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns AddPermissionRequest instance
       */
      public static create(properties?: d1.authz.IAddPermissionRequest): d1.authz.AddPermissionRequest;

      /**
       * Encodes the specified AddPermissionRequest message. Does not implicitly {@link d1.authz.AddPermissionRequest.verify|verify} messages.
       * @param message AddPermissionRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authz.IAddPermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified AddPermissionRequest message, length delimited. Does not implicitly {@link d1.authz.AddPermissionRequest.verify|verify} messages.
       * @param message AddPermissionRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authz.IAddPermissionRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes an AddPermissionRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns AddPermissionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authz.AddPermissionRequest;

      /**
       * Decodes an AddPermissionRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns AddPermissionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authz.AddPermissionRequest;

      /**
       * Verifies an AddPermissionRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an AddPermissionRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AddPermissionRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.authz.AddPermissionRequest;

      /**
       * Creates a plain object from an AddPermissionRequest message. Also converts values to other types if specified.
       * @param message AddPermissionRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authz.AddPermissionRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this AddPermissionRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for AddPermissionRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddPermissionResponse. */
    interface IAddPermissionResponse {}

    /** Represents the result of a request to add permission to an object. */
    class AddPermissionResponse implements IAddPermissionResponse {
      /**
       * Constructs a new AddPermissionResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authz.IAddPermissionResponse);

      /**
       * Creates a new AddPermissionResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns AddPermissionResponse instance
       */
      public static create(properties?: d1.authz.IAddPermissionResponse): d1.authz.AddPermissionResponse;

      /**
       * Encodes the specified AddPermissionResponse message. Does not implicitly {@link d1.authz.AddPermissionResponse.verify|verify} messages.
       * @param message AddPermissionResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authz.IAddPermissionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified AddPermissionResponse message, length delimited. Does not implicitly {@link d1.authz.AddPermissionResponse.verify|verify} messages.
       * @param message AddPermissionResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authz.IAddPermissionResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes an AddPermissionResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns AddPermissionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authz.AddPermissionResponse;

      /**
       * Decodes an AddPermissionResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns AddPermissionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authz.AddPermissionResponse;

      /**
       * Verifies an AddPermissionResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an AddPermissionResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AddPermissionResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.authz.AddPermissionResponse;

      /**
       * Creates a plain object from an AddPermissionResponse message. Also converts values to other types if specified.
       * @param message AddPermissionResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authz.AddPermissionResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this AddPermissionResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for AddPermissionResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemovePermissionRequest. */
    interface IRemovePermissionRequest {
      /** The ID of the object to remove the permission for. */
      objectId?: string | null;

      /** The ID of the group to revoke permission for. */
      groupId?: string | null;
    }

    /** Represents a request to remove permission to an object. */
    class RemovePermissionRequest implements IRemovePermissionRequest {
      /**
       * Constructs a new RemovePermissionRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authz.IRemovePermissionRequest);

      /** The ID of the object to remove the permission for. */
      public objectId: string;

      /** The ID of the group to revoke permission for. */
      public groupId: string;

      /**
       * Creates a new RemovePermissionRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RemovePermissionRequest instance
       */
      public static create(properties?: d1.authz.IRemovePermissionRequest): d1.authz.RemovePermissionRequest;

      /**
       * Encodes the specified RemovePermissionRequest message. Does not implicitly {@link d1.authz.RemovePermissionRequest.verify|verify} messages.
       * @param message RemovePermissionRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authz.IRemovePermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified RemovePermissionRequest message, length delimited. Does not implicitly {@link d1.authz.RemovePermissionRequest.verify|verify} messages.
       * @param message RemovePermissionRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authz.IRemovePermissionRequest,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a RemovePermissionRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns RemovePermissionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authz.RemovePermissionRequest;

      /**
       * Decodes a RemovePermissionRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns RemovePermissionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authz.RemovePermissionRequest;

      /**
       * Verifies a RemovePermissionRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a RemovePermissionRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns RemovePermissionRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.authz.RemovePermissionRequest;

      /**
       * Creates a plain object from a RemovePermissionRequest message. Also converts values to other types if specified.
       * @param message RemovePermissionRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authz.RemovePermissionRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this RemovePermissionRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for RemovePermissionRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RemovePermissionResponse. */
    interface IRemovePermissionResponse {}

    /** Represents the result of a request to remove permission to an object. */
    class RemovePermissionResponse implements IRemovePermissionResponse {
      /**
       * Constructs a new RemovePermissionResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.authz.IRemovePermissionResponse);

      /**
       * Creates a new RemovePermissionResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RemovePermissionResponse instance
       */
      public static create(properties?: d1.authz.IRemovePermissionResponse): d1.authz.RemovePermissionResponse;

      /**
       * Encodes the specified RemovePermissionResponse message. Does not implicitly {@link d1.authz.RemovePermissionResponse.verify|verify} messages.
       * @param message RemovePermissionResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.authz.IRemovePermissionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified RemovePermissionResponse message, length delimited. Does not implicitly {@link d1.authz.RemovePermissionResponse.verify|verify} messages.
       * @param message RemovePermissionResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: d1.authz.IRemovePermissionResponse,
        writer?: $protobuf.Writer,
      ): $protobuf.Writer;

      /**
       * Decodes a RemovePermissionResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns RemovePermissionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.authz.RemovePermissionResponse;

      /**
       * Decodes a RemovePermissionResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns RemovePermissionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.authz.RemovePermissionResponse;

      /**
       * Verifies a RemovePermissionResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a RemovePermissionResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns RemovePermissionResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.authz.RemovePermissionResponse;

      /**
       * Creates a plain object from a RemovePermissionResponse message. Also converts values to other types if specified.
       * @param message RemovePermissionResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.authz.RemovePermissionResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this RemovePermissionResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for RemovePermissionResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Namespace generic. */
  namespace generic {
    /** Service for encryption and decryption of data. */
    class Generic extends $protobuf.rpc.Service {
      /**
       * Constructs a new Generic service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

      /**
       * Creates new Generic service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean,
      ): Generic;

      /**
       * Calls Encrypt.
       * @param request EncryptRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and EncryptResponse
       */
      public encrypt(request: d1.generic.IEncryptRequest, callback: d1.generic.Generic.EncryptCallback): void;

      /**
       * Calls Encrypt.
       * @param request EncryptRequest message or plain object
       * @returns Promise
       */
      public encrypt(request: d1.generic.IEncryptRequest): Promise<d1.generic.EncryptResponse>;

      /**
       * Calls Decrypt.
       * @param request DecryptRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and DecryptResponse
       */
      public decrypt(request: d1.generic.IDecryptRequest, callback: d1.generic.Generic.DecryptCallback): void;

      /**
       * Calls Decrypt.
       * @param request DecryptRequest message or plain object
       * @returns Promise
       */
      public decrypt(request: d1.generic.IDecryptRequest): Promise<d1.generic.DecryptResponse>;
    }

    namespace Generic {
      /**
       * Callback as used by {@link d1.generic.Generic#encrypt}.
       * @param error Error, if any
       * @param [response] EncryptResponse
       */
      type EncryptCallback = (error: Error | null, response?: d1.generic.EncryptResponse) => void;

      /**
       * Callback as used by {@link d1.generic.Generic#decrypt}.
       * @param error Error, if any
       * @param [response] DecryptResponse
       */
      type DecryptCallback = (error: Error | null, response?: d1.generic.DecryptResponse) => void;
    }

    /** Properties of an EncryptRequest. */
    interface IEncryptRequest {
      /** Data to encrypt. */
      plaintext?: Uint8Array | null;

      /** Associated data. */
      associatedData?: Uint8Array | null;
    }

    /** Represents a request to encrypt data. */
    class EncryptRequest implements IEncryptRequest {
      /**
       * Constructs a new EncryptRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.generic.IEncryptRequest);

      /** Data to encrypt. */
      public plaintext: Uint8Array;

      /** Associated data. */
      public associatedData: Uint8Array;

      /**
       * Creates a new EncryptRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EncryptRequest instance
       */
      public static create(properties?: d1.generic.IEncryptRequest): d1.generic.EncryptRequest;

      /**
       * Encodes the specified EncryptRequest message. Does not implicitly {@link d1.generic.EncryptRequest.verify|verify} messages.
       * @param message EncryptRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.generic.IEncryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified EncryptRequest message, length delimited. Does not implicitly {@link d1.generic.EncryptRequest.verify|verify} messages.
       * @param message EncryptRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.generic.IEncryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an EncryptRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EncryptRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.generic.EncryptRequest;

      /**
       * Decodes an EncryptRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EncryptRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.generic.EncryptRequest;

      /**
       * Verifies an EncryptRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EncryptRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EncryptRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.generic.EncryptRequest;

      /**
       * Creates a plain object from an EncryptRequest message. Also converts values to other types if specified.
       * @param message EncryptRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.generic.EncryptRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this EncryptRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for EncryptRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EncryptResponse. */
    interface IEncryptResponse {
      /** Ciphertext of the provided plaintext. */
      ciphertext?: Uint8Array | null;

      /** Associated data. */
      associatedData?: Uint8Array | null;

      /** The object ID of the encrypted data. */
      objectId?: string | null;
    }

    /** Represents a response to an encryption request. */
    class EncryptResponse implements IEncryptResponse {
      /**
       * Constructs a new EncryptResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.generic.IEncryptResponse);

      /** Ciphertext of the provided plaintext. */
      public ciphertext: Uint8Array;

      /** Associated data. */
      public associatedData: Uint8Array;

      /** The object ID of the encrypted data. */
      public objectId: string;

      /**
       * Creates a new EncryptResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EncryptResponse instance
       */
      public static create(properties?: d1.generic.IEncryptResponse): d1.generic.EncryptResponse;

      /**
       * Encodes the specified EncryptResponse message. Does not implicitly {@link d1.generic.EncryptResponse.verify|verify} messages.
       * @param message EncryptResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.generic.IEncryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified EncryptResponse message, length delimited. Does not implicitly {@link d1.generic.EncryptResponse.verify|verify} messages.
       * @param message EncryptResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.generic.IEncryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an EncryptResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EncryptResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.generic.EncryptResponse;

      /**
       * Decodes an EncryptResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EncryptResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.generic.EncryptResponse;

      /**
       * Verifies an EncryptResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EncryptResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EncryptResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.generic.EncryptResponse;

      /**
       * Creates a plain object from an EncryptResponse message. Also converts values to other types if specified.
       * @param message EncryptResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.generic.EncryptResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this EncryptResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for EncryptResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DecryptRequest. */
    interface IDecryptRequest {
      /** Data to decrypt. */
      ciphertext?: Uint8Array | null;

      /** Associated data. */
      associatedData?: Uint8Array | null;

      /** The object ID of the data. */
      objectId?: string | null;
    }

    /** Represents a request to decrypt data. */
    class DecryptRequest implements IDecryptRequest {
      /**
       * Constructs a new DecryptRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.generic.IDecryptRequest);

      /** Data to decrypt. */
      public ciphertext: Uint8Array;

      /** Associated data. */
      public associatedData: Uint8Array;

      /** The object ID of the data. */
      public objectId: string;

      /**
       * Creates a new DecryptRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DecryptRequest instance
       */
      public static create(properties?: d1.generic.IDecryptRequest): d1.generic.DecryptRequest;

      /**
       * Encodes the specified DecryptRequest message. Does not implicitly {@link d1.generic.DecryptRequest.verify|verify} messages.
       * @param message DecryptRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.generic.IDecryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified DecryptRequest message, length delimited. Does not implicitly {@link d1.generic.DecryptRequest.verify|verify} messages.
       * @param message DecryptRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.generic.IDecryptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a DecryptRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DecryptRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.generic.DecryptRequest;

      /**
       * Decodes a DecryptRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DecryptRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.generic.DecryptRequest;

      /**
       * Verifies a DecryptRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a DecryptRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DecryptRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.generic.DecryptRequest;

      /**
       * Creates a plain object from a DecryptRequest message. Also converts values to other types if specified.
       * @param message DecryptRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.generic.DecryptRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this DecryptRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for DecryptRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DecryptResponse. */
    interface IDecryptResponse {
      /** Decrypted data. */
      plaintext?: Uint8Array | null;

      /** Associated data. */
      associatedData?: Uint8Array | null;
    }

    /** Represents a response to a decryption request. */
    class DecryptResponse implements IDecryptResponse {
      /**
       * Constructs a new DecryptResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.generic.IDecryptResponse);

      /** Decrypted data. */
      public plaintext: Uint8Array;

      /** Associated data. */
      public associatedData: Uint8Array;

      /**
       * Creates a new DecryptResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DecryptResponse instance
       */
      public static create(properties?: d1.generic.IDecryptResponse): d1.generic.DecryptResponse;

      /**
       * Encodes the specified DecryptResponse message. Does not implicitly {@link d1.generic.DecryptResponse.verify|verify} messages.
       * @param message DecryptResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.generic.IDecryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified DecryptResponse message, length delimited. Does not implicitly {@link d1.generic.DecryptResponse.verify|verify} messages.
       * @param message DecryptResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.generic.IDecryptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a DecryptResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DecryptResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.generic.DecryptResponse;

      /**
       * Decodes a DecryptResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DecryptResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.generic.DecryptResponse;

      /**
       * Verifies a DecryptResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a DecryptResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DecryptResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.generic.DecryptResponse;

      /**
       * Creates a plain object from a DecryptResponse message. Also converts values to other types if specified.
       * @param message DecryptResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.generic.DecryptResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this DecryptResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for DecryptResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Namespace index. */
  namespace index {
    /** Service for using secure index. */
    class Index extends $protobuf.rpc.Service {
      /**
       * Constructs a new Index service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

      /**
       * Creates new Index service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Index;

      /**
       * Calls Add.
       * @param request AddRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and AddResponse
       */
      public add(request: d1.index.IAddRequest, callback: d1.index.Index.AddCallback): void;

      /**
       * Calls Add.
       * @param request AddRequest message or plain object
       * @returns Promise
       */
      public add(request: d1.index.IAddRequest): Promise<d1.index.AddResponse>;

      /**
       * Calls Search.
       * @param request SearchRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and SearchResponse
       */
      public search(request: d1.index.ISearchRequest, callback: d1.index.Index.SearchCallback): void;

      /**
       * Calls Search.
       * @param request SearchRequest message or plain object
       * @returns Promise
       */
      public search(request: d1.index.ISearchRequest): Promise<d1.index.SearchResponse>;

      /**
       * Calls Delete.
       * @param request DeleteRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and DeleteResponse
       */
      public delete(request: d1.index.IDeleteRequest, callback: d1.index.Index.DeleteCallback): void;

      /**
       * Calls Delete.
       * @param request DeleteRequest message or plain object
       * @returns Promise
       */
      public delete(request: d1.index.IDeleteRequest): Promise<d1.index.DeleteResponse>;
    }

    namespace Index {
      /**
       * Callback as used by {@link d1.index.Index#add}.
       * @param error Error, if any
       * @param [response] AddResponse
       */
      type AddCallback = (error: Error | null, response?: d1.index.AddResponse) => void;

      /**
       * Callback as used by {@link d1.index.Index#search}.
       * @param error Error, if any
       * @param [response] SearchResponse
       */
      type SearchCallback = (error: Error | null, response?: d1.index.SearchResponse) => void;

      /**
       * Callback as used by {@link d1.index.Index#delete_}.
       * @param error Error, if any
       * @param [response] DeleteResponse
       */
      type DeleteCallback = (error: Error | null, response?: d1.index.DeleteResponse) => void;
    }

    /** Properties of an AddRequest. */
    interface IAddRequest {
      /** Keywords to be associated with identifier in secure index. */
      keywords?: string[] | null;

      /** Identifier, e.g. a document ID, to be stored in secure index. */
      identifier?: string | null;
    }

    /** Represents an AddRequest. */
    class AddRequest implements IAddRequest {
      /**
       * Constructs a new AddRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.index.IAddRequest);

      /** Keywords to be associated with identifier in secure index. */
      public keywords: string[];

      /** Identifier, e.g. a document ID, to be stored in secure index. */
      public identifier: string;

      /**
       * Creates a new AddRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns AddRequest instance
       */
      public static create(properties?: d1.index.IAddRequest): d1.index.AddRequest;

      /**
       * Encodes the specified AddRequest message. Does not implicitly {@link d1.index.AddRequest.verify|verify} messages.
       * @param message AddRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.index.IAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified AddRequest message, length delimited. Does not implicitly {@link d1.index.AddRequest.verify|verify} messages.
       * @param message AddRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.index.IAddRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an AddRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns AddRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.index.AddRequest;

      /**
       * Decodes an AddRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns AddRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.index.AddRequest;

      /**
       * Verifies an AddRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an AddRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AddRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.index.AddRequest;

      /**
       * Creates a plain object from an AddRequest message. Also converts values to other types if specified.
       * @param message AddRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.index.AddRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this AddRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for AddRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AddResponse. */
    interface IAddResponse {}

    /** Represents a response to an add request. */
    class AddResponse implements IAddResponse {
      /**
       * Constructs a new AddResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.index.IAddResponse);

      /**
       * Creates a new AddResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns AddResponse instance
       */
      public static create(properties?: d1.index.IAddResponse): d1.index.AddResponse;

      /**
       * Encodes the specified AddResponse message. Does not implicitly {@link d1.index.AddResponse.verify|verify} messages.
       * @param message AddResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.index.IAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified AddResponse message, length delimited. Does not implicitly {@link d1.index.AddResponse.verify|verify} messages.
       * @param message AddResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.index.IAddResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an AddResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns AddResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.index.AddResponse;

      /**
       * Decodes an AddResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns AddResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.index.AddResponse;

      /**
       * Verifies an AddResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an AddResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AddResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.index.AddResponse;

      /**
       * Creates a plain object from an AddResponse message. Also converts values to other types if specified.
       * @param message AddResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.index.AddResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this AddResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for AddResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SearchRequest. */
    interface ISearchRequest {
      /** Keyword to search for in secure index. */
      keyword?: string | null;
    }

    /** Represents a SearchRequest. */
    class SearchRequest implements ISearchRequest {
      /**
       * Constructs a new SearchRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.index.ISearchRequest);

      /** Keyword to search for in secure index. */
      public keyword: string;

      /**
       * Creates a new SearchRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SearchRequest instance
       */
      public static create(properties?: d1.index.ISearchRequest): d1.index.SearchRequest;

      /**
       * Encodes the specified SearchRequest message. Does not implicitly {@link d1.index.SearchRequest.verify|verify} messages.
       * @param message SearchRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.index.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link d1.index.SearchRequest.verify|verify} messages.
       * @param message SearchRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.index.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a SearchRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SearchRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.index.SearchRequest;

      /**
       * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SearchRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.index.SearchRequest;

      /**
       * Verifies a SearchRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SearchRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.index.SearchRequest;

      /**
       * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
       * @param message SearchRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.index.SearchRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this SearchRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for SearchRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SearchResponse. */
    interface ISearchResponse {
      /** Identifiers that contain the keyword in secure index. */
      identifiers?: string[] | null;
    }

    /** Represents a response to a search request. */
    class SearchResponse implements ISearchResponse {
      /**
       * Constructs a new SearchResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.index.ISearchResponse);

      /** Identifiers that contain the keyword in secure index. */
      public identifiers: string[];

      /**
       * Creates a new SearchResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SearchResponse instance
       */
      public static create(properties?: d1.index.ISearchResponse): d1.index.SearchResponse;

      /**
       * Encodes the specified SearchResponse message. Does not implicitly {@link d1.index.SearchResponse.verify|verify} messages.
       * @param message SearchResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.index.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link d1.index.SearchResponse.verify|verify} messages.
       * @param message SearchResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.index.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a SearchResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SearchResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.index.SearchResponse;

      /**
       * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SearchResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.index.SearchResponse;

      /**
       * Verifies a SearchResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SearchResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.index.SearchResponse;

      /**
       * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
       * @param message SearchResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.index.SearchResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this SearchResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for SearchResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteRequest. */
    interface IDeleteRequest {
      /** Keywords that are associated with identifier in secure index. */
      keywords?: string[] | null;

      /** Identifier stored in secure index. */
      identifier?: string | null;
    }

    /** Represents a DeleteRequest. */
    class DeleteRequest implements IDeleteRequest {
      /**
       * Constructs a new DeleteRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.index.IDeleteRequest);

      /** Keywords that are associated with identifier in secure index. */
      public keywords: string[];

      /** Identifier stored in secure index. */
      public identifier: string;

      /**
       * Creates a new DeleteRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DeleteRequest instance
       */
      public static create(properties?: d1.index.IDeleteRequest): d1.index.DeleteRequest;

      /**
       * Encodes the specified DeleteRequest message. Does not implicitly {@link d1.index.DeleteRequest.verify|verify} messages.
       * @param message DeleteRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.index.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link d1.index.DeleteRequest.verify|verify} messages.
       * @param message DeleteRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.index.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a DeleteRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DeleteRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.index.DeleteRequest;

      /**
       * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DeleteRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.index.DeleteRequest;

      /**
       * Verifies a DeleteRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DeleteRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.index.DeleteRequest;

      /**
       * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
       * @param message DeleteRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.index.DeleteRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this DeleteRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for DeleteRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteResponse. */
    interface IDeleteResponse {}

    /** Represents a response to a delete request. */
    class DeleteResponse implements IDeleteResponse {
      /**
       * Constructs a new DeleteResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.index.IDeleteResponse);

      /**
       * Creates a new DeleteResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DeleteResponse instance
       */
      public static create(properties?: d1.index.IDeleteResponse): d1.index.DeleteResponse;

      /**
       * Encodes the specified DeleteResponse message. Does not implicitly {@link d1.index.DeleteResponse.verify|verify} messages.
       * @param message DeleteResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.index.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link d1.index.DeleteResponse.verify|verify} messages.
       * @param message DeleteResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.index.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a DeleteResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DeleteResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.index.DeleteResponse;

      /**
       * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DeleteResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.index.DeleteResponse;

      /**
       * Verifies a DeleteResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DeleteResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.index.DeleteResponse;

      /**
       * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
       * @param message DeleteResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.index.DeleteResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this DeleteResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for DeleteResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Namespace storage. */
  namespace storage {
    /** Service for managing stored objects. */
    class Storage extends $protobuf.rpc.Service {
      /**
       * Constructs a new Storage service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

      /**
       * Creates new Storage service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean,
      ): Storage;

      /**
       * Store an object in encrypted form.
       * @param request StoreRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and StoreResponse
       */
      public store(request: d1.storage.IStoreRequest, callback: d1.storage.Storage.StoreCallback): void;

      /**
       * Store an object in encrypted form.
       * @param request StoreRequest message or plain object
       * @returns Promise
       */
      public store(request: d1.storage.IStoreRequest): Promise<d1.storage.StoreResponse>;

      /**
       * Fetches a previously stored object and returns the plaintext content.
       * @param request RetrieveRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and RetrieveResponse
       */
      public retrieve(request: d1.storage.IRetrieveRequest, callback: d1.storage.Storage.RetrieveCallback): void;

      /**
       * Fetches a previously stored object and returns the plaintext content.
       * @param request RetrieveRequest message or plain object
       * @returns Promise
       */
      public retrieve(request: d1.storage.IRetrieveRequest): Promise<d1.storage.RetrieveResponse>;

      /**
       * Store an object in encrypted form, replacing the data previously stored.
       * @param request UpdateRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and UpdateResponse
       */
      public update(request: d1.storage.IUpdateRequest, callback: d1.storage.Storage.UpdateCallback): void;

      /**
       * Store an object in encrypted form, replacing the data previously stored.
       * @param request UpdateRequest message or plain object
       * @returns Promise
       */
      public update(request: d1.storage.IUpdateRequest): Promise<d1.storage.UpdateResponse>;

      /**
       * Deletes a previously stored object.
       * @param request DeleteRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and DeleteResponse
       */
      public delete(request: d1.storage.IDeleteRequest, callback: d1.storage.Storage.DeleteCallback): void;

      /**
       * Deletes a previously stored object.
       * @param request DeleteRequest message or plain object
       * @returns Promise
       */
      public delete(request: d1.storage.IDeleteRequest): Promise<d1.storage.DeleteResponse>;
    }

    namespace Storage {
      /**
       * Callback as used by {@link d1.storage.Storage#store}.
       * @param error Error, if any
       * @param [response] StoreResponse
       */
      type StoreCallback = (error: Error | null, response?: d1.storage.StoreResponse) => void;

      /**
       * Callback as used by {@link d1.storage.Storage#retrieve}.
       * @param error Error, if any
       * @param [response] RetrieveResponse
       */
      type RetrieveCallback = (error: Error | null, response?: d1.storage.RetrieveResponse) => void;

      /**
       * Callback as used by {@link d1.storage.Storage#update}.
       * @param error Error, if any
       * @param [response] UpdateResponse
       */
      type UpdateCallback = (error: Error | null, response?: d1.storage.UpdateResponse) => void;

      /**
       * Callback as used by {@link d1.storage.Storage#delete_}.
       * @param error Error, if any
       * @param [response] DeleteResponse
       */
      type DeleteCallback = (error: Error | null, response?: d1.storage.DeleteResponse) => void;
    }

    /** Properties of a StoreRequest. */
    interface IStoreRequest {
      /** Data to encrypt. */
      plaintext?: Uint8Array | null;

      /** Associated data. */
      associatedData?: Uint8Array | null;
    }

    /** Represents a request to store an object. */
    class StoreRequest implements IStoreRequest {
      /**
       * Constructs a new StoreRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.storage.IStoreRequest);

      /** Data to encrypt. */
      public plaintext: Uint8Array;

      /** Associated data. */
      public associatedData: Uint8Array;

      /**
       * Creates a new StoreRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns StoreRequest instance
       */
      public static create(properties?: d1.storage.IStoreRequest): d1.storage.StoreRequest;

      /**
       * Encodes the specified StoreRequest message. Does not implicitly {@link d1.storage.StoreRequest.verify|verify} messages.
       * @param message StoreRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.storage.IStoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified StoreRequest message, length delimited. Does not implicitly {@link d1.storage.StoreRequest.verify|verify} messages.
       * @param message StoreRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.storage.IStoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a StoreRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns StoreRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.storage.StoreRequest;

      /**
       * Decodes a StoreRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns StoreRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.storage.StoreRequest;

      /**
       * Verifies a StoreRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a StoreRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns StoreRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.storage.StoreRequest;

      /**
       * Creates a plain object from a StoreRequest message. Also converts values to other types if specified.
       * @param message StoreRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.storage.StoreRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this StoreRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for StoreRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StoreResponse. */
    interface IStoreResponse {
      /** The object ID to the stored data. */
      objectId?: string | null;
    }

    /** Represents a response to a store request. */
    class StoreResponse implements IStoreResponse {
      /**
       * Constructs a new StoreResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.storage.IStoreResponse);

      /** The object ID to the stored data. */
      public objectId: string;

      /**
       * Creates a new StoreResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns StoreResponse instance
       */
      public static create(properties?: d1.storage.IStoreResponse): d1.storage.StoreResponse;

      /**
       * Encodes the specified StoreResponse message. Does not implicitly {@link d1.storage.StoreResponse.verify|verify} messages.
       * @param message StoreResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.storage.IStoreResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified StoreResponse message, length delimited. Does not implicitly {@link d1.storage.StoreResponse.verify|verify} messages.
       * @param message StoreResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.storage.IStoreResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a StoreResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns StoreResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.storage.StoreResponse;

      /**
       * Decodes a StoreResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns StoreResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.storage.StoreResponse;

      /**
       * Verifies a StoreResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a StoreResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns StoreResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.storage.StoreResponse;

      /**
       * Creates a plain object from a StoreResponse message. Also converts values to other types if specified.
       * @param message StoreResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.storage.StoreResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this StoreResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for StoreResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RetrieveRequest. */
    interface IRetrieveRequest {
      /** The object ID to retrieve. */
      objectId?: string | null;
    }

    /** Represents a request to retrieve an object. */
    class RetrieveRequest implements IRetrieveRequest {
      /**
       * Constructs a new RetrieveRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.storage.IRetrieveRequest);

      /** The object ID to retrieve. */
      public objectId: string;

      /**
       * Creates a new RetrieveRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RetrieveRequest instance
       */
      public static create(properties?: d1.storage.IRetrieveRequest): d1.storage.RetrieveRequest;

      /**
       * Encodes the specified RetrieveRequest message. Does not implicitly {@link d1.storage.RetrieveRequest.verify|verify} messages.
       * @param message RetrieveRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.storage.IRetrieveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified RetrieveRequest message, length delimited. Does not implicitly {@link d1.storage.RetrieveRequest.verify|verify} messages.
       * @param message RetrieveRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.storage.IRetrieveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RetrieveRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns RetrieveRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.storage.RetrieveRequest;

      /**
       * Decodes a RetrieveRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns RetrieveRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.storage.RetrieveRequest;

      /**
       * Verifies a RetrieveRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a RetrieveRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns RetrieveRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.storage.RetrieveRequest;

      /**
       * Creates a plain object from a RetrieveRequest message. Also converts values to other types if specified.
       * @param message RetrieveRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.storage.RetrieveRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this RetrieveRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for RetrieveRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RetrieveResponse. */
    interface IRetrieveResponse {
      /** The decrypted data. */
      plaintext?: Uint8Array | null;

      /** Associated data. */
      associatedData?: Uint8Array | null;
    }

    /** Represents a response to a retrieve request. */
    class RetrieveResponse implements IRetrieveResponse {
      /**
       * Constructs a new RetrieveResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.storage.IRetrieveResponse);

      /** The decrypted data. */
      public plaintext: Uint8Array;

      /** Associated data. */
      public associatedData: Uint8Array;

      /**
       * Creates a new RetrieveResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RetrieveResponse instance
       */
      public static create(properties?: d1.storage.IRetrieveResponse): d1.storage.RetrieveResponse;

      /**
       * Encodes the specified RetrieveResponse message. Does not implicitly {@link d1.storage.RetrieveResponse.verify|verify} messages.
       * @param message RetrieveResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.storage.IRetrieveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified RetrieveResponse message, length delimited. Does not implicitly {@link d1.storage.RetrieveResponse.verify|verify} messages.
       * @param message RetrieveResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.storage.IRetrieveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a RetrieveResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns RetrieveResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.storage.RetrieveResponse;

      /**
       * Decodes a RetrieveResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns RetrieveResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.storage.RetrieveResponse;

      /**
       * Verifies a RetrieveResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a RetrieveResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns RetrieveResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.storage.RetrieveResponse;

      /**
       * Creates a plain object from a RetrieveResponse message. Also converts values to other types if specified.
       * @param message RetrieveResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.storage.RetrieveResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this RetrieveResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for RetrieveResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateRequest. */
    interface IUpdateRequest {
      /** The data to encrypt. */
      plaintext?: Uint8Array | null;

      /** Associated data. */
      associatedData?: Uint8Array | null;

      /** The ID of the object to update. */
      objectId?: string | null;
    }

    /** Represents a request to update an object. */
    class UpdateRequest implements IUpdateRequest {
      /**
       * Constructs a new UpdateRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.storage.IUpdateRequest);

      /** The data to encrypt. */
      public plaintext: Uint8Array;

      /** Associated data. */
      public associatedData: Uint8Array;

      /** The ID of the object to update. */
      public objectId: string;

      /**
       * Creates a new UpdateRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns UpdateRequest instance
       */
      public static create(properties?: d1.storage.IUpdateRequest): d1.storage.UpdateRequest;

      /**
       * Encodes the specified UpdateRequest message. Does not implicitly {@link d1.storage.UpdateRequest.verify|verify} messages.
       * @param message UpdateRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.storage.IUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified UpdateRequest message, length delimited. Does not implicitly {@link d1.storage.UpdateRequest.verify|verify} messages.
       * @param message UpdateRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.storage.IUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an UpdateRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns UpdateRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.storage.UpdateRequest;

      /**
       * Decodes an UpdateRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns UpdateRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.storage.UpdateRequest;

      /**
       * Verifies an UpdateRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an UpdateRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns UpdateRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.storage.UpdateRequest;

      /**
       * Creates a plain object from an UpdateRequest message. Also converts values to other types if specified.
       * @param message UpdateRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.storage.UpdateRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this UpdateRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for UpdateRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpdateResponse. */
    interface IUpdateResponse {}

    /** Represents a response to an update request. */
    class UpdateResponse implements IUpdateResponse {
      /**
       * Constructs a new UpdateResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.storage.IUpdateResponse);

      /**
       * Creates a new UpdateResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns UpdateResponse instance
       */
      public static create(properties?: d1.storage.IUpdateResponse): d1.storage.UpdateResponse;

      /**
       * Encodes the specified UpdateResponse message. Does not implicitly {@link d1.storage.UpdateResponse.verify|verify} messages.
       * @param message UpdateResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.storage.IUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified UpdateResponse message, length delimited. Does not implicitly {@link d1.storage.UpdateResponse.verify|verify} messages.
       * @param message UpdateResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.storage.IUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes an UpdateResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns UpdateResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.storage.UpdateResponse;

      /**
       * Decodes an UpdateResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns UpdateResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.storage.UpdateResponse;

      /**
       * Verifies an UpdateResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an UpdateResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns UpdateResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.storage.UpdateResponse;

      /**
       * Creates a plain object from an UpdateResponse message. Also converts values to other types if specified.
       * @param message UpdateResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.storage.UpdateResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this UpdateResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for UpdateResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteRequest. */
    interface IDeleteRequest {
      /** The ID of the object to delete. */
      objectId?: string | null;
    }

    /** Represents a request to delete an object. */
    class DeleteRequest implements IDeleteRequest {
      /**
       * Constructs a new DeleteRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.storage.IDeleteRequest);

      /** The ID of the object to delete. */
      public objectId: string;

      /**
       * Creates a new DeleteRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DeleteRequest instance
       */
      public static create(properties?: d1.storage.IDeleteRequest): d1.storage.DeleteRequest;

      /**
       * Encodes the specified DeleteRequest message. Does not implicitly {@link d1.storage.DeleteRequest.verify|verify} messages.
       * @param message DeleteRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.storage.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link d1.storage.DeleteRequest.verify|verify} messages.
       * @param message DeleteRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.storage.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a DeleteRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DeleteRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.storage.DeleteRequest;

      /**
       * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DeleteRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.storage.DeleteRequest;

      /**
       * Verifies a DeleteRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DeleteRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.storage.DeleteRequest;

      /**
       * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
       * @param message DeleteRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.storage.DeleteRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this DeleteRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for DeleteRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeleteResponse. */
    interface IDeleteResponse {}

    /** Represents a response to a delete request. */
    class DeleteResponse implements IDeleteResponse {
      /**
       * Constructs a new DeleteResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.storage.IDeleteResponse);

      /**
       * Creates a new DeleteResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DeleteResponse instance
       */
      public static create(properties?: d1.storage.IDeleteResponse): d1.storage.DeleteResponse;

      /**
       * Encodes the specified DeleteResponse message. Does not implicitly {@link d1.storage.DeleteResponse.verify|verify} messages.
       * @param message DeleteResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.storage.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link d1.storage.DeleteResponse.verify|verify} messages.
       * @param message DeleteResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.storage.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a DeleteResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DeleteResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.storage.DeleteResponse;

      /**
       * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DeleteResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.storage.DeleteResponse;

      /**
       * Verifies a DeleteResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DeleteResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.storage.DeleteResponse;

      /**
       * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
       * @param message DeleteResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.storage.DeleteResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this DeleteResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for DeleteResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Namespace version. */
  namespace version {
    /** Service for getting version information. */
    class Version extends $protobuf.rpc.Service {
      /**
       * Constructs a new Version service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

      /**
       * Creates new Version service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean,
      ): Version;

      /**
       * Returns the versions of the currently running service.
       * @param request VersionRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and VersionResponse
       */
      public version(request: d1.version.IVersionRequest, callback: d1.version.Version.VersionCallback): void;

      /**
       * Returns the versions of the currently running service.
       * @param request VersionRequest message or plain object
       * @returns Promise
       */
      public version(request: d1.version.IVersionRequest): Promise<d1.version.VersionResponse>;
    }

    namespace Version {
      /**
       * Callback as used by {@link d1.version.Version#version}.
       * @param error Error, if any
       * @param [response] VersionResponse
       */
      type VersionCallback = (error: Error | null, response?: d1.version.VersionResponse) => void;
    }

    /** Properties of a VersionRequest. */
    interface IVersionRequest {}

    /** Represents a request to get version information. */
    class VersionRequest implements IVersionRequest {
      /**
       * Constructs a new VersionRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.version.IVersionRequest);

      /**
       * Creates a new VersionRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns VersionRequest instance
       */
      public static create(properties?: d1.version.IVersionRequest): d1.version.VersionRequest;

      /**
       * Encodes the specified VersionRequest message. Does not implicitly {@link d1.version.VersionRequest.verify|verify} messages.
       * @param message VersionRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.version.IVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified VersionRequest message, length delimited. Does not implicitly {@link d1.version.VersionRequest.verify|verify} messages.
       * @param message VersionRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.version.IVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a VersionRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns VersionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.version.VersionRequest;

      /**
       * Decodes a VersionRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns VersionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.version.VersionRequest;

      /**
       * Verifies a VersionRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a VersionRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns VersionRequest
       */
      public static fromObject(object: { [k: string]: any }): d1.version.VersionRequest;

      /**
       * Creates a plain object from a VersionRequest message. Also converts values to other types if specified.
       * @param message VersionRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.version.VersionRequest,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this VersionRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for VersionRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VersionResponse. */
    interface IVersionResponse {
      /** The Git commit of the running service. */
      commit?: string | null;

      /** The version of the running service. */
      tag?: string | null;
    }

    /** Represents a response to get version information. */
    class VersionResponse implements IVersionResponse {
      /**
       * Constructs a new VersionResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: d1.version.IVersionResponse);

      /** The Git commit of the running service. */
      public commit: string;

      /** The version of the running service. */
      public tag: string;

      /**
       * Creates a new VersionResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns VersionResponse instance
       */
      public static create(properties?: d1.version.IVersionResponse): d1.version.VersionResponse;

      /**
       * Encodes the specified VersionResponse message. Does not implicitly {@link d1.version.VersionResponse.verify|verify} messages.
       * @param message VersionResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(message: d1.version.IVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Encodes the specified VersionResponse message, length delimited. Does not implicitly {@link d1.version.VersionResponse.verify|verify} messages.
       * @param message VersionResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(message: d1.version.IVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

      /**
       * Decodes a VersionResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns VersionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): d1.version.VersionResponse;

      /**
       * Decodes a VersionResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns VersionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): d1.version.VersionResponse;

      /**
       * Verifies a VersionResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a VersionResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns VersionResponse
       */
      public static fromObject(object: { [k: string]: any }): d1.version.VersionResponse;

      /**
       * Creates a plain object from a VersionResponse message. Also converts values to other types if specified.
       * @param message VersionResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: d1.version.VersionResponse,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any };

      /**
       * Converts this VersionResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for VersionResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
}
