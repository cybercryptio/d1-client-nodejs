import * as $protobuf from "protobufjs";
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
             * Calls CreateUser.
             * @param request CreateUserRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CreateUserResponse
             */
            public createUser(request: d1.authn.ICreateUserRequest, callback: d1.authn.Authn.CreateUserCallback): void;

            /**
             * Calls CreateUser.
             * @param request CreateUserRequest message or plain object
             * @returns Promise
             */
            public createUser(request: d1.authn.ICreateUserRequest): Promise<d1.authn.CreateUserResponse>;

            /**
             * Calls LoginUser.
             * @param request LoginUserRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LoginUserResponse
             */
            public loginUser(request: d1.authn.ILoginUserRequest, callback: d1.authn.Authn.LoginUserCallback): void;

            /**
             * Calls LoginUser.
             * @param request LoginUserRequest message or plain object
             * @returns Promise
             */
            public loginUser(request: d1.authn.ILoginUserRequest): Promise<d1.authn.LoginUserResponse>;

            /**
             * Calls RemoveUser.
             * @param request RemoveUserRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and RemoveUserResponse
             */
            public removeUser(request: d1.authn.IRemoveUserRequest, callback: d1.authn.Authn.RemoveUserCallback): void;

            /**
             * Calls RemoveUser.
             * @param request RemoveUserRequest message or plain object
             * @returns Promise
             */
            public removeUser(request: d1.authn.IRemoveUserRequest): Promise<d1.authn.RemoveUserResponse>;

            /**
             * Calls CreateGroup.
             * @param request CreateGroupRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CreateGroupResponse
             */
            public createGroup(request: d1.authn.ICreateGroupRequest, callback: d1.authn.Authn.CreateGroupCallback): void;

            /**
             * Calls CreateGroup.
             * @param request CreateGroupRequest message or plain object
             * @returns Promise
             */
            public createGroup(request: d1.authn.ICreateGroupRequest): Promise<d1.authn.CreateGroupResponse>;

            /**
             * Calls AddUserToGroups.
             * @param request AddUserToGroupsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and AddUserToGroupsResponse
             */
            public addUserToGroups(request: d1.authn.IAddUserToGroupsRequest, callback: d1.authn.Authn.AddUserToGroupsCallback): void;

            /**
             * Calls AddUserToGroups.
             * @param request AddUserToGroupsRequest message or plain object
             * @returns Promise
             */
            public addUserToGroups(request: d1.authn.IAddUserToGroupsRequest): Promise<d1.authn.AddUserToGroupsResponse>;

            /**
             * Calls RemoveUserFromGroups.
             * @param request RemoveUserFromGroupsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and RemoveUserFromGroupsResponse
             */
            public removeUserFromGroups(request: d1.authn.IRemoveUserFromGroupsRequest, callback: d1.authn.Authn.RemoveUserFromGroupsCallback): void;

            /**
             * Calls RemoveUserFromGroups.
             * @param request RemoveUserFromGroupsRequest message or plain object
             * @returns Promise
             */
            public removeUserFromGroups(request: d1.authn.IRemoveUserFromGroupsRequest): Promise<d1.authn.RemoveUserFromGroupsResponse>;
        }

        namespace Authn {

            /**
             * Callback as used by {@link d1.authn.Authn#createUser}.
             * @param error Error, if any
             * @param [response] CreateUserResponse
             */
            type CreateUserCallback = (error: (Error|null), response?: d1.authn.CreateUserResponse) => void;

            /**
             * Callback as used by {@link d1.authn.Authn#loginUser}.
             * @param error Error, if any
             * @param [response] LoginUserResponse
             */
            type LoginUserCallback = (error: (Error|null), response?: d1.authn.LoginUserResponse) => void;

            /**
             * Callback as used by {@link d1.authn.Authn#removeUser}.
             * @param error Error, if any
             * @param [response] RemoveUserResponse
             */
            type RemoveUserCallback = (error: (Error|null), response?: d1.authn.RemoveUserResponse) => void;

            /**
             * Callback as used by {@link d1.authn.Authn#createGroup}.
             * @param error Error, if any
             * @param [response] CreateGroupResponse
             */
            type CreateGroupCallback = (error: (Error|null), response?: d1.authn.CreateGroupResponse) => void;

            /**
             * Callback as used by {@link d1.authn.Authn#addUserToGroups}.
             * @param error Error, if any
             * @param [response] AddUserToGroupsResponse
             */
            type AddUserToGroupsCallback = (error: (Error|null), response?: d1.authn.AddUserToGroupsResponse) => void;

            /**
             * Callback as used by {@link d1.authn.Authn#removeUserFromGroups}.
             * @param error Error, if any
             * @param [response] RemoveUserFromGroupsResponse
             */
            type RemoveUserFromGroupsCallback = (error: (Error|null), response?: d1.authn.RemoveUserFromGroupsResponse) => void;
        }

        /** Properties of a CreateUserRequest. */
        interface ICreateUserRequest {

            /** CreateUserRequest scopes */
            scopes?: (d1.scopes.Scope[]|null);
        }

        /** Represents a CreateUserRequest. */
        class CreateUserRequest implements ICreateUserRequest {

            /**
             * Constructs a new CreateUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.ICreateUserRequest);

            /** CreateUserRequest scopes. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.CreateUserRequest;

            /**
             * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.CreateUserRequest;

            /**
             * Verifies a CreateUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authn.CreateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** CreateUserResponse userId */
            userId?: (string|null);

            /** CreateUserResponse password */
            password?: (string|null);
        }

        /** Represents a CreateUserResponse. */
        class CreateUserResponse implements ICreateUserResponse {

            /**
             * Constructs a new CreateUserResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.ICreateUserResponse);

            /** CreateUserResponse userId. */
            public userId: string;

            /** CreateUserResponse password. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.CreateUserResponse;

            /**
             * Decodes a CreateUserResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.CreateUserResponse;

            /**
             * Verifies a CreateUserResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authn.CreateUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** LoginUserRequest userId */
            userId?: (string|null);

            /** LoginUserRequest password */
            password?: (string|null);
        }

        /** Represents a LoginUserRequest. */
        class LoginUserRequest implements ILoginUserRequest {

            /**
             * Constructs a new LoginUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.ILoginUserRequest);

            /** LoginUserRequest userId. */
            public userId: string;

            /** LoginUserRequest password. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.LoginUserRequest;

            /**
             * Decodes a LoginUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.LoginUserRequest;

            /**
             * Verifies a LoginUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authn.LoginUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** LoginUserResponse accessToken */
            accessToken?: (string|null);

            /** LoginUserResponse expiryTime */
            expiryTime?: (number|Long|null);
        }

        /** Represents a LoginUserResponse. */
        class LoginUserResponse implements ILoginUserResponse {

            /**
             * Constructs a new LoginUserResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.ILoginUserResponse);

            /** LoginUserResponse accessToken. */
            public accessToken: string;

            /** LoginUserResponse expiryTime. */
            public expiryTime: (number|Long);

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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.LoginUserResponse;

            /**
             * Decodes a LoginUserResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.LoginUserResponse;

            /**
             * Verifies a LoginUserResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authn.LoginUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** RemoveUserRequest userId */
            userId?: (string|null);
        }

        /** Represents a RemoveUserRequest. */
        class RemoveUserRequest implements IRemoveUserRequest {

            /**
             * Constructs a new RemoveUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.IRemoveUserRequest);

            /** RemoveUserRequest userId. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.RemoveUserRequest;

            /**
             * Decodes a RemoveUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoveUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.RemoveUserRequest;

            /**
             * Verifies a RemoveUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authn.RemoveUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        interface IRemoveUserResponse {
        }

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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.RemoveUserResponse;

            /**
             * Decodes a RemoveUserResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoveUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.RemoveUserResponse;

            /**
             * Verifies a RemoveUserResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authn.RemoveUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** CreateGroupRequest scopes */
            scopes?: (d1.scopes.Scope[]|null);
        }

        /** Represents a CreateGroupRequest. */
        class CreateGroupRequest implements ICreateGroupRequest {

            /**
             * Constructs a new CreateGroupRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.ICreateGroupRequest);

            /** CreateGroupRequest scopes. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.CreateGroupRequest;

            /**
             * Decodes a CreateGroupRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateGroupRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.CreateGroupRequest;

            /**
             * Verifies a CreateGroupRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authn.CreateGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** CreateGroupResponse groupId */
            groupId?: (string|null);
        }

        /** Represents a CreateGroupResponse. */
        class CreateGroupResponse implements ICreateGroupResponse {

            /**
             * Constructs a new CreateGroupResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.ICreateGroupResponse);

            /** CreateGroupResponse groupId. */
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
            public static encodeDelimited(message: d1.authn.ICreateGroupResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateGroupResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateGroupResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.CreateGroupResponse;

            /**
             * Decodes a CreateGroupResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateGroupResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.CreateGroupResponse;

            /**
             * Verifies a CreateGroupResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authn.CreateGroupResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of an AddUserToGroupsRequest. */
        interface IAddUserToGroupsRequest {

            /** AddUserToGroupsRequest userId */
            userId?: (string|null);

            /** AddUserToGroupsRequest groupIds */
            groupIds?: (string[]|null);
        }

        /** Represents an AddUserToGroupsRequest. */
        class AddUserToGroupsRequest implements IAddUserToGroupsRequest {

            /**
             * Constructs a new AddUserToGroupsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.IAddUserToGroupsRequest);

            /** AddUserToGroupsRequest userId. */
            public userId: string;

            /** AddUserToGroupsRequest groupIds. */
            public groupIds: string[];

            /**
             * Creates a new AddUserToGroupsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddUserToGroupsRequest instance
             */
            public static create(properties?: d1.authn.IAddUserToGroupsRequest): d1.authn.AddUserToGroupsRequest;

            /**
             * Encodes the specified AddUserToGroupsRequest message. Does not implicitly {@link d1.authn.AddUserToGroupsRequest.verify|verify} messages.
             * @param message AddUserToGroupsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: d1.authn.IAddUserToGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddUserToGroupsRequest message, length delimited. Does not implicitly {@link d1.authn.AddUserToGroupsRequest.verify|verify} messages.
             * @param message AddUserToGroupsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: d1.authn.IAddUserToGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddUserToGroupsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddUserToGroupsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.AddUserToGroupsRequest;

            /**
             * Decodes an AddUserToGroupsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddUserToGroupsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.AddUserToGroupsRequest;

            /**
             * Verifies an AddUserToGroupsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddUserToGroupsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddUserToGroupsRequest
             */
            public static fromObject(object: { [k: string]: any }): d1.authn.AddUserToGroupsRequest;

            /**
             * Creates a plain object from an AddUserToGroupsRequest message. Also converts values to other types if specified.
             * @param message AddUserToGroupsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: d1.authn.AddUserToGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddUserToGroupsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AddUserToGroupsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AddUserToGroupsResponse. */
        interface IAddUserToGroupsResponse {
        }

        /** Represents an AddUserToGroupsResponse. */
        class AddUserToGroupsResponse implements IAddUserToGroupsResponse {

            /**
             * Constructs a new AddUserToGroupsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.IAddUserToGroupsResponse);

            /**
             * Creates a new AddUserToGroupsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddUserToGroupsResponse instance
             */
            public static create(properties?: d1.authn.IAddUserToGroupsResponse): d1.authn.AddUserToGroupsResponse;

            /**
             * Encodes the specified AddUserToGroupsResponse message. Does not implicitly {@link d1.authn.AddUserToGroupsResponse.verify|verify} messages.
             * @param message AddUserToGroupsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: d1.authn.IAddUserToGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddUserToGroupsResponse message, length delimited. Does not implicitly {@link d1.authn.AddUserToGroupsResponse.verify|verify} messages.
             * @param message AddUserToGroupsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: d1.authn.IAddUserToGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddUserToGroupsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddUserToGroupsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.AddUserToGroupsResponse;

            /**
             * Decodes an AddUserToGroupsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddUserToGroupsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.AddUserToGroupsResponse;

            /**
             * Verifies an AddUserToGroupsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddUserToGroupsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddUserToGroupsResponse
             */
            public static fromObject(object: { [k: string]: any }): d1.authn.AddUserToGroupsResponse;

            /**
             * Creates a plain object from an AddUserToGroupsResponse message. Also converts values to other types if specified.
             * @param message AddUserToGroupsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: d1.authn.AddUserToGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddUserToGroupsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AddUserToGroupsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RemoveUserFromGroupsRequest. */
        interface IRemoveUserFromGroupsRequest {

            /** RemoveUserFromGroupsRequest userId */
            userId?: (string|null);

            /** RemoveUserFromGroupsRequest groupIds */
            groupIds?: (string[]|null);
        }

        /** Represents a RemoveUserFromGroupsRequest. */
        class RemoveUserFromGroupsRequest implements IRemoveUserFromGroupsRequest {

            /**
             * Constructs a new RemoveUserFromGroupsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.IRemoveUserFromGroupsRequest);

            /** RemoveUserFromGroupsRequest userId. */
            public userId: string;

            /** RemoveUserFromGroupsRequest groupIds. */
            public groupIds: string[];

            /**
             * Creates a new RemoveUserFromGroupsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoveUserFromGroupsRequest instance
             */
            public static create(properties?: d1.authn.IRemoveUserFromGroupsRequest): d1.authn.RemoveUserFromGroupsRequest;

            /**
             * Encodes the specified RemoveUserFromGroupsRequest message. Does not implicitly {@link d1.authn.RemoveUserFromGroupsRequest.verify|verify} messages.
             * @param message RemoveUserFromGroupsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: d1.authn.IRemoveUserFromGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveUserFromGroupsRequest message, length delimited. Does not implicitly {@link d1.authn.RemoveUserFromGroupsRequest.verify|verify} messages.
             * @param message RemoveUserFromGroupsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: d1.authn.IRemoveUserFromGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveUserFromGroupsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemoveUserFromGroupsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.RemoveUserFromGroupsRequest;

            /**
             * Decodes a RemoveUserFromGroupsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoveUserFromGroupsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.RemoveUserFromGroupsRequest;

            /**
             * Verifies a RemoveUserFromGroupsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoveUserFromGroupsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoveUserFromGroupsRequest
             */
            public static fromObject(object: { [k: string]: any }): d1.authn.RemoveUserFromGroupsRequest;

            /**
             * Creates a plain object from a RemoveUserFromGroupsRequest message. Also converts values to other types if specified.
             * @param message RemoveUserFromGroupsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: d1.authn.RemoveUserFromGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveUserFromGroupsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RemoveUserFromGroupsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RemoveUserFromGroupsResponse. */
        interface IRemoveUserFromGroupsResponse {
        }

        /** Represents a RemoveUserFromGroupsResponse. */
        class RemoveUserFromGroupsResponse implements IRemoveUserFromGroupsResponse {

            /**
             * Constructs a new RemoveUserFromGroupsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authn.IRemoveUserFromGroupsResponse);

            /**
             * Creates a new RemoveUserFromGroupsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoveUserFromGroupsResponse instance
             */
            public static create(properties?: d1.authn.IRemoveUserFromGroupsResponse): d1.authn.RemoveUserFromGroupsResponse;

            /**
             * Encodes the specified RemoveUserFromGroupsResponse message. Does not implicitly {@link d1.authn.RemoveUserFromGroupsResponse.verify|verify} messages.
             * @param message RemoveUserFromGroupsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: d1.authn.IRemoveUserFromGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RemoveUserFromGroupsResponse message, length delimited. Does not implicitly {@link d1.authn.RemoveUserFromGroupsResponse.verify|verify} messages.
             * @param message RemoveUserFromGroupsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: d1.authn.IRemoveUserFromGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoveUserFromGroupsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemoveUserFromGroupsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authn.RemoveUserFromGroupsResponse;

            /**
             * Decodes a RemoveUserFromGroupsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoveUserFromGroupsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authn.RemoveUserFromGroupsResponse;

            /**
             * Verifies a RemoveUserFromGroupsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RemoveUserFromGroupsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoveUserFromGroupsResponse
             */
            public static fromObject(object: { [k: string]: any }): d1.authn.RemoveUserFromGroupsResponse;

            /**
             * Creates a plain object from a RemoveUserFromGroupsResponse message. Also converts values to other types if specified.
             * @param message RemoveUserFromGroupsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: d1.authn.RemoveUserFromGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoveUserFromGroupsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RemoveUserFromGroupsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace scopes. */
    namespace scopes {

        /** Scope enum. */
        enum Scope {
            READ = 0,
            CREATE = 1,
            GETACCESS = 2,
            MODIFYACCESS = 3,
            UPDATE = 4,
            DELETE = 5,
            INDEX = 6
        }
    }

    /** Namespace authz. */
    namespace authz {

        /** Represents an Authz */
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
             * Calls GetPermissions.
             * @param request GetPermissionsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and GetPermissionsResponse
             */
            public getPermissions(request: d1.authz.IGetPermissionsRequest, callback: d1.authz.Authz.GetPermissionsCallback): void;

            /**
             * Calls GetPermissions.
             * @param request GetPermissionsRequest message or plain object
             * @returns Promise
             */
            public getPermissions(request: d1.authz.IGetPermissionsRequest): Promise<d1.authz.GetPermissionsResponse>;

            /**
             * Calls AddPermission.
             * @param request AddPermissionRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and AddPermissionResponse
             */
            public addPermission(request: d1.authz.IAddPermissionRequest, callback: d1.authz.Authz.AddPermissionCallback): void;

            /**
             * Calls AddPermission.
             * @param request AddPermissionRequest message or plain object
             * @returns Promise
             */
            public addPermission(request: d1.authz.IAddPermissionRequest): Promise<d1.authz.AddPermissionResponse>;

            /**
             * Calls RemovePermission.
             * @param request RemovePermissionRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and RemovePermissionResponse
             */
            public removePermission(request: d1.authz.IRemovePermissionRequest, callback: d1.authz.Authz.RemovePermissionCallback): void;

            /**
             * Calls RemovePermission.
             * @param request RemovePermissionRequest message or plain object
             * @returns Promise
             */
            public removePermission(request: d1.authz.IRemovePermissionRequest): Promise<d1.authz.RemovePermissionResponse>;

            /**
             * Calls CheckPermission.
             * @param request CheckPermissionRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and CheckPermissionResponse
             */
            public checkPermission(request: d1.authz.ICheckPermissionRequest, callback: d1.authz.Authz.CheckPermissionCallback): void;

            /**
             * Calls CheckPermission.
             * @param request CheckPermissionRequest message or plain object
             * @returns Promise
             */
            public checkPermission(request: d1.authz.ICheckPermissionRequest): Promise<d1.authz.CheckPermissionResponse>;
        }

        namespace Authz {

            /**
             * Callback as used by {@link d1.authz.Authz#getPermissions}.
             * @param error Error, if any
             * @param [response] GetPermissionsResponse
             */
            type GetPermissionsCallback = (error: (Error|null), response?: d1.authz.GetPermissionsResponse) => void;

            /**
             * Callback as used by {@link d1.authz.Authz#addPermission}.
             * @param error Error, if any
             * @param [response] AddPermissionResponse
             */
            type AddPermissionCallback = (error: (Error|null), response?: d1.authz.AddPermissionResponse) => void;

            /**
             * Callback as used by {@link d1.authz.Authz#removePermission}.
             * @param error Error, if any
             * @param [response] RemovePermissionResponse
             */
            type RemovePermissionCallback = (error: (Error|null), response?: d1.authz.RemovePermissionResponse) => void;

            /**
             * Callback as used by {@link d1.authz.Authz#checkPermission}.
             * @param error Error, if any
             * @param [response] CheckPermissionResponse
             */
            type CheckPermissionCallback = (error: (Error|null), response?: d1.authz.CheckPermissionResponse) => void;
        }

        /** Properties of a GetPermissionsRequest. */
        interface IGetPermissionsRequest {

            /** GetPermissionsRequest objectId */
            objectId?: (string|null);
        }

        /** Represents a GetPermissionsRequest. */
        class GetPermissionsRequest implements IGetPermissionsRequest {

            /**
             * Constructs a new GetPermissionsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authz.IGetPermissionsRequest);

            /** GetPermissionsRequest objectId. */
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
            public static encodeDelimited(message: d1.authz.IGetPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetPermissionsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetPermissionsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authz.GetPermissionsRequest;

            /**
             * Decodes a GetPermissionsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetPermissionsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authz.GetPermissionsRequest;

            /**
             * Verifies a GetPermissionsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authz.GetPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** GetPermissionsResponse groupIds */
            groupIds?: (string[]|null);
        }

        /** Represents a GetPermissionsResponse. */
        class GetPermissionsResponse implements IGetPermissionsResponse {

            /**
             * Constructs a new GetPermissionsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authz.IGetPermissionsResponse);

            /** GetPermissionsResponse groupIds. */
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
            public static encodeDelimited(message: d1.authz.IGetPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetPermissionsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetPermissionsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authz.GetPermissionsResponse;

            /**
             * Decodes a GetPermissionsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetPermissionsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authz.GetPermissionsResponse;

            /**
             * Verifies a GetPermissionsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authz.GetPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** AddPermissionRequest objectId */
            objectId?: (string|null);

            /** AddPermissionRequest groupIds */
            groupIds?: (string[]|null);
        }

        /** Represents an AddPermissionRequest. */
        class AddPermissionRequest implements IAddPermissionRequest {

            /**
             * Constructs a new AddPermissionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authz.IAddPermissionRequest);

            /** AddPermissionRequest objectId. */
            public objectId: string;

            /** AddPermissionRequest groupIds. */
            public groupIds: string[];

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
            public static encodeDelimited(message: d1.authz.IAddPermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddPermissionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddPermissionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authz.AddPermissionRequest;

            /**
             * Decodes an AddPermissionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddPermissionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authz.AddPermissionRequest;

            /**
             * Verifies an AddPermissionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authz.AddPermissionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        interface IAddPermissionResponse {
        }

        /** Represents an AddPermissionResponse. */
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
            public static encodeDelimited(message: d1.authz.IAddPermissionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddPermissionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddPermissionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authz.AddPermissionResponse;

            /**
             * Decodes an AddPermissionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddPermissionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authz.AddPermissionResponse;

            /**
             * Verifies an AddPermissionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authz.AddPermissionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** RemovePermissionRequest objectId */
            objectId?: (string|null);

            /** RemovePermissionRequest groupIds */
            groupIds?: (string[]|null);
        }

        /** Represents a RemovePermissionRequest. */
        class RemovePermissionRequest implements IRemovePermissionRequest {

            /**
             * Constructs a new RemovePermissionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authz.IRemovePermissionRequest);

            /** RemovePermissionRequest objectId. */
            public objectId: string;

            /** RemovePermissionRequest groupIds. */
            public groupIds: string[];

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
            public static encodeDelimited(message: d1.authz.IRemovePermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemovePermissionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemovePermissionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authz.RemovePermissionRequest;

            /**
             * Decodes a RemovePermissionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemovePermissionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authz.RemovePermissionRequest;

            /**
             * Verifies a RemovePermissionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authz.RemovePermissionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        interface IRemovePermissionResponse {
        }

        /** Represents a RemovePermissionResponse. */
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
            public static encodeDelimited(message: d1.authz.IRemovePermissionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemovePermissionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemovePermissionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authz.RemovePermissionResponse;

            /**
             * Decodes a RemovePermissionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemovePermissionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authz.RemovePermissionResponse;

            /**
             * Verifies a RemovePermissionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.authz.RemovePermissionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Properties of a CheckPermissionRequest. */
        interface ICheckPermissionRequest {

            /** CheckPermissionRequest objectId */
            objectId?: (string|null);
        }

        /** Represents a CheckPermissionRequest. */
        class CheckPermissionRequest implements ICheckPermissionRequest {

            /**
             * Constructs a new CheckPermissionRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authz.ICheckPermissionRequest);

            /** CheckPermissionRequest objectId. */
            public objectId: string;

            /**
             * Creates a new CheckPermissionRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckPermissionRequest instance
             */
            public static create(properties?: d1.authz.ICheckPermissionRequest): d1.authz.CheckPermissionRequest;

            /**
             * Encodes the specified CheckPermissionRequest message. Does not implicitly {@link d1.authz.CheckPermissionRequest.verify|verify} messages.
             * @param message CheckPermissionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: d1.authz.ICheckPermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckPermissionRequest message, length delimited. Does not implicitly {@link d1.authz.CheckPermissionRequest.verify|verify} messages.
             * @param message CheckPermissionRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: d1.authz.ICheckPermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckPermissionRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckPermissionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authz.CheckPermissionRequest;

            /**
             * Decodes a CheckPermissionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckPermissionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authz.CheckPermissionRequest;

            /**
             * Verifies a CheckPermissionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckPermissionRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckPermissionRequest
             */
            public static fromObject(object: { [k: string]: any }): d1.authz.CheckPermissionRequest;

            /**
             * Creates a plain object from a CheckPermissionRequest message. Also converts values to other types if specified.
             * @param message CheckPermissionRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: d1.authz.CheckPermissionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckPermissionRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CheckPermissionRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CheckPermissionResponse. */
        interface ICheckPermissionResponse {

            /** CheckPermissionResponse hasPermission */
            hasPermission?: (boolean|null);
        }

        /** Represents a CheckPermissionResponse. */
        class CheckPermissionResponse implements ICheckPermissionResponse {

            /**
             * Constructs a new CheckPermissionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.authz.ICheckPermissionResponse);

            /** CheckPermissionResponse hasPermission. */
            public hasPermission: boolean;

            /**
             * Creates a new CheckPermissionResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckPermissionResponse instance
             */
            public static create(properties?: d1.authz.ICheckPermissionResponse): d1.authz.CheckPermissionResponse;

            /**
             * Encodes the specified CheckPermissionResponse message. Does not implicitly {@link d1.authz.CheckPermissionResponse.verify|verify} messages.
             * @param message CheckPermissionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: d1.authz.ICheckPermissionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckPermissionResponse message, length delimited. Does not implicitly {@link d1.authz.CheckPermissionResponse.verify|verify} messages.
             * @param message CheckPermissionResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: d1.authz.ICheckPermissionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckPermissionResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckPermissionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.authz.CheckPermissionResponse;

            /**
             * Decodes a CheckPermissionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckPermissionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.authz.CheckPermissionResponse;

            /**
             * Verifies a CheckPermissionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckPermissionResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckPermissionResponse
             */
            public static fromObject(object: { [k: string]: any }): d1.authz.CheckPermissionResponse;

            /**
             * Creates a plain object from a CheckPermissionResponse message. Also converts values to other types if specified.
             * @param message CheckPermissionResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: d1.authz.CheckPermissionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckPermissionResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CheckPermissionResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace generic. */
    namespace generic {

        /** Represents a Generic */
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
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Generic;

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
            type EncryptCallback = (error: (Error|null), response?: d1.generic.EncryptResponse) => void;

            /**
             * Callback as used by {@link d1.generic.Generic#decrypt}.
             * @param error Error, if any
             * @param [response] DecryptResponse
             */
            type DecryptCallback = (error: (Error|null), response?: d1.generic.DecryptResponse) => void;
        }

        /** Properties of an EncryptRequest. */
        interface IEncryptRequest {

            /** EncryptRequest plaintext */
            plaintext?: (Uint8Array|null);

            /** EncryptRequest associatedData */
            associatedData?: (Uint8Array|null);

            /** EncryptRequest groupIds */
            groupIds?: (string[]|null);
        }

        /** Represents an EncryptRequest. */
        class EncryptRequest implements IEncryptRequest {

            /**
             * Constructs a new EncryptRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.generic.IEncryptRequest);

            /** EncryptRequest plaintext. */
            public plaintext: Uint8Array;

            /** EncryptRequest associatedData. */
            public associatedData: Uint8Array;

            /** EncryptRequest groupIds. */
            public groupIds: string[];

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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.generic.EncryptRequest;

            /**
             * Decodes an EncryptRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EncryptRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.generic.EncryptRequest;

            /**
             * Verifies an EncryptRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.generic.EncryptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** EncryptResponse ciphertext */
            ciphertext?: (Uint8Array|null);

            /** EncryptResponse associatedData */
            associatedData?: (Uint8Array|null);

            /** EncryptResponse objectId */
            objectId?: (string|null);
        }

        /** Represents an EncryptResponse. */
        class EncryptResponse implements IEncryptResponse {

            /**
             * Constructs a new EncryptResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.generic.IEncryptResponse);

            /** EncryptResponse ciphertext. */
            public ciphertext: Uint8Array;

            /** EncryptResponse associatedData. */
            public associatedData: Uint8Array;

            /** EncryptResponse objectId. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.generic.EncryptResponse;

            /**
             * Decodes an EncryptResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EncryptResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.generic.EncryptResponse;

            /**
             * Verifies an EncryptResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.generic.EncryptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** DecryptRequest ciphertext */
            ciphertext?: (Uint8Array|null);

            /** DecryptRequest associatedData */
            associatedData?: (Uint8Array|null);

            /** DecryptRequest objectId */
            objectId?: (string|null);
        }

        /** Represents a DecryptRequest. */
        class DecryptRequest implements IDecryptRequest {

            /**
             * Constructs a new DecryptRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.generic.IDecryptRequest);

            /** DecryptRequest ciphertext. */
            public ciphertext: Uint8Array;

            /** DecryptRequest associatedData. */
            public associatedData: Uint8Array;

            /** DecryptRequest objectId. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.generic.DecryptRequest;

            /**
             * Decodes a DecryptRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DecryptRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.generic.DecryptRequest;

            /**
             * Verifies a DecryptRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.generic.DecryptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** DecryptResponse plaintext */
            plaintext?: (Uint8Array|null);

            /** DecryptResponse associatedData */
            associatedData?: (Uint8Array|null);
        }

        /** Represents a DecryptResponse. */
        class DecryptResponse implements IDecryptResponse {

            /**
             * Constructs a new DecryptResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.generic.IDecryptResponse);

            /** DecryptResponse plaintext. */
            public plaintext: Uint8Array;

            /** DecryptResponse associatedData. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.generic.DecryptResponse;

            /**
             * Decodes a DecryptResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DecryptResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.generic.DecryptResponse;

            /**
             * Verifies a DecryptResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.generic.DecryptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Represents an Index */
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
            type AddCallback = (error: (Error|null), response?: d1.index.AddResponse) => void;

            /**
             * Callback as used by {@link d1.index.Index#search}.
             * @param error Error, if any
             * @param [response] SearchResponse
             */
            type SearchCallback = (error: (Error|null), response?: d1.index.SearchResponse) => void;

            /**
             * Callback as used by {@link d1.index.Index#delete_}.
             * @param error Error, if any
             * @param [response] DeleteResponse
             */
            type DeleteCallback = (error: (Error|null), response?: d1.index.DeleteResponse) => void;
        }

        /** Properties of an AddRequest. */
        interface IAddRequest {

            /** AddRequest keywords */
            keywords?: (string[]|null);

            /** AddRequest identifier */
            identifier?: (string|null);
        }

        /** Represents an AddRequest. */
        class AddRequest implements IAddRequest {

            /**
             * Constructs a new AddRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.index.IAddRequest);

            /** AddRequest keywords. */
            public keywords: string[];

            /** AddRequest identifier. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.index.AddRequest;

            /**
             * Decodes an AddRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.index.AddRequest;

            /**
             * Verifies an AddRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.index.AddRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        interface IAddResponse {
        }

        /** Represents an AddResponse. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.index.AddResponse;

            /**
             * Decodes an AddResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.index.AddResponse;

            /**
             * Verifies an AddResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.index.AddResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** SearchRequest keyword */
            keyword?: (string|null);
        }

        /** Represents a SearchRequest. */
        class SearchRequest implements ISearchRequest {

            /**
             * Constructs a new SearchRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.index.ISearchRequest);

            /** SearchRequest keyword. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.index.SearchRequest;

            /**
             * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.index.SearchRequest;

            /**
             * Verifies a SearchRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.index.SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** SearchResponse identifiers */
            identifiers?: (string[]|null);
        }

        /** Represents a SearchResponse. */
        class SearchResponse implements ISearchResponse {

            /**
             * Constructs a new SearchResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.index.ISearchResponse);

            /** SearchResponse identifiers. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.index.SearchResponse;

            /**
             * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.index.SearchResponse;

            /**
             * Verifies a SearchResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.index.SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** DeleteRequest keywords */
            keywords?: (string[]|null);

            /** DeleteRequest identifier */
            identifier?: (string|null);
        }

        /** Represents a DeleteRequest. */
        class DeleteRequest implements IDeleteRequest {

            /**
             * Constructs a new DeleteRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.index.IDeleteRequest);

            /** DeleteRequest keywords. */
            public keywords: string[];

            /** DeleteRequest identifier. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.index.DeleteRequest;

            /**
             * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.index.DeleteRequest;

            /**
             * Verifies a DeleteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.index.DeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        interface IDeleteResponse {
        }

        /** Represents a DeleteResponse. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.index.DeleteResponse;

            /**
             * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.index.DeleteResponse;

            /**
             * Verifies a DeleteResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.index.DeleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Storage;

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
            type StoreCallback = (error: (Error|null), response?: d1.storage.StoreResponse) => void;

            /**
             * Callback as used by {@link d1.storage.Storage#retrieve}.
             * @param error Error, if any
             * @param [response] RetrieveResponse
             */
            type RetrieveCallback = (error: (Error|null), response?: d1.storage.RetrieveResponse) => void;

            /**
             * Callback as used by {@link d1.storage.Storage#update}.
             * @param error Error, if any
             * @param [response] UpdateResponse
             */
            type UpdateCallback = (error: (Error|null), response?: d1.storage.UpdateResponse) => void;

            /**
             * Callback as used by {@link d1.storage.Storage#delete_}.
             * @param error Error, if any
             * @param [response] DeleteResponse
             */
            type DeleteCallback = (error: (Error|null), response?: d1.storage.DeleteResponse) => void;
        }

        /** Properties of a StoreRequest. */
        interface IStoreRequest {

            /** Data to encrypt. */
            plaintext?: (Uint8Array|null);

            /** Associated data. */
            associatedData?: (Uint8Array|null);

            /** StoreRequest groupIds */
            groupIds?: (string[]|null);
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

            /** StoreRequest groupIds. */
            public groupIds: string[];

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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.storage.StoreRequest;

            /**
             * Decodes a StoreRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StoreRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.storage.StoreRequest;

            /**
             * Verifies a StoreRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.storage.StoreRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            objectId?: (string|null);
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.storage.StoreResponse;

            /**
             * Decodes a StoreResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StoreResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.storage.StoreResponse;

            /**
             * Verifies a StoreResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.storage.StoreResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            objectId?: (string|null);
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.storage.RetrieveRequest;

            /**
             * Decodes a RetrieveRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RetrieveRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.storage.RetrieveRequest;

            /**
             * Verifies a RetrieveRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.storage.RetrieveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            plaintext?: (Uint8Array|null);

            /** Associated data. */
            associatedData?: (Uint8Array|null);
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.storage.RetrieveResponse;

            /**
             * Decodes a RetrieveResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RetrieveResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.storage.RetrieveResponse;

            /**
             * Verifies a RetrieveResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.storage.RetrieveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            plaintext?: (Uint8Array|null);

            /** Associated data. */
            associatedData?: (Uint8Array|null);

            /** The ID of the object to update. */
            objectId?: (string|null);
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.storage.UpdateRequest;

            /**
             * Decodes an UpdateRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.storage.UpdateRequest;

            /**
             * Verifies an UpdateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.storage.UpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        interface IUpdateResponse {
        }

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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.storage.UpdateResponse;

            /**
             * Decodes an UpdateResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.storage.UpdateResponse;

            /**
             * Verifies an UpdateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.storage.UpdateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            objectId?: (string|null);
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.storage.DeleteRequest;

            /**
             * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.storage.DeleteRequest;

            /**
             * Verifies a DeleteRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.storage.DeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        interface IDeleteResponse {
        }

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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.storage.DeleteResponse;

            /**
             * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.storage.DeleteResponse;

            /**
             * Verifies a DeleteResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.storage.DeleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Represents a Version */
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
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Version;

            /**
             * Calls Version.
             * @param request VersionRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and VersionResponse
             */
            public version(request: d1.version.IVersionRequest, callback: d1.version.Version.VersionCallback): void;

            /**
             * Calls Version.
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
            type VersionCallback = (error: (Error|null), response?: d1.version.VersionResponse) => void;
        }

        /** Properties of a VersionRequest. */
        interface IVersionRequest {
        }

        /** Represents a VersionRequest. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.version.VersionRequest;

            /**
             * Decodes a VersionRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VersionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.version.VersionRequest;

            /**
             * Verifies a VersionRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.version.VersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** VersionResponse commit */
            commit?: (string|null);

            /** VersionResponse tag */
            tag?: (string|null);
        }

        /** Represents a VersionResponse. */
        class VersionResponse implements IVersionResponse {

            /**
             * Constructs a new VersionResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: d1.version.IVersionResponse);

            /** VersionResponse commit. */
            public commit: string;

            /** VersionResponse tag. */
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
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): d1.version.VersionResponse;

            /**
             * Decodes a VersionResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns VersionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): d1.version.VersionResponse;

            /**
             * Verifies a VersionResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

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
            public static toObject(message: d1.version.VersionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
