/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict';

var $protobuf = require('protobufjs/minimal');

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

$root.d1 = (function () {
  /**
   * Namespace d1.
   * @exports d1
   * @namespace
   */
  var d1 = {};

  d1.authn = (function () {
    /**
     * Namespace authn.
     * @memberof d1
     * @namespace
     */
    var authn = {};

    authn.Authn = (function () {
      /**
       * Constructs a new Authn service.
       * @memberof d1.authn
       * @classdesc Represents an Authn
       * @extends $protobuf.rpc.Service
       * @constructor
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       */
      function Authn(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
      }

      (Authn.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Authn;

      /**
       * Creates new Authn service using the specified rpc implementation.
       * @function create
       * @memberof d1.authn.Authn
       * @static
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       * @returns {Authn} RPC service. Useful where requests and/or responses are streamed.
       */
      Authn.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
      };

      /**
       * Callback as used by {@link d1.authn.Authn#createUser}.
       * @memberof d1.authn.Authn
       * @typedef CreateUserCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.authn.CreateUserResponse} [response] CreateUserResponse
       */

      /**
       * Creates a new user.
       * This call can fail if the auth storage cannot be reached, in which case an error is returned.
       * @function createUser
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.ICreateUserRequest} request CreateUserRequest message or plain object
       * @param {d1.authn.Authn.CreateUserCallback} callback Node-style callback called with the error, if any, and CreateUserResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Authn.prototype.createUser = function createUser(request, callback) {
          return this.rpcCall(
            createUser,
            $root.d1.authn.CreateUserRequest,
            $root.d1.authn.CreateUserResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'CreateUser' },
      );

      /**
       * Creates a new user.
       * This call can fail if the auth storage cannot be reached, in which case an error is returned.
       * @function createUser
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.ICreateUserRequest} request CreateUserRequest message or plain object
       * @returns {Promise<d1.authn.CreateUserResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.authn.Authn#loginUser}.
       * @memberof d1.authn.Authn
       * @typedef LoginUserCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.authn.LoginUserResponse} [response] LoginUserResponse
       */

      /**
       * Logs in an existing user, returning a User Access Token and an expiry time.
       * This call can fail if the caller provides the wrong credentials or if the auth storage cannot be reached,
       * in which case an error is returned.
       * @function loginUser
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.ILoginUserRequest} request LoginUserRequest message or plain object
       * @param {d1.authn.Authn.LoginUserCallback} callback Node-style callback called with the error, if any, and LoginUserResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Authn.prototype.loginUser = function loginUser(request, callback) {
          return this.rpcCall(
            loginUser,
            $root.d1.authn.LoginUserRequest,
            $root.d1.authn.LoginUserResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'LoginUser' },
      );

      /**
       * Logs in an existing user, returning a User Access Token and an expiry time.
       * This call can fail if the caller provides the wrong credentials or if the auth storage cannot be reached,
       * in which case an error is returned.
       * @function loginUser
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.ILoginUserRequest} request LoginUserRequest message or plain object
       * @returns {Promise<d1.authn.LoginUserResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.authn.Authn#removeUser}.
       * @memberof d1.authn.Authn
       * @typedef RemoveUserCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.authn.RemoveUserResponse} [response] RemoveUserResponse
       */

      /**
       * Deletes an existing user.
       * This call can fail if the user does not exist,
       * or if the auth storage cannot be reached, in which case an error is returned.
       * @function removeUser
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.IRemoveUserRequest} request RemoveUserRequest message or plain object
       * @param {d1.authn.Authn.RemoveUserCallback} callback Node-style callback called with the error, if any, and RemoveUserResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Authn.prototype.removeUser = function removeUser(request, callback) {
          return this.rpcCall(
            removeUser,
            $root.d1.authn.RemoveUserRequest,
            $root.d1.authn.RemoveUserResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'RemoveUser' },
      );

      /**
       * Deletes an existing user.
       * This call can fail if the user does not exist,
       * or if the auth storage cannot be reached, in which case an error is returned.
       * @function removeUser
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.IRemoveUserRequest} request RemoveUserRequest message or plain object
       * @returns {Promise<d1.authn.RemoveUserResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.authn.Authn#createGroup}.
       * @memberof d1.authn.Authn
       * @typedef CreateGroupCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.authn.CreateGroupResponse} [response] CreateGroupResponse
       */

      /**
       * Creates a new group with the requested scopes. The caller is added to the group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @function createGroup
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.ICreateGroupRequest} request CreateGroupRequest message or plain object
       * @param {d1.authn.Authn.CreateGroupCallback} callback Node-style callback called with the error, if any, and CreateGroupResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Authn.prototype.createGroup = function createGroup(request, callback) {
          return this.rpcCall(
            createGroup,
            $root.d1.authn.CreateGroupRequest,
            $root.d1.authn.CreateGroupResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'CreateGroup' },
      );

      /**
       * Creates a new group with the requested scopes. The caller is added to the group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @function createGroup
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.ICreateGroupRequest} request CreateGroupRequest message or plain object
       * @returns {Promise<d1.authn.CreateGroupResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.authn.Authn#addUserToGroup}.
       * @memberof d1.authn.Authn
       * @typedef AddUserToGroupCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.authn.AddUserToGroupResponse} [response] AddUserToGroupResponse
       */

      /**
       * Adds a user to a group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @function addUserToGroup
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.IAddUserToGroupRequest} request AddUserToGroupRequest message or plain object
       * @param {d1.authn.Authn.AddUserToGroupCallback} callback Node-style callback called with the error, if any, and AddUserToGroupResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Authn.prototype.addUserToGroup = function addUserToGroup(request, callback) {
          return this.rpcCall(
            addUserToGroup,
            $root.d1.authn.AddUserToGroupRequest,
            $root.d1.authn.AddUserToGroupResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'AddUserToGroup' },
      );

      /**
       * Adds a user to a group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @function addUserToGroup
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.IAddUserToGroupRequest} request AddUserToGroupRequest message or plain object
       * @returns {Promise<d1.authn.AddUserToGroupResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.authn.Authn#removeUserFromGroup}.
       * @memberof d1.authn.Authn
       * @typedef RemoveUserFromGroupCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.authn.RemoveUserFromGroupResponse} [response] RemoveUserFromGroupResponse
       */

      /**
       * Removes a user from a group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @function removeUserFromGroup
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.IRemoveUserFromGroupRequest} request RemoveUserFromGroupRequest message or plain object
       * @param {d1.authn.Authn.RemoveUserFromGroupCallback} callback Node-style callback called with the error, if any, and RemoveUserFromGroupResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Authn.prototype.removeUserFromGroup = function removeUserFromGroup(request, callback) {
          return this.rpcCall(
            removeUserFromGroup,
            $root.d1.authn.RemoveUserFromGroupRequest,
            $root.d1.authn.RemoveUserFromGroupResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'RemoveUserFromGroup' },
      );

      /**
       * Removes a user from a group.
       * This call can fail if the auth storage cannot be reached,
       * in which case an error is returned.
       * @function removeUserFromGroup
       * @memberof d1.authn.Authn
       * @instance
       * @param {d1.authn.IRemoveUserFromGroupRequest} request RemoveUserFromGroupRequest message or plain object
       * @returns {Promise<d1.authn.RemoveUserFromGroupResponse>} Promise
       * @variation 2
       */

      return Authn;
    })();

    authn.CreateUserRequest = (function () {
      /**
       * Properties of a CreateUserRequest.
       * @memberof d1.authn
       * @interface ICreateUserRequest
       * @property {Array.<d1.scopes.Scope>|null} [scopes] The scopes the user should be assigned.
       */

      /**
       * Constructs a new CreateUserRequest.
       * @memberof d1.authn
       * @classdesc Represents a CreateUserRequest.
       * @implements ICreateUserRequest
       * @constructor
       * @param {d1.authn.ICreateUserRequest=} [properties] Properties to set
       */
      function CreateUserRequest(properties) {
        this.scopes = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The scopes the user should be assigned.
       * @member {Array.<d1.scopes.Scope>} scopes
       * @memberof d1.authn.CreateUserRequest
       * @instance
       */
      CreateUserRequest.prototype.scopes = $util.emptyArray;

      /**
       * Creates a new CreateUserRequest instance using the specified properties.
       * @function create
       * @memberof d1.authn.CreateUserRequest
       * @static
       * @param {d1.authn.ICreateUserRequest=} [properties] Properties to set
       * @returns {d1.authn.CreateUserRequest} CreateUserRequest instance
       */
      CreateUserRequest.create = function create(properties) {
        return new CreateUserRequest(properties);
      };

      /**
       * Encodes the specified CreateUserRequest message. Does not implicitly {@link d1.authn.CreateUserRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.CreateUserRequest
       * @static
       * @param {d1.authn.ICreateUserRequest} message CreateUserRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateUserRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.scopes != null && message.scopes.length) {
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork();
          for (var i = 0; i < message.scopes.length; ++i) writer.int32(message.scopes[i]);
          writer.ldelim();
        }
        return writer;
      };

      /**
       * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link d1.authn.CreateUserRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.CreateUserRequest
       * @static
       * @param {d1.authn.ICreateUserRequest} message CreateUserRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a CreateUserRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.CreateUserRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.CreateUserRequest} CreateUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateUserRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.CreateUserRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.scopes && message.scopes.length)) message.scopes = [];
              if ((tag & 7) === 2) {
                var end2 = reader.uint32() + reader.pos;
                while (reader.pos < end2) message.scopes.push(reader.int32());
              } else message.scopes.push(reader.int32());
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.CreateUserRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.CreateUserRequest} CreateUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateUserRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a CreateUserRequest message.
       * @function verify
       * @memberof d1.authn.CreateUserRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      CreateUserRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.scopes != null && message.hasOwnProperty('scopes')) {
          if (!Array.isArray(message.scopes)) return 'scopes: array expected';
          for (var i = 0; i < message.scopes.length; ++i)
            switch (message.scopes[i]) {
              default:
                return 'scopes: enum value[] expected';
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                break;
            }
        }
        return null;
      };

      /**
       * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.CreateUserRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.CreateUserRequest} CreateUserRequest
       */
      CreateUserRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.CreateUserRequest) return object;
        var message = new $root.d1.authn.CreateUserRequest();
        if (object.scopes) {
          if (!Array.isArray(object.scopes)) throw TypeError('.d1.authn.CreateUserRequest.scopes: array expected');
          message.scopes = [];
          for (var i = 0; i < object.scopes.length; ++i)
            switch (object.scopes[i]) {
              default:
              case 'READ':
              case 0:
                message.scopes[i] = 0;
                break;
              case 'CREATE':
              case 1:
                message.scopes[i] = 1;
                break;
              case 'GETACCESS':
              case 2:
                message.scopes[i] = 2;
                break;
              case 'MODIFYACCESS':
              case 3:
                message.scopes[i] = 3;
                break;
              case 'UPDATE':
              case 4:
                message.scopes[i] = 4;
                break;
              case 'DELETE':
              case 5:
                message.scopes[i] = 5;
                break;
              case 'INDEX':
              case 6:
                message.scopes[i] = 6;
                break;
            }
        }
        return message;
      };

      /**
       * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.CreateUserRequest
       * @static
       * @param {d1.authn.CreateUserRequest} message CreateUserRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      CreateUserRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.scopes = [];
        if (message.scopes && message.scopes.length) {
          object.scopes = [];
          for (var j = 0; j < message.scopes.length; ++j)
            object.scopes[j] = options.enums === String ? $root.d1.scopes.Scope[message.scopes[j]] : message.scopes[j];
        }
        return object;
      };

      /**
       * Converts this CreateUserRequest to JSON.
       * @function toJSON
       * @memberof d1.authn.CreateUserRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      CreateUserRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for CreateUserRequest
       * @function getTypeUrl
       * @memberof d1.authn.CreateUserRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      CreateUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.CreateUserRequest';
      };

      return CreateUserRequest;
    })();

    authn.CreateUserResponse = (function () {
      /**
       * Properties of a CreateUserResponse.
       * @memberof d1.authn
       * @interface ICreateUserResponse
       * @property {string|null} [userId] ID of the new user.
       * @property {string|null} [password] The users password.
       */

      /**
       * Constructs a new CreateUserResponse.
       * @memberof d1.authn
       * @classdesc Represents a CreateUserResponse.
       * @implements ICreateUserResponse
       * @constructor
       * @param {d1.authn.ICreateUserResponse=} [properties] Properties to set
       */
      function CreateUserResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * ID of the new user.
       * @member {string} userId
       * @memberof d1.authn.CreateUserResponse
       * @instance
       */
      CreateUserResponse.prototype.userId = '';

      /**
       * The users password.
       * @member {string} password
       * @memberof d1.authn.CreateUserResponse
       * @instance
       */
      CreateUserResponse.prototype.password = '';

      /**
       * Creates a new CreateUserResponse instance using the specified properties.
       * @function create
       * @memberof d1.authn.CreateUserResponse
       * @static
       * @param {d1.authn.ICreateUserResponse=} [properties] Properties to set
       * @returns {d1.authn.CreateUserResponse} CreateUserResponse instance
       */
      CreateUserResponse.create = function create(properties) {
        return new CreateUserResponse(properties);
      };

      /**
       * Encodes the specified CreateUserResponse message. Does not implicitly {@link d1.authn.CreateUserResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.CreateUserResponse
       * @static
       * @param {d1.authn.ICreateUserResponse} message CreateUserResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateUserResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, 'userId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.userId);
        if (message.password != null && Object.hasOwnProperty.call(message, 'password'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.password);
        return writer;
      };

      /**
       * Encodes the specified CreateUserResponse message, length delimited. Does not implicitly {@link d1.authn.CreateUserResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.CreateUserResponse
       * @static
       * @param {d1.authn.ICreateUserResponse} message CreateUserResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a CreateUserResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.CreateUserResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.CreateUserResponse} CreateUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateUserResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.CreateUserResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.userId = reader.string();
              break;
            }
            case 2: {
              message.password = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a CreateUserResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.CreateUserResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.CreateUserResponse} CreateUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateUserResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a CreateUserResponse message.
       * @function verify
       * @memberof d1.authn.CreateUserResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      CreateUserResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.userId != null && message.hasOwnProperty('userId'))
          if (!$util.isString(message.userId)) return 'userId: string expected';
        if (message.password != null && message.hasOwnProperty('password'))
          if (!$util.isString(message.password)) return 'password: string expected';
        return null;
      };

      /**
       * Creates a CreateUserResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.CreateUserResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.CreateUserResponse} CreateUserResponse
       */
      CreateUserResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.CreateUserResponse) return object;
        var message = new $root.d1.authn.CreateUserResponse();
        if (object.userId != null) message.userId = String(object.userId);
        if (object.password != null) message.password = String(object.password);
        return message;
      };

      /**
       * Creates a plain object from a CreateUserResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.CreateUserResponse
       * @static
       * @param {d1.authn.CreateUserResponse} message CreateUserResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      CreateUserResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.userId = '';
          object.password = '';
        }
        if (message.userId != null && message.hasOwnProperty('userId')) object.userId = message.userId;
        if (message.password != null && message.hasOwnProperty('password')) object.password = message.password;
        return object;
      };

      /**
       * Converts this CreateUserResponse to JSON.
       * @function toJSON
       * @memberof d1.authn.CreateUserResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      CreateUserResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for CreateUserResponse
       * @function getTypeUrl
       * @memberof d1.authn.CreateUserResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      CreateUserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.CreateUserResponse';
      };

      return CreateUserResponse;
    })();

    authn.LoginUserRequest = (function () {
      /**
       * Properties of a LoginUserRequest.
       * @memberof d1.authn
       * @interface ILoginUserRequest
       * @property {string|null} [userId] ID of the user.
       * @property {string|null} [password] The users password.
       */

      /**
       * Constructs a new LoginUserRequest.
       * @memberof d1.authn
       * @classdesc Represents a LoginUserRequest.
       * @implements ILoginUserRequest
       * @constructor
       * @param {d1.authn.ILoginUserRequest=} [properties] Properties to set
       */
      function LoginUserRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * ID of the user.
       * @member {string} userId
       * @memberof d1.authn.LoginUserRequest
       * @instance
       */
      LoginUserRequest.prototype.userId = '';

      /**
       * The users password.
       * @member {string} password
       * @memberof d1.authn.LoginUserRequest
       * @instance
       */
      LoginUserRequest.prototype.password = '';

      /**
       * Creates a new LoginUserRequest instance using the specified properties.
       * @function create
       * @memberof d1.authn.LoginUserRequest
       * @static
       * @param {d1.authn.ILoginUserRequest=} [properties] Properties to set
       * @returns {d1.authn.LoginUserRequest} LoginUserRequest instance
       */
      LoginUserRequest.create = function create(properties) {
        return new LoginUserRequest(properties);
      };

      /**
       * Encodes the specified LoginUserRequest message. Does not implicitly {@link d1.authn.LoginUserRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.LoginUserRequest
       * @static
       * @param {d1.authn.ILoginUserRequest} message LoginUserRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LoginUserRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, 'userId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.userId);
        if (message.password != null && Object.hasOwnProperty.call(message, 'password'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.password);
        return writer;
      };

      /**
       * Encodes the specified LoginUserRequest message, length delimited. Does not implicitly {@link d1.authn.LoginUserRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.LoginUserRequest
       * @static
       * @param {d1.authn.ILoginUserRequest} message LoginUserRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LoginUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a LoginUserRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.LoginUserRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.LoginUserRequest} LoginUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LoginUserRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.LoginUserRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.userId = reader.string();
              break;
            }
            case 2: {
              message.password = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a LoginUserRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.LoginUserRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.LoginUserRequest} LoginUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LoginUserRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a LoginUserRequest message.
       * @function verify
       * @memberof d1.authn.LoginUserRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      LoginUserRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.userId != null && message.hasOwnProperty('userId'))
          if (!$util.isString(message.userId)) return 'userId: string expected';
        if (message.password != null && message.hasOwnProperty('password'))
          if (!$util.isString(message.password)) return 'password: string expected';
        return null;
      };

      /**
       * Creates a LoginUserRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.LoginUserRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.LoginUserRequest} LoginUserRequest
       */
      LoginUserRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.LoginUserRequest) return object;
        var message = new $root.d1.authn.LoginUserRequest();
        if (object.userId != null) message.userId = String(object.userId);
        if (object.password != null) message.password = String(object.password);
        return message;
      };

      /**
       * Creates a plain object from a LoginUserRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.LoginUserRequest
       * @static
       * @param {d1.authn.LoginUserRequest} message LoginUserRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      LoginUserRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.userId = '';
          object.password = '';
        }
        if (message.userId != null && message.hasOwnProperty('userId')) object.userId = message.userId;
        if (message.password != null && message.hasOwnProperty('password')) object.password = message.password;
        return object;
      };

      /**
       * Converts this LoginUserRequest to JSON.
       * @function toJSON
       * @memberof d1.authn.LoginUserRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      LoginUserRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for LoginUserRequest
       * @function getTypeUrl
       * @memberof d1.authn.LoginUserRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      LoginUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.LoginUserRequest';
      };

      return LoginUserRequest;
    })();

    authn.LoginUserResponse = (function () {
      /**
       * Properties of a LoginUserResponse.
       * @memberof d1.authn
       * @interface ILoginUserResponse
       * @property {string|null} [accessToken] Access token to be used in subsequent requests.
       * @property {number|Long|null} [expiryTime] The expiration time of the access token.
       */

      /**
       * Constructs a new LoginUserResponse.
       * @memberof d1.authn
       * @classdesc Represents a LoginUserResponse.
       * @implements ILoginUserResponse
       * @constructor
       * @param {d1.authn.ILoginUserResponse=} [properties] Properties to set
       */
      function LoginUserResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Access token to be used in subsequent requests.
       * @member {string} accessToken
       * @memberof d1.authn.LoginUserResponse
       * @instance
       */
      LoginUserResponse.prototype.accessToken = '';

      /**
       * The expiration time of the access token.
       * @member {number|Long} expiryTime
       * @memberof d1.authn.LoginUserResponse
       * @instance
       */
      LoginUserResponse.prototype.expiryTime = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

      /**
       * Creates a new LoginUserResponse instance using the specified properties.
       * @function create
       * @memberof d1.authn.LoginUserResponse
       * @static
       * @param {d1.authn.ILoginUserResponse=} [properties] Properties to set
       * @returns {d1.authn.LoginUserResponse} LoginUserResponse instance
       */
      LoginUserResponse.create = function create(properties) {
        return new LoginUserResponse(properties);
      };

      /**
       * Encodes the specified LoginUserResponse message. Does not implicitly {@link d1.authn.LoginUserResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.LoginUserResponse
       * @static
       * @param {d1.authn.ILoginUserResponse} message LoginUserResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LoginUserResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.accessToken != null && Object.hasOwnProperty.call(message, 'accessToken'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.accessToken);
        if (message.expiryTime != null && Object.hasOwnProperty.call(message, 'expiryTime'))
          writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.expiryTime);
        return writer;
      };

      /**
       * Encodes the specified LoginUserResponse message, length delimited. Does not implicitly {@link d1.authn.LoginUserResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.LoginUserResponse
       * @static
       * @param {d1.authn.ILoginUserResponse} message LoginUserResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LoginUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a LoginUserResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.LoginUserResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.LoginUserResponse} LoginUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LoginUserResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.LoginUserResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.accessToken = reader.string();
              break;
            }
            case 2: {
              message.expiryTime = reader.int64();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a LoginUserResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.LoginUserResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.LoginUserResponse} LoginUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LoginUserResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a LoginUserResponse message.
       * @function verify
       * @memberof d1.authn.LoginUserResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      LoginUserResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.accessToken != null && message.hasOwnProperty('accessToken'))
          if (!$util.isString(message.accessToken)) return 'accessToken: string expected';
        if (message.expiryTime != null && message.hasOwnProperty('expiryTime'))
          if (
            !$util.isInteger(message.expiryTime) &&
            !(message.expiryTime && $util.isInteger(message.expiryTime.low) && $util.isInteger(message.expiryTime.high))
          )
            return 'expiryTime: integer|Long expected';
        return null;
      };

      /**
       * Creates a LoginUserResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.LoginUserResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.LoginUserResponse} LoginUserResponse
       */
      LoginUserResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.LoginUserResponse) return object;
        var message = new $root.d1.authn.LoginUserResponse();
        if (object.accessToken != null) message.accessToken = String(object.accessToken);
        if (object.expiryTime != null)
          if ($util.Long) (message.expiryTime = $util.Long.fromValue(object.expiryTime)).unsigned = false;
          else if (typeof object.expiryTime === 'string') message.expiryTime = parseInt(object.expiryTime, 10);
          else if (typeof object.expiryTime === 'number') message.expiryTime = object.expiryTime;
          else if (typeof object.expiryTime === 'object')
            message.expiryTime = new $util.LongBits(
              object.expiryTime.low >>> 0,
              object.expiryTime.high >>> 0,
            ).toNumber();
        return message;
      };

      /**
       * Creates a plain object from a LoginUserResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.LoginUserResponse
       * @static
       * @param {d1.authn.LoginUserResponse} message LoginUserResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      LoginUserResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.accessToken = '';
          if ($util.Long) {
            var long = new $util.Long(0, 0, false);
            object.expiryTime =
              options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
          } else object.expiryTime = options.longs === String ? '0' : 0;
        }
        if (message.accessToken != null && message.hasOwnProperty('accessToken'))
          object.accessToken = message.accessToken;
        if (message.expiryTime != null && message.hasOwnProperty('expiryTime'))
          if (typeof message.expiryTime === 'number')
            object.expiryTime = options.longs === String ? String(message.expiryTime) : message.expiryTime;
          else
            object.expiryTime =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.expiryTime)
                : options.longs === Number
                ? new $util.LongBits(message.expiryTime.low >>> 0, message.expiryTime.high >>> 0).toNumber()
                : message.expiryTime;
        return object;
      };

      /**
       * Converts this LoginUserResponse to JSON.
       * @function toJSON
       * @memberof d1.authn.LoginUserResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      LoginUserResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for LoginUserResponse
       * @function getTypeUrl
       * @memberof d1.authn.LoginUserResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      LoginUserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.LoginUserResponse';
      };

      return LoginUserResponse;
    })();

    authn.RemoveUserRequest = (function () {
      /**
       * Properties of a RemoveUserRequest.
       * @memberof d1.authn
       * @interface IRemoveUserRequest
       * @property {string|null} [userId] ID of the user to remove.
       */

      /**
       * Constructs a new RemoveUserRequest.
       * @memberof d1.authn
       * @classdesc Represents a RemoveUserRequest.
       * @implements IRemoveUserRequest
       * @constructor
       * @param {d1.authn.IRemoveUserRequest=} [properties] Properties to set
       */
      function RemoveUserRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * ID of the user to remove.
       * @member {string} userId
       * @memberof d1.authn.RemoveUserRequest
       * @instance
       */
      RemoveUserRequest.prototype.userId = '';

      /**
       * Creates a new RemoveUserRequest instance using the specified properties.
       * @function create
       * @memberof d1.authn.RemoveUserRequest
       * @static
       * @param {d1.authn.IRemoveUserRequest=} [properties] Properties to set
       * @returns {d1.authn.RemoveUserRequest} RemoveUserRequest instance
       */
      RemoveUserRequest.create = function create(properties) {
        return new RemoveUserRequest(properties);
      };

      /**
       * Encodes the specified RemoveUserRequest message. Does not implicitly {@link d1.authn.RemoveUserRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.RemoveUserRequest
       * @static
       * @param {d1.authn.IRemoveUserRequest} message RemoveUserRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemoveUserRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, 'userId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.userId);
        return writer;
      };

      /**
       * Encodes the specified RemoveUserRequest message, length delimited. Does not implicitly {@link d1.authn.RemoveUserRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.RemoveUserRequest
       * @static
       * @param {d1.authn.IRemoveUserRequest} message RemoveUserRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemoveUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a RemoveUserRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.RemoveUserRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.RemoveUserRequest} RemoveUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemoveUserRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.RemoveUserRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.userId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a RemoveUserRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.RemoveUserRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.RemoveUserRequest} RemoveUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemoveUserRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a RemoveUserRequest message.
       * @function verify
       * @memberof d1.authn.RemoveUserRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      RemoveUserRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.userId != null && message.hasOwnProperty('userId'))
          if (!$util.isString(message.userId)) return 'userId: string expected';
        return null;
      };

      /**
       * Creates a RemoveUserRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.RemoveUserRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.RemoveUserRequest} RemoveUserRequest
       */
      RemoveUserRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.RemoveUserRequest) return object;
        var message = new $root.d1.authn.RemoveUserRequest();
        if (object.userId != null) message.userId = String(object.userId);
        return message;
      };

      /**
       * Creates a plain object from a RemoveUserRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.RemoveUserRequest
       * @static
       * @param {d1.authn.RemoveUserRequest} message RemoveUserRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      RemoveUserRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.userId = '';
        if (message.userId != null && message.hasOwnProperty('userId')) object.userId = message.userId;
        return object;
      };

      /**
       * Converts this RemoveUserRequest to JSON.
       * @function toJSON
       * @memberof d1.authn.RemoveUserRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      RemoveUserRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for RemoveUserRequest
       * @function getTypeUrl
       * @memberof d1.authn.RemoveUserRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      RemoveUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.RemoveUserRequest';
      };

      return RemoveUserRequest;
    })();

    authn.RemoveUserResponse = (function () {
      /**
       * Properties of a RemoveUserResponse.
       * @memberof d1.authn
       * @interface IRemoveUserResponse
       */

      /**
       * Constructs a new RemoveUserResponse.
       * @memberof d1.authn
       * @classdesc Represents a RemoveUserResponse.
       * @implements IRemoveUserResponse
       * @constructor
       * @param {d1.authn.IRemoveUserResponse=} [properties] Properties to set
       */
      function RemoveUserResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new RemoveUserResponse instance using the specified properties.
       * @function create
       * @memberof d1.authn.RemoveUserResponse
       * @static
       * @param {d1.authn.IRemoveUserResponse=} [properties] Properties to set
       * @returns {d1.authn.RemoveUserResponse} RemoveUserResponse instance
       */
      RemoveUserResponse.create = function create(properties) {
        return new RemoveUserResponse(properties);
      };

      /**
       * Encodes the specified RemoveUserResponse message. Does not implicitly {@link d1.authn.RemoveUserResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.RemoveUserResponse
       * @static
       * @param {d1.authn.IRemoveUserResponse} message RemoveUserResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemoveUserResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified RemoveUserResponse message, length delimited. Does not implicitly {@link d1.authn.RemoveUserResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.RemoveUserResponse
       * @static
       * @param {d1.authn.IRemoveUserResponse} message RemoveUserResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemoveUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a RemoveUserResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.RemoveUserResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.RemoveUserResponse} RemoveUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemoveUserResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.RemoveUserResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a RemoveUserResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.RemoveUserResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.RemoveUserResponse} RemoveUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemoveUserResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a RemoveUserResponse message.
       * @function verify
       * @memberof d1.authn.RemoveUserResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      RemoveUserResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates a RemoveUserResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.RemoveUserResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.RemoveUserResponse} RemoveUserResponse
       */
      RemoveUserResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.RemoveUserResponse) return object;
        return new $root.d1.authn.RemoveUserResponse();
      };

      /**
       * Creates a plain object from a RemoveUserResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.RemoveUserResponse
       * @static
       * @param {d1.authn.RemoveUserResponse} message RemoveUserResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      RemoveUserResponse.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this RemoveUserResponse to JSON.
       * @function toJSON
       * @memberof d1.authn.RemoveUserResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      RemoveUserResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for RemoveUserResponse
       * @function getTypeUrl
       * @memberof d1.authn.RemoveUserResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      RemoveUserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.RemoveUserResponse';
      };

      return RemoveUserResponse;
    })();

    authn.CreateGroupRequest = (function () {
      /**
       * Properties of a CreateGroupRequest.
       * @memberof d1.authn
       * @interface ICreateGroupRequest
       * @property {Array.<d1.scopes.Scope>|null} [scopes] The scopes the group should be assigned.
       */

      /**
       * Constructs a new CreateGroupRequest.
       * @memberof d1.authn
       * @classdesc Represents a CreateGroupRequest.
       * @implements ICreateGroupRequest
       * @constructor
       * @param {d1.authn.ICreateGroupRequest=} [properties] Properties to set
       */
      function CreateGroupRequest(properties) {
        this.scopes = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The scopes the group should be assigned.
       * @member {Array.<d1.scopes.Scope>} scopes
       * @memberof d1.authn.CreateGroupRequest
       * @instance
       */
      CreateGroupRequest.prototype.scopes = $util.emptyArray;

      /**
       * Creates a new CreateGroupRequest instance using the specified properties.
       * @function create
       * @memberof d1.authn.CreateGroupRequest
       * @static
       * @param {d1.authn.ICreateGroupRequest=} [properties] Properties to set
       * @returns {d1.authn.CreateGroupRequest} CreateGroupRequest instance
       */
      CreateGroupRequest.create = function create(properties) {
        return new CreateGroupRequest(properties);
      };

      /**
       * Encodes the specified CreateGroupRequest message. Does not implicitly {@link d1.authn.CreateGroupRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.CreateGroupRequest
       * @static
       * @param {d1.authn.ICreateGroupRequest} message CreateGroupRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateGroupRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.scopes != null && message.scopes.length) {
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork();
          for (var i = 0; i < message.scopes.length; ++i) writer.int32(message.scopes[i]);
          writer.ldelim();
        }
        return writer;
      };

      /**
       * Encodes the specified CreateGroupRequest message, length delimited. Does not implicitly {@link d1.authn.CreateGroupRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.CreateGroupRequest
       * @static
       * @param {d1.authn.ICreateGroupRequest} message CreateGroupRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateGroupRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a CreateGroupRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.CreateGroupRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.CreateGroupRequest} CreateGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateGroupRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.CreateGroupRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.scopes && message.scopes.length)) message.scopes = [];
              if ((tag & 7) === 2) {
                var end2 = reader.uint32() + reader.pos;
                while (reader.pos < end2) message.scopes.push(reader.int32());
              } else message.scopes.push(reader.int32());
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a CreateGroupRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.CreateGroupRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.CreateGroupRequest} CreateGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateGroupRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a CreateGroupRequest message.
       * @function verify
       * @memberof d1.authn.CreateGroupRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      CreateGroupRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.scopes != null && message.hasOwnProperty('scopes')) {
          if (!Array.isArray(message.scopes)) return 'scopes: array expected';
          for (var i = 0; i < message.scopes.length; ++i)
            switch (message.scopes[i]) {
              default:
                return 'scopes: enum value[] expected';
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                break;
            }
        }
        return null;
      };

      /**
       * Creates a CreateGroupRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.CreateGroupRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.CreateGroupRequest} CreateGroupRequest
       */
      CreateGroupRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.CreateGroupRequest) return object;
        var message = new $root.d1.authn.CreateGroupRequest();
        if (object.scopes) {
          if (!Array.isArray(object.scopes)) throw TypeError('.d1.authn.CreateGroupRequest.scopes: array expected');
          message.scopes = [];
          for (var i = 0; i < object.scopes.length; ++i)
            switch (object.scopes[i]) {
              default:
              case 'READ':
              case 0:
                message.scopes[i] = 0;
                break;
              case 'CREATE':
              case 1:
                message.scopes[i] = 1;
                break;
              case 'GETACCESS':
              case 2:
                message.scopes[i] = 2;
                break;
              case 'MODIFYACCESS':
              case 3:
                message.scopes[i] = 3;
                break;
              case 'UPDATE':
              case 4:
                message.scopes[i] = 4;
                break;
              case 'DELETE':
              case 5:
                message.scopes[i] = 5;
                break;
              case 'INDEX':
              case 6:
                message.scopes[i] = 6;
                break;
            }
        }
        return message;
      };

      /**
       * Creates a plain object from a CreateGroupRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.CreateGroupRequest
       * @static
       * @param {d1.authn.CreateGroupRequest} message CreateGroupRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      CreateGroupRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.scopes = [];
        if (message.scopes && message.scopes.length) {
          object.scopes = [];
          for (var j = 0; j < message.scopes.length; ++j)
            object.scopes[j] = options.enums === String ? $root.d1.scopes.Scope[message.scopes[j]] : message.scopes[j];
        }
        return object;
      };

      /**
       * Converts this CreateGroupRequest to JSON.
       * @function toJSON
       * @memberof d1.authn.CreateGroupRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      CreateGroupRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for CreateGroupRequest
       * @function getTypeUrl
       * @memberof d1.authn.CreateGroupRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      CreateGroupRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.CreateGroupRequest';
      };

      return CreateGroupRequest;
    })();

    authn.CreateGroupResponse = (function () {
      /**
       * Properties of a CreateGroupResponse.
       * @memberof d1.authn
       * @interface ICreateGroupResponse
       * @property {string|null} [groupId] ID of the new group.
       */

      /**
       * Constructs a new CreateGroupResponse.
       * @memberof d1.authn
       * @classdesc Represents a CreateGroupResponse.
       * @implements ICreateGroupResponse
       * @constructor
       * @param {d1.authn.ICreateGroupResponse=} [properties] Properties to set
       */
      function CreateGroupResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * ID of the new group.
       * @member {string} groupId
       * @memberof d1.authn.CreateGroupResponse
       * @instance
       */
      CreateGroupResponse.prototype.groupId = '';

      /**
       * Creates a new CreateGroupResponse instance using the specified properties.
       * @function create
       * @memberof d1.authn.CreateGroupResponse
       * @static
       * @param {d1.authn.ICreateGroupResponse=} [properties] Properties to set
       * @returns {d1.authn.CreateGroupResponse} CreateGroupResponse instance
       */
      CreateGroupResponse.create = function create(properties) {
        return new CreateGroupResponse(properties);
      };

      /**
       * Encodes the specified CreateGroupResponse message. Does not implicitly {@link d1.authn.CreateGroupResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.CreateGroupResponse
       * @static
       * @param {d1.authn.ICreateGroupResponse} message CreateGroupResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateGroupResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.groupId != null && Object.hasOwnProperty.call(message, 'groupId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.groupId);
        return writer;
      };

      /**
       * Encodes the specified CreateGroupResponse message, length delimited. Does not implicitly {@link d1.authn.CreateGroupResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.CreateGroupResponse
       * @static
       * @param {d1.authn.ICreateGroupResponse} message CreateGroupResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CreateGroupResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a CreateGroupResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.CreateGroupResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.CreateGroupResponse} CreateGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateGroupResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.CreateGroupResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.groupId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a CreateGroupResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.CreateGroupResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.CreateGroupResponse} CreateGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CreateGroupResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a CreateGroupResponse message.
       * @function verify
       * @memberof d1.authn.CreateGroupResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      CreateGroupResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.groupId != null && message.hasOwnProperty('groupId'))
          if (!$util.isString(message.groupId)) return 'groupId: string expected';
        return null;
      };

      /**
       * Creates a CreateGroupResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.CreateGroupResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.CreateGroupResponse} CreateGroupResponse
       */
      CreateGroupResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.CreateGroupResponse) return object;
        var message = new $root.d1.authn.CreateGroupResponse();
        if (object.groupId != null) message.groupId = String(object.groupId);
        return message;
      };

      /**
       * Creates a plain object from a CreateGroupResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.CreateGroupResponse
       * @static
       * @param {d1.authn.CreateGroupResponse} message CreateGroupResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      CreateGroupResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.groupId = '';
        if (message.groupId != null && message.hasOwnProperty('groupId')) object.groupId = message.groupId;
        return object;
      };

      /**
       * Converts this CreateGroupResponse to JSON.
       * @function toJSON
       * @memberof d1.authn.CreateGroupResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      CreateGroupResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for CreateGroupResponse
       * @function getTypeUrl
       * @memberof d1.authn.CreateGroupResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      CreateGroupResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.CreateGroupResponse';
      };

      return CreateGroupResponse;
    })();

    authn.AddUserToGroupRequest = (function () {
      /**
       * Properties of an AddUserToGroupRequest.
       * @memberof d1.authn
       * @interface IAddUserToGroupRequest
       * @property {string|null} [userId] ID of the user to add.
       * @property {string|null} [groupId] ID of the group the user should be added to.
       */

      /**
       * Constructs a new AddUserToGroupRequest.
       * @memberof d1.authn
       * @classdesc Represents an AddUserToGroupRequest.
       * @implements IAddUserToGroupRequest
       * @constructor
       * @param {d1.authn.IAddUserToGroupRequest=} [properties] Properties to set
       */
      function AddUserToGroupRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * ID of the user to add.
       * @member {string} userId
       * @memberof d1.authn.AddUserToGroupRequest
       * @instance
       */
      AddUserToGroupRequest.prototype.userId = '';

      /**
       * ID of the group the user should be added to.
       * @member {string} groupId
       * @memberof d1.authn.AddUserToGroupRequest
       * @instance
       */
      AddUserToGroupRequest.prototype.groupId = '';

      /**
       * Creates a new AddUserToGroupRequest instance using the specified properties.
       * @function create
       * @memberof d1.authn.AddUserToGroupRequest
       * @static
       * @param {d1.authn.IAddUserToGroupRequest=} [properties] Properties to set
       * @returns {d1.authn.AddUserToGroupRequest} AddUserToGroupRequest instance
       */
      AddUserToGroupRequest.create = function create(properties) {
        return new AddUserToGroupRequest(properties);
      };

      /**
       * Encodes the specified AddUserToGroupRequest message. Does not implicitly {@link d1.authn.AddUserToGroupRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.AddUserToGroupRequest
       * @static
       * @param {d1.authn.IAddUserToGroupRequest} message AddUserToGroupRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddUserToGroupRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, 'userId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.userId);
        if (message.groupId != null && Object.hasOwnProperty.call(message, 'groupId'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.groupId);
        return writer;
      };

      /**
       * Encodes the specified AddUserToGroupRequest message, length delimited. Does not implicitly {@link d1.authn.AddUserToGroupRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.AddUserToGroupRequest
       * @static
       * @param {d1.authn.IAddUserToGroupRequest} message AddUserToGroupRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddUserToGroupRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an AddUserToGroupRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.AddUserToGroupRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.AddUserToGroupRequest} AddUserToGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddUserToGroupRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.AddUserToGroupRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.userId = reader.string();
              break;
            }
            case 2: {
              message.groupId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an AddUserToGroupRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.AddUserToGroupRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.AddUserToGroupRequest} AddUserToGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddUserToGroupRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an AddUserToGroupRequest message.
       * @function verify
       * @memberof d1.authn.AddUserToGroupRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      AddUserToGroupRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.userId != null && message.hasOwnProperty('userId'))
          if (!$util.isString(message.userId)) return 'userId: string expected';
        if (message.groupId != null && message.hasOwnProperty('groupId'))
          if (!$util.isString(message.groupId)) return 'groupId: string expected';
        return null;
      };

      /**
       * Creates an AddUserToGroupRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.AddUserToGroupRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.AddUserToGroupRequest} AddUserToGroupRequest
       */
      AddUserToGroupRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.AddUserToGroupRequest) return object;
        var message = new $root.d1.authn.AddUserToGroupRequest();
        if (object.userId != null) message.userId = String(object.userId);
        if (object.groupId != null) message.groupId = String(object.groupId);
        return message;
      };

      /**
       * Creates a plain object from an AddUserToGroupRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.AddUserToGroupRequest
       * @static
       * @param {d1.authn.AddUserToGroupRequest} message AddUserToGroupRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      AddUserToGroupRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.userId = '';
          object.groupId = '';
        }
        if (message.userId != null && message.hasOwnProperty('userId')) object.userId = message.userId;
        if (message.groupId != null && message.hasOwnProperty('groupId')) object.groupId = message.groupId;
        return object;
      };

      /**
       * Converts this AddUserToGroupRequest to JSON.
       * @function toJSON
       * @memberof d1.authn.AddUserToGroupRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      AddUserToGroupRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for AddUserToGroupRequest
       * @function getTypeUrl
       * @memberof d1.authn.AddUserToGroupRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      AddUserToGroupRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.AddUserToGroupRequest';
      };

      return AddUserToGroupRequest;
    })();

    authn.AddUserToGroupResponse = (function () {
      /**
       * Properties of an AddUserToGroupResponse.
       * @memberof d1.authn
       * @interface IAddUserToGroupResponse
       */

      /**
       * Constructs a new AddUserToGroupResponse.
       * @memberof d1.authn
       * @classdesc Represents an AddUserToGroupResponse.
       * @implements IAddUserToGroupResponse
       * @constructor
       * @param {d1.authn.IAddUserToGroupResponse=} [properties] Properties to set
       */
      function AddUserToGroupResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new AddUserToGroupResponse instance using the specified properties.
       * @function create
       * @memberof d1.authn.AddUserToGroupResponse
       * @static
       * @param {d1.authn.IAddUserToGroupResponse=} [properties] Properties to set
       * @returns {d1.authn.AddUserToGroupResponse} AddUserToGroupResponse instance
       */
      AddUserToGroupResponse.create = function create(properties) {
        return new AddUserToGroupResponse(properties);
      };

      /**
       * Encodes the specified AddUserToGroupResponse message. Does not implicitly {@link d1.authn.AddUserToGroupResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.AddUserToGroupResponse
       * @static
       * @param {d1.authn.IAddUserToGroupResponse} message AddUserToGroupResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddUserToGroupResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified AddUserToGroupResponse message, length delimited. Does not implicitly {@link d1.authn.AddUserToGroupResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.AddUserToGroupResponse
       * @static
       * @param {d1.authn.IAddUserToGroupResponse} message AddUserToGroupResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddUserToGroupResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an AddUserToGroupResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.AddUserToGroupResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.AddUserToGroupResponse} AddUserToGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddUserToGroupResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.AddUserToGroupResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an AddUserToGroupResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.AddUserToGroupResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.AddUserToGroupResponse} AddUserToGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddUserToGroupResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an AddUserToGroupResponse message.
       * @function verify
       * @memberof d1.authn.AddUserToGroupResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      AddUserToGroupResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates an AddUserToGroupResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.AddUserToGroupResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.AddUserToGroupResponse} AddUserToGroupResponse
       */
      AddUserToGroupResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.AddUserToGroupResponse) return object;
        return new $root.d1.authn.AddUserToGroupResponse();
      };

      /**
       * Creates a plain object from an AddUserToGroupResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.AddUserToGroupResponse
       * @static
       * @param {d1.authn.AddUserToGroupResponse} message AddUserToGroupResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      AddUserToGroupResponse.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this AddUserToGroupResponse to JSON.
       * @function toJSON
       * @memberof d1.authn.AddUserToGroupResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      AddUserToGroupResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for AddUserToGroupResponse
       * @function getTypeUrl
       * @memberof d1.authn.AddUserToGroupResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      AddUserToGroupResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.AddUserToGroupResponse';
      };

      return AddUserToGroupResponse;
    })();

    authn.RemoveUserFromGroupRequest = (function () {
      /**
       * Properties of a RemoveUserFromGroupRequest.
       * @memberof d1.authn
       * @interface IRemoveUserFromGroupRequest
       * @property {string|null} [userId] ID of the user to remove.
       * @property {string|null} [groupId] ID of the group the user should be removed from.
       */

      /**
       * Constructs a new RemoveUserFromGroupRequest.
       * @memberof d1.authn
       * @classdesc Represents a RemoveUserFromGroupRequest.
       * @implements IRemoveUserFromGroupRequest
       * @constructor
       * @param {d1.authn.IRemoveUserFromGroupRequest=} [properties] Properties to set
       */
      function RemoveUserFromGroupRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * ID of the user to remove.
       * @member {string} userId
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @instance
       */
      RemoveUserFromGroupRequest.prototype.userId = '';

      /**
       * ID of the group the user should be removed from.
       * @member {string} groupId
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @instance
       */
      RemoveUserFromGroupRequest.prototype.groupId = '';

      /**
       * Creates a new RemoveUserFromGroupRequest instance using the specified properties.
       * @function create
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @static
       * @param {d1.authn.IRemoveUserFromGroupRequest=} [properties] Properties to set
       * @returns {d1.authn.RemoveUserFromGroupRequest} RemoveUserFromGroupRequest instance
       */
      RemoveUserFromGroupRequest.create = function create(properties) {
        return new RemoveUserFromGroupRequest(properties);
      };

      /**
       * Encodes the specified RemoveUserFromGroupRequest message. Does not implicitly {@link d1.authn.RemoveUserFromGroupRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @static
       * @param {d1.authn.IRemoveUserFromGroupRequest} message RemoveUserFromGroupRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemoveUserFromGroupRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, 'userId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.userId);
        if (message.groupId != null && Object.hasOwnProperty.call(message, 'groupId'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.groupId);
        return writer;
      };

      /**
       * Encodes the specified RemoveUserFromGroupRequest message, length delimited. Does not implicitly {@link d1.authn.RemoveUserFromGroupRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @static
       * @param {d1.authn.IRemoveUserFromGroupRequest} message RemoveUserFromGroupRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemoveUserFromGroupRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a RemoveUserFromGroupRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.RemoveUserFromGroupRequest} RemoveUserFromGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemoveUserFromGroupRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.RemoveUserFromGroupRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.userId = reader.string();
              break;
            }
            case 2: {
              message.groupId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a RemoveUserFromGroupRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.RemoveUserFromGroupRequest} RemoveUserFromGroupRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemoveUserFromGroupRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a RemoveUserFromGroupRequest message.
       * @function verify
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      RemoveUserFromGroupRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.userId != null && message.hasOwnProperty('userId'))
          if (!$util.isString(message.userId)) return 'userId: string expected';
        if (message.groupId != null && message.hasOwnProperty('groupId'))
          if (!$util.isString(message.groupId)) return 'groupId: string expected';
        return null;
      };

      /**
       * Creates a RemoveUserFromGroupRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.RemoveUserFromGroupRequest} RemoveUserFromGroupRequest
       */
      RemoveUserFromGroupRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.RemoveUserFromGroupRequest) return object;
        var message = new $root.d1.authn.RemoveUserFromGroupRequest();
        if (object.userId != null) message.userId = String(object.userId);
        if (object.groupId != null) message.groupId = String(object.groupId);
        return message;
      };

      /**
       * Creates a plain object from a RemoveUserFromGroupRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @static
       * @param {d1.authn.RemoveUserFromGroupRequest} message RemoveUserFromGroupRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      RemoveUserFromGroupRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.userId = '';
          object.groupId = '';
        }
        if (message.userId != null && message.hasOwnProperty('userId')) object.userId = message.userId;
        if (message.groupId != null && message.hasOwnProperty('groupId')) object.groupId = message.groupId;
        return object;
      };

      /**
       * Converts this RemoveUserFromGroupRequest to JSON.
       * @function toJSON
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      RemoveUserFromGroupRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for RemoveUserFromGroupRequest
       * @function getTypeUrl
       * @memberof d1.authn.RemoveUserFromGroupRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      RemoveUserFromGroupRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.RemoveUserFromGroupRequest';
      };

      return RemoveUserFromGroupRequest;
    })();

    authn.RemoveUserFromGroupResponse = (function () {
      /**
       * Properties of a RemoveUserFromGroupResponse.
       * @memberof d1.authn
       * @interface IRemoveUserFromGroupResponse
       */

      /**
       * Constructs a new RemoveUserFromGroupResponse.
       * @memberof d1.authn
       * @classdesc Represents a RemoveUserFromGroupResponse.
       * @implements IRemoveUserFromGroupResponse
       * @constructor
       * @param {d1.authn.IRemoveUserFromGroupResponse=} [properties] Properties to set
       */
      function RemoveUserFromGroupResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new RemoveUserFromGroupResponse instance using the specified properties.
       * @function create
       * @memberof d1.authn.RemoveUserFromGroupResponse
       * @static
       * @param {d1.authn.IRemoveUserFromGroupResponse=} [properties] Properties to set
       * @returns {d1.authn.RemoveUserFromGroupResponse} RemoveUserFromGroupResponse instance
       */
      RemoveUserFromGroupResponse.create = function create(properties) {
        return new RemoveUserFromGroupResponse(properties);
      };

      /**
       * Encodes the specified RemoveUserFromGroupResponse message. Does not implicitly {@link d1.authn.RemoveUserFromGroupResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.authn.RemoveUserFromGroupResponse
       * @static
       * @param {d1.authn.IRemoveUserFromGroupResponse} message RemoveUserFromGroupResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemoveUserFromGroupResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified RemoveUserFromGroupResponse message, length delimited. Does not implicitly {@link d1.authn.RemoveUserFromGroupResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authn.RemoveUserFromGroupResponse
       * @static
       * @param {d1.authn.IRemoveUserFromGroupResponse} message RemoveUserFromGroupResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemoveUserFromGroupResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a RemoveUserFromGroupResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authn.RemoveUserFromGroupResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authn.RemoveUserFromGroupResponse} RemoveUserFromGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemoveUserFromGroupResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authn.RemoveUserFromGroupResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a RemoveUserFromGroupResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authn.RemoveUserFromGroupResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authn.RemoveUserFromGroupResponse} RemoveUserFromGroupResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemoveUserFromGroupResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a RemoveUserFromGroupResponse message.
       * @function verify
       * @memberof d1.authn.RemoveUserFromGroupResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      RemoveUserFromGroupResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates a RemoveUserFromGroupResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authn.RemoveUserFromGroupResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authn.RemoveUserFromGroupResponse} RemoveUserFromGroupResponse
       */
      RemoveUserFromGroupResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authn.RemoveUserFromGroupResponse) return object;
        return new $root.d1.authn.RemoveUserFromGroupResponse();
      };

      /**
       * Creates a plain object from a RemoveUserFromGroupResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authn.RemoveUserFromGroupResponse
       * @static
       * @param {d1.authn.RemoveUserFromGroupResponse} message RemoveUserFromGroupResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      RemoveUserFromGroupResponse.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this RemoveUserFromGroupResponse to JSON.
       * @function toJSON
       * @memberof d1.authn.RemoveUserFromGroupResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      RemoveUserFromGroupResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for RemoveUserFromGroupResponse
       * @function getTypeUrl
       * @memberof d1.authn.RemoveUserFromGroupResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      RemoveUserFromGroupResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authn.RemoveUserFromGroupResponse';
      };

      return RemoveUserFromGroupResponse;
    })();

    return authn;
  })();

  d1.scopes = (function () {
    /**
     * Namespace scopes.
     * @memberof d1
     * @namespace
     */
    var scopes = {};

    /**
     * Access scopes.
     * @name d1.scopes.Scope
     * @enum {number}
     * @property {number} READ=0 Read and decrypt data.
     * @property {number} CREATE=1 Store and encrypt data.
     * @property {number} GETACCESS=2 Get permissions to an object.
     * @property {number} MODIFYACCESS=3 Modify permissions to an object.
     * @property {number} UPDATE=4 Modify data.
     * @property {number} DELETE=5 Delete data.
     * @property {number} INDEX=6 Use secure index for searching in data.
     */
    scopes.Scope = (function () {
      var valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = 'READ')] = 0;
      values[(valuesById[1] = 'CREATE')] = 1;
      values[(valuesById[2] = 'GETACCESS')] = 2;
      values[(valuesById[3] = 'MODIFYACCESS')] = 3;
      values[(valuesById[4] = 'UPDATE')] = 4;
      values[(valuesById[5] = 'DELETE')] = 5;
      values[(valuesById[6] = 'INDEX')] = 6;
      return values;
    })();

    return scopes;
  })();

  d1.authz = (function () {
    /**
     * Namespace authz.
     * @memberof d1
     * @namespace
     */
    var authz = {};

    authz.Authz = (function () {
      /**
       * Constructs a new Authz service.
       * @memberof d1.authz
       * @classdesc Service for managing authorization rules.
       * @extends $protobuf.rpc.Service
       * @constructor
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       */
      function Authz(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
      }

      (Authz.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Authz;

      /**
       * Creates new Authz service using the specified rpc implementation.
       * @function create
       * @memberof d1.authz.Authz
       * @static
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       * @returns {Authz} RPC service. Useful where requests and/or responses are streamed.
       */
      Authz.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
      };

      /**
       * Callback as used by {@link d1.authz.Authz#getPermissions}.
       * @memberof d1.authz.Authz
       * @typedef GetPermissionsCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.authz.GetPermissionsResponse} [response] GetPermissionsResponse
       */

      /**
       * Returns a list of groups with access to the specified object.
       * This call can fail if the auth storage cannot be reached, in which case an error is returned.
       * The calling user has to be authenticated and authorized to access the object in order to get the object permissions.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @function getPermissions
       * @memberof d1.authz.Authz
       * @instance
       * @param {d1.authz.IGetPermissionsRequest} request GetPermissionsRequest message or plain object
       * @param {d1.authz.Authz.GetPermissionsCallback} callback Node-style callback called with the error, if any, and GetPermissionsResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Authz.prototype.getPermissions = function getPermissions(request, callback) {
          return this.rpcCall(
            getPermissions,
            $root.d1.authz.GetPermissionsRequest,
            $root.d1.authz.GetPermissionsResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'GetPermissions' },
      );

      /**
       * Returns a list of groups with access to the specified object.
       * This call can fail if the auth storage cannot be reached, in which case an error is returned.
       * The calling user has to be authenticated and authorized to access the object in order to get the object permissions.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @function getPermissions
       * @memberof d1.authz.Authz
       * @instance
       * @param {d1.authz.IGetPermissionsRequest} request GetPermissionsRequest message or plain object
       * @returns {Promise<d1.authz.GetPermissionsResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.authz.Authz#addPermission}.
       * @memberof d1.authz.Authz
       * @typedef AddPermissionCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.authz.AddPermissionResponse} [response] AddPermissionResponse
       */

      /**
       * Adds a group to the access list of the specified object.
       * This call can fail if the caller does not have access to the object, if the target group does not exist, or if the auth storage cannot be reached.
       * In these cases, an error is returned.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @function addPermission
       * @memberof d1.authz.Authz
       * @instance
       * @param {d1.authz.IAddPermissionRequest} request AddPermissionRequest message or plain object
       * @param {d1.authz.Authz.AddPermissionCallback} callback Node-style callback called with the error, if any, and AddPermissionResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Authz.prototype.addPermission = function addPermission(request, callback) {
          return this.rpcCall(
            addPermission,
            $root.d1.authz.AddPermissionRequest,
            $root.d1.authz.AddPermissionResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'AddPermission' },
      );

      /**
       * Adds a group to the access list of the specified object.
       * This call can fail if the caller does not have access to the object, if the target group does not exist, or if the auth storage cannot be reached.
       * In these cases, an error is returned.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @function addPermission
       * @memberof d1.authz.Authz
       * @instance
       * @param {d1.authz.IAddPermissionRequest} request AddPermissionRequest message or plain object
       * @returns {Promise<d1.authz.AddPermissionResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.authz.Authz#removePermission}.
       * @memberof d1.authz.Authz
       * @typedef RemovePermissionCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.authz.RemovePermissionResponse} [response] RemovePermissionResponse
       */

      /**
       * Removes a group from the access list of the specified object.
       * This call can fail if the caller does not have access to the object or if the auth storage cannot reached.
       * In these cases, an error is returned.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @function removePermission
       * @memberof d1.authz.Authz
       * @instance
       * @param {d1.authz.IRemovePermissionRequest} request RemovePermissionRequest message or plain object
       * @param {d1.authz.Authz.RemovePermissionCallback} callback Node-style callback called with the error, if any, and RemovePermissionResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Authz.prototype.removePermission = function removePermission(request, callback) {
          return this.rpcCall(
            removePermission,
            $root.d1.authz.RemovePermissionRequest,
            $root.d1.authz.RemovePermissionResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'RemovePermission' },
      );

      /**
       * Removes a group from the access list of the specified object.
       * This call can fail if the caller does not have access to the object or if the auth storage cannot reached.
       * In these cases, an error is returned.
       * Requires the scope `OBJECTPERMISSIONS`.
       * @function removePermission
       * @memberof d1.authz.Authz
       * @instance
       * @param {d1.authz.IRemovePermissionRequest} request RemovePermissionRequest message or plain object
       * @returns {Promise<d1.authz.RemovePermissionResponse>} Promise
       * @variation 2
       */

      return Authz;
    })();

    authz.GetPermissionsRequest = (function () {
      /**
       * Properties of a GetPermissionsRequest.
       * @memberof d1.authz
       * @interface IGetPermissionsRequest
       * @property {string|null} [objectId] The ID of the object to get the permission list for.
       */

      /**
       * Constructs a new GetPermissionsRequest.
       * @memberof d1.authz
       * @classdesc Represents a request to get the permissions of an object.
       * @implements IGetPermissionsRequest
       * @constructor
       * @param {d1.authz.IGetPermissionsRequest=} [properties] Properties to set
       */
      function GetPermissionsRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The ID of the object to get the permission list for.
       * @member {string} objectId
       * @memberof d1.authz.GetPermissionsRequest
       * @instance
       */
      GetPermissionsRequest.prototype.objectId = '';

      /**
       * Creates a new GetPermissionsRequest instance using the specified properties.
       * @function create
       * @memberof d1.authz.GetPermissionsRequest
       * @static
       * @param {d1.authz.IGetPermissionsRequest=} [properties] Properties to set
       * @returns {d1.authz.GetPermissionsRequest} GetPermissionsRequest instance
       */
      GetPermissionsRequest.create = function create(properties) {
        return new GetPermissionsRequest(properties);
      };

      /**
       * Encodes the specified GetPermissionsRequest message. Does not implicitly {@link d1.authz.GetPermissionsRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.authz.GetPermissionsRequest
       * @static
       * @param {d1.authz.IGetPermissionsRequest} message GetPermissionsRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      GetPermissionsRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.objectId != null && Object.hasOwnProperty.call(message, 'objectId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.objectId);
        return writer;
      };

      /**
       * Encodes the specified GetPermissionsRequest message, length delimited. Does not implicitly {@link d1.authz.GetPermissionsRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authz.GetPermissionsRequest
       * @static
       * @param {d1.authz.IGetPermissionsRequest} message GetPermissionsRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      GetPermissionsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a GetPermissionsRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authz.GetPermissionsRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authz.GetPermissionsRequest} GetPermissionsRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      GetPermissionsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authz.GetPermissionsRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.objectId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a GetPermissionsRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authz.GetPermissionsRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authz.GetPermissionsRequest} GetPermissionsRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      GetPermissionsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a GetPermissionsRequest message.
       * @function verify
       * @memberof d1.authz.GetPermissionsRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      GetPermissionsRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.objectId != null && message.hasOwnProperty('objectId'))
          if (!$util.isString(message.objectId)) return 'objectId: string expected';
        return null;
      };

      /**
       * Creates a GetPermissionsRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authz.GetPermissionsRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authz.GetPermissionsRequest} GetPermissionsRequest
       */
      GetPermissionsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authz.GetPermissionsRequest) return object;
        var message = new $root.d1.authz.GetPermissionsRequest();
        if (object.objectId != null) message.objectId = String(object.objectId);
        return message;
      };

      /**
       * Creates a plain object from a GetPermissionsRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authz.GetPermissionsRequest
       * @static
       * @param {d1.authz.GetPermissionsRequest} message GetPermissionsRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      GetPermissionsRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.objectId = '';
        if (message.objectId != null && message.hasOwnProperty('objectId')) object.objectId = message.objectId;
        return object;
      };

      /**
       * Converts this GetPermissionsRequest to JSON.
       * @function toJSON
       * @memberof d1.authz.GetPermissionsRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      GetPermissionsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for GetPermissionsRequest
       * @function getTypeUrl
       * @memberof d1.authz.GetPermissionsRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      GetPermissionsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authz.GetPermissionsRequest';
      };

      return GetPermissionsRequest;
    })();

    authz.GetPermissionsResponse = (function () {
      /**
       * Properties of a GetPermissionsResponse.
       * @memberof d1.authz
       * @interface IGetPermissionsResponse
       * @property {Array.<string>|null} [groupIds] List of groups with access to the object.
       */

      /**
       * Constructs a new GetPermissionsResponse.
       * @memberof d1.authz
       * @classdesc Represents the result of a request to get permissions for an object.
       * @implements IGetPermissionsResponse
       * @constructor
       * @param {d1.authz.IGetPermissionsResponse=} [properties] Properties to set
       */
      function GetPermissionsResponse(properties) {
        this.groupIds = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * List of groups with access to the object.
       * @member {Array.<string>} groupIds
       * @memberof d1.authz.GetPermissionsResponse
       * @instance
       */
      GetPermissionsResponse.prototype.groupIds = $util.emptyArray;

      /**
       * Creates a new GetPermissionsResponse instance using the specified properties.
       * @function create
       * @memberof d1.authz.GetPermissionsResponse
       * @static
       * @param {d1.authz.IGetPermissionsResponse=} [properties] Properties to set
       * @returns {d1.authz.GetPermissionsResponse} GetPermissionsResponse instance
       */
      GetPermissionsResponse.create = function create(properties) {
        return new GetPermissionsResponse(properties);
      };

      /**
       * Encodes the specified GetPermissionsResponse message. Does not implicitly {@link d1.authz.GetPermissionsResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.authz.GetPermissionsResponse
       * @static
       * @param {d1.authz.IGetPermissionsResponse} message GetPermissionsResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      GetPermissionsResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.groupIds != null && message.groupIds.length)
          for (var i = 0; i < message.groupIds.length; ++i)
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.groupIds[i]);
        return writer;
      };

      /**
       * Encodes the specified GetPermissionsResponse message, length delimited. Does not implicitly {@link d1.authz.GetPermissionsResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authz.GetPermissionsResponse
       * @static
       * @param {d1.authz.IGetPermissionsResponse} message GetPermissionsResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      GetPermissionsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a GetPermissionsResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authz.GetPermissionsResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authz.GetPermissionsResponse} GetPermissionsResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      GetPermissionsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authz.GetPermissionsResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.groupIds && message.groupIds.length)) message.groupIds = [];
              message.groupIds.push(reader.string());
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a GetPermissionsResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authz.GetPermissionsResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authz.GetPermissionsResponse} GetPermissionsResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      GetPermissionsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a GetPermissionsResponse message.
       * @function verify
       * @memberof d1.authz.GetPermissionsResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      GetPermissionsResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.groupIds != null && message.hasOwnProperty('groupIds')) {
          if (!Array.isArray(message.groupIds)) return 'groupIds: array expected';
          for (var i = 0; i < message.groupIds.length; ++i)
            if (!$util.isString(message.groupIds[i])) return 'groupIds: string[] expected';
        }
        return null;
      };

      /**
       * Creates a GetPermissionsResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authz.GetPermissionsResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authz.GetPermissionsResponse} GetPermissionsResponse
       */
      GetPermissionsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authz.GetPermissionsResponse) return object;
        var message = new $root.d1.authz.GetPermissionsResponse();
        if (object.groupIds) {
          if (!Array.isArray(object.groupIds))
            throw TypeError('.d1.authz.GetPermissionsResponse.groupIds: array expected');
          message.groupIds = [];
          for (var i = 0; i < object.groupIds.length; ++i) message.groupIds[i] = String(object.groupIds[i]);
        }
        return message;
      };

      /**
       * Creates a plain object from a GetPermissionsResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authz.GetPermissionsResponse
       * @static
       * @param {d1.authz.GetPermissionsResponse} message GetPermissionsResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      GetPermissionsResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.groupIds = [];
        if (message.groupIds && message.groupIds.length) {
          object.groupIds = [];
          for (var j = 0; j < message.groupIds.length; ++j) object.groupIds[j] = message.groupIds[j];
        }
        return object;
      };

      /**
       * Converts this GetPermissionsResponse to JSON.
       * @function toJSON
       * @memberof d1.authz.GetPermissionsResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      GetPermissionsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for GetPermissionsResponse
       * @function getTypeUrl
       * @memberof d1.authz.GetPermissionsResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      GetPermissionsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authz.GetPermissionsResponse';
      };

      return GetPermissionsResponse;
    })();

    authz.AddPermissionRequest = (function () {
      /**
       * Properties of an AddPermissionRequest.
       * @memberof d1.authz
       * @interface IAddPermissionRequest
       * @property {string|null} [objectId] The ID of the object to add the permission to.
       * @property {string|null} [groupId] The ID of the group to give access.
       */

      /**
       * Constructs a new AddPermissionRequest.
       * @memberof d1.authz
       * @classdesc Represents a request to add permission to an object.
       * @implements IAddPermissionRequest
       * @constructor
       * @param {d1.authz.IAddPermissionRequest=} [properties] Properties to set
       */
      function AddPermissionRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The ID of the object to add the permission to.
       * @member {string} objectId
       * @memberof d1.authz.AddPermissionRequest
       * @instance
       */
      AddPermissionRequest.prototype.objectId = '';

      /**
       * The ID of the group to give access.
       * @member {string} groupId
       * @memberof d1.authz.AddPermissionRequest
       * @instance
       */
      AddPermissionRequest.prototype.groupId = '';

      /**
       * Creates a new AddPermissionRequest instance using the specified properties.
       * @function create
       * @memberof d1.authz.AddPermissionRequest
       * @static
       * @param {d1.authz.IAddPermissionRequest=} [properties] Properties to set
       * @returns {d1.authz.AddPermissionRequest} AddPermissionRequest instance
       */
      AddPermissionRequest.create = function create(properties) {
        return new AddPermissionRequest(properties);
      };

      /**
       * Encodes the specified AddPermissionRequest message. Does not implicitly {@link d1.authz.AddPermissionRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.authz.AddPermissionRequest
       * @static
       * @param {d1.authz.IAddPermissionRequest} message AddPermissionRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddPermissionRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.objectId != null && Object.hasOwnProperty.call(message, 'objectId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.objectId);
        if (message.groupId != null && Object.hasOwnProperty.call(message, 'groupId'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.groupId);
        return writer;
      };

      /**
       * Encodes the specified AddPermissionRequest message, length delimited. Does not implicitly {@link d1.authz.AddPermissionRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authz.AddPermissionRequest
       * @static
       * @param {d1.authz.IAddPermissionRequest} message AddPermissionRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddPermissionRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an AddPermissionRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authz.AddPermissionRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authz.AddPermissionRequest} AddPermissionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddPermissionRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authz.AddPermissionRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.objectId = reader.string();
              break;
            }
            case 2: {
              message.groupId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an AddPermissionRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authz.AddPermissionRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authz.AddPermissionRequest} AddPermissionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddPermissionRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an AddPermissionRequest message.
       * @function verify
       * @memberof d1.authz.AddPermissionRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      AddPermissionRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.objectId != null && message.hasOwnProperty('objectId'))
          if (!$util.isString(message.objectId)) return 'objectId: string expected';
        if (message.groupId != null && message.hasOwnProperty('groupId'))
          if (!$util.isString(message.groupId)) return 'groupId: string expected';
        return null;
      };

      /**
       * Creates an AddPermissionRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authz.AddPermissionRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authz.AddPermissionRequest} AddPermissionRequest
       */
      AddPermissionRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authz.AddPermissionRequest) return object;
        var message = new $root.d1.authz.AddPermissionRequest();
        if (object.objectId != null) message.objectId = String(object.objectId);
        if (object.groupId != null) message.groupId = String(object.groupId);
        return message;
      };

      /**
       * Creates a plain object from an AddPermissionRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authz.AddPermissionRequest
       * @static
       * @param {d1.authz.AddPermissionRequest} message AddPermissionRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      AddPermissionRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.objectId = '';
          object.groupId = '';
        }
        if (message.objectId != null && message.hasOwnProperty('objectId')) object.objectId = message.objectId;
        if (message.groupId != null && message.hasOwnProperty('groupId')) object.groupId = message.groupId;
        return object;
      };

      /**
       * Converts this AddPermissionRequest to JSON.
       * @function toJSON
       * @memberof d1.authz.AddPermissionRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      AddPermissionRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for AddPermissionRequest
       * @function getTypeUrl
       * @memberof d1.authz.AddPermissionRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      AddPermissionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authz.AddPermissionRequest';
      };

      return AddPermissionRequest;
    })();

    authz.AddPermissionResponse = (function () {
      /**
       * Properties of an AddPermissionResponse.
       * @memberof d1.authz
       * @interface IAddPermissionResponse
       */

      /**
       * Constructs a new AddPermissionResponse.
       * @memberof d1.authz
       * @classdesc Represents the result of a request to add permission to an object.
       * @implements IAddPermissionResponse
       * @constructor
       * @param {d1.authz.IAddPermissionResponse=} [properties] Properties to set
       */
      function AddPermissionResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new AddPermissionResponse instance using the specified properties.
       * @function create
       * @memberof d1.authz.AddPermissionResponse
       * @static
       * @param {d1.authz.IAddPermissionResponse=} [properties] Properties to set
       * @returns {d1.authz.AddPermissionResponse} AddPermissionResponse instance
       */
      AddPermissionResponse.create = function create(properties) {
        return new AddPermissionResponse(properties);
      };

      /**
       * Encodes the specified AddPermissionResponse message. Does not implicitly {@link d1.authz.AddPermissionResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.authz.AddPermissionResponse
       * @static
       * @param {d1.authz.IAddPermissionResponse} message AddPermissionResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddPermissionResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified AddPermissionResponse message, length delimited. Does not implicitly {@link d1.authz.AddPermissionResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authz.AddPermissionResponse
       * @static
       * @param {d1.authz.IAddPermissionResponse} message AddPermissionResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddPermissionResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an AddPermissionResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authz.AddPermissionResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authz.AddPermissionResponse} AddPermissionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddPermissionResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authz.AddPermissionResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an AddPermissionResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authz.AddPermissionResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authz.AddPermissionResponse} AddPermissionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddPermissionResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an AddPermissionResponse message.
       * @function verify
       * @memberof d1.authz.AddPermissionResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      AddPermissionResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates an AddPermissionResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authz.AddPermissionResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authz.AddPermissionResponse} AddPermissionResponse
       */
      AddPermissionResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authz.AddPermissionResponse) return object;
        return new $root.d1.authz.AddPermissionResponse();
      };

      /**
       * Creates a plain object from an AddPermissionResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authz.AddPermissionResponse
       * @static
       * @param {d1.authz.AddPermissionResponse} message AddPermissionResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      AddPermissionResponse.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this AddPermissionResponse to JSON.
       * @function toJSON
       * @memberof d1.authz.AddPermissionResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      AddPermissionResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for AddPermissionResponse
       * @function getTypeUrl
       * @memberof d1.authz.AddPermissionResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      AddPermissionResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authz.AddPermissionResponse';
      };

      return AddPermissionResponse;
    })();

    authz.RemovePermissionRequest = (function () {
      /**
       * Properties of a RemovePermissionRequest.
       * @memberof d1.authz
       * @interface IRemovePermissionRequest
       * @property {string|null} [objectId] The ID of the object to remove the permission for.
       * @property {string|null} [groupId] The ID of the group to revoke permission for.
       */

      /**
       * Constructs a new RemovePermissionRequest.
       * @memberof d1.authz
       * @classdesc Represents a request to remove permission to an object.
       * @implements IRemovePermissionRequest
       * @constructor
       * @param {d1.authz.IRemovePermissionRequest=} [properties] Properties to set
       */
      function RemovePermissionRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The ID of the object to remove the permission for.
       * @member {string} objectId
       * @memberof d1.authz.RemovePermissionRequest
       * @instance
       */
      RemovePermissionRequest.prototype.objectId = '';

      /**
       * The ID of the group to revoke permission for.
       * @member {string} groupId
       * @memberof d1.authz.RemovePermissionRequest
       * @instance
       */
      RemovePermissionRequest.prototype.groupId = '';

      /**
       * Creates a new RemovePermissionRequest instance using the specified properties.
       * @function create
       * @memberof d1.authz.RemovePermissionRequest
       * @static
       * @param {d1.authz.IRemovePermissionRequest=} [properties] Properties to set
       * @returns {d1.authz.RemovePermissionRequest} RemovePermissionRequest instance
       */
      RemovePermissionRequest.create = function create(properties) {
        return new RemovePermissionRequest(properties);
      };

      /**
       * Encodes the specified RemovePermissionRequest message. Does not implicitly {@link d1.authz.RemovePermissionRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.authz.RemovePermissionRequest
       * @static
       * @param {d1.authz.IRemovePermissionRequest} message RemovePermissionRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemovePermissionRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.objectId != null && Object.hasOwnProperty.call(message, 'objectId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.objectId);
        if (message.groupId != null && Object.hasOwnProperty.call(message, 'groupId'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.groupId);
        return writer;
      };

      /**
       * Encodes the specified RemovePermissionRequest message, length delimited. Does not implicitly {@link d1.authz.RemovePermissionRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authz.RemovePermissionRequest
       * @static
       * @param {d1.authz.IRemovePermissionRequest} message RemovePermissionRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemovePermissionRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a RemovePermissionRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authz.RemovePermissionRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authz.RemovePermissionRequest} RemovePermissionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemovePermissionRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authz.RemovePermissionRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.objectId = reader.string();
              break;
            }
            case 2: {
              message.groupId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a RemovePermissionRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authz.RemovePermissionRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authz.RemovePermissionRequest} RemovePermissionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemovePermissionRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a RemovePermissionRequest message.
       * @function verify
       * @memberof d1.authz.RemovePermissionRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      RemovePermissionRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.objectId != null && message.hasOwnProperty('objectId'))
          if (!$util.isString(message.objectId)) return 'objectId: string expected';
        if (message.groupId != null && message.hasOwnProperty('groupId'))
          if (!$util.isString(message.groupId)) return 'groupId: string expected';
        return null;
      };

      /**
       * Creates a RemovePermissionRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authz.RemovePermissionRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authz.RemovePermissionRequest} RemovePermissionRequest
       */
      RemovePermissionRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authz.RemovePermissionRequest) return object;
        var message = new $root.d1.authz.RemovePermissionRequest();
        if (object.objectId != null) message.objectId = String(object.objectId);
        if (object.groupId != null) message.groupId = String(object.groupId);
        return message;
      };

      /**
       * Creates a plain object from a RemovePermissionRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authz.RemovePermissionRequest
       * @static
       * @param {d1.authz.RemovePermissionRequest} message RemovePermissionRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      RemovePermissionRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.objectId = '';
          object.groupId = '';
        }
        if (message.objectId != null && message.hasOwnProperty('objectId')) object.objectId = message.objectId;
        if (message.groupId != null && message.hasOwnProperty('groupId')) object.groupId = message.groupId;
        return object;
      };

      /**
       * Converts this RemovePermissionRequest to JSON.
       * @function toJSON
       * @memberof d1.authz.RemovePermissionRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      RemovePermissionRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for RemovePermissionRequest
       * @function getTypeUrl
       * @memberof d1.authz.RemovePermissionRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      RemovePermissionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authz.RemovePermissionRequest';
      };

      return RemovePermissionRequest;
    })();

    authz.RemovePermissionResponse = (function () {
      /**
       * Properties of a RemovePermissionResponse.
       * @memberof d1.authz
       * @interface IRemovePermissionResponse
       */

      /**
       * Constructs a new RemovePermissionResponse.
       * @memberof d1.authz
       * @classdesc Represents the result of a request to remove permission to an object.
       * @implements IRemovePermissionResponse
       * @constructor
       * @param {d1.authz.IRemovePermissionResponse=} [properties] Properties to set
       */
      function RemovePermissionResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new RemovePermissionResponse instance using the specified properties.
       * @function create
       * @memberof d1.authz.RemovePermissionResponse
       * @static
       * @param {d1.authz.IRemovePermissionResponse=} [properties] Properties to set
       * @returns {d1.authz.RemovePermissionResponse} RemovePermissionResponse instance
       */
      RemovePermissionResponse.create = function create(properties) {
        return new RemovePermissionResponse(properties);
      };

      /**
       * Encodes the specified RemovePermissionResponse message. Does not implicitly {@link d1.authz.RemovePermissionResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.authz.RemovePermissionResponse
       * @static
       * @param {d1.authz.IRemovePermissionResponse} message RemovePermissionResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemovePermissionResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified RemovePermissionResponse message, length delimited. Does not implicitly {@link d1.authz.RemovePermissionResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.authz.RemovePermissionResponse
       * @static
       * @param {d1.authz.IRemovePermissionResponse} message RemovePermissionResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RemovePermissionResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a RemovePermissionResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.authz.RemovePermissionResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.authz.RemovePermissionResponse} RemovePermissionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemovePermissionResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.authz.RemovePermissionResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a RemovePermissionResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.authz.RemovePermissionResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.authz.RemovePermissionResponse} RemovePermissionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RemovePermissionResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a RemovePermissionResponse message.
       * @function verify
       * @memberof d1.authz.RemovePermissionResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      RemovePermissionResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates a RemovePermissionResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.authz.RemovePermissionResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.authz.RemovePermissionResponse} RemovePermissionResponse
       */
      RemovePermissionResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.authz.RemovePermissionResponse) return object;
        return new $root.d1.authz.RemovePermissionResponse();
      };

      /**
       * Creates a plain object from a RemovePermissionResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.authz.RemovePermissionResponse
       * @static
       * @param {d1.authz.RemovePermissionResponse} message RemovePermissionResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      RemovePermissionResponse.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this RemovePermissionResponse to JSON.
       * @function toJSON
       * @memberof d1.authz.RemovePermissionResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      RemovePermissionResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for RemovePermissionResponse
       * @function getTypeUrl
       * @memberof d1.authz.RemovePermissionResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      RemovePermissionResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.authz.RemovePermissionResponse';
      };

      return RemovePermissionResponse;
    })();

    return authz;
  })();

  d1.generic = (function () {
    /**
     * Namespace generic.
     * @memberof d1
     * @namespace
     */
    var generic = {};

    generic.Generic = (function () {
      /**
       * Constructs a new Generic service.
       * @memberof d1.generic
       * @classdesc Service for encryption and decryption of data.
       * @extends $protobuf.rpc.Service
       * @constructor
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       */
      function Generic(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
      }

      (Generic.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Generic;

      /**
       * Creates new Generic service using the specified rpc implementation.
       * @function create
       * @memberof d1.generic.Generic
       * @static
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       * @returns {Generic} RPC service. Useful where requests and/or responses are streamed.
       */
      Generic.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
      };

      /**
       * Callback as used by {@link d1.generic.Generic#encrypt}.
       * @memberof d1.generic.Generic
       * @typedef EncryptCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.generic.EncryptResponse} [response] EncryptResponse
       */

      /**
       * Calls Encrypt.
       * @function encrypt
       * @memberof d1.generic.Generic
       * @instance
       * @param {d1.generic.IEncryptRequest} request EncryptRequest message or plain object
       * @param {d1.generic.Generic.EncryptCallback} callback Node-style callback called with the error, if any, and EncryptResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Generic.prototype.encrypt = function encrypt(request, callback) {
          return this.rpcCall(
            encrypt,
            $root.d1.generic.EncryptRequest,
            $root.d1.generic.EncryptResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'Encrypt' },
      );

      /**
       * Calls Encrypt.
       * @function encrypt
       * @memberof d1.generic.Generic
       * @instance
       * @param {d1.generic.IEncryptRequest} request EncryptRequest message or plain object
       * @returns {Promise<d1.generic.EncryptResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.generic.Generic#decrypt}.
       * @memberof d1.generic.Generic
       * @typedef DecryptCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.generic.DecryptResponse} [response] DecryptResponse
       */

      /**
       * Calls Decrypt.
       * @function decrypt
       * @memberof d1.generic.Generic
       * @instance
       * @param {d1.generic.IDecryptRequest} request DecryptRequest message or plain object
       * @param {d1.generic.Generic.DecryptCallback} callback Node-style callback called with the error, if any, and DecryptResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Generic.prototype.decrypt = function decrypt(request, callback) {
          return this.rpcCall(
            decrypt,
            $root.d1.generic.DecryptRequest,
            $root.d1.generic.DecryptResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'Decrypt' },
      );

      /**
       * Calls Decrypt.
       * @function decrypt
       * @memberof d1.generic.Generic
       * @instance
       * @param {d1.generic.IDecryptRequest} request DecryptRequest message or plain object
       * @returns {Promise<d1.generic.DecryptResponse>} Promise
       * @variation 2
       */

      return Generic;
    })();

    generic.EncryptRequest = (function () {
      /**
       * Properties of an EncryptRequest.
       * @memberof d1.generic
       * @interface IEncryptRequest
       * @property {Uint8Array|null} [plaintext] Data to encrypt.
       * @property {Uint8Array|null} [associatedData] Associated data.
       */

      /**
       * Constructs a new EncryptRequest.
       * @memberof d1.generic
       * @classdesc Represents a request to encrypt data.
       * @implements IEncryptRequest
       * @constructor
       * @param {d1.generic.IEncryptRequest=} [properties] Properties to set
       */
      function EncryptRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Data to encrypt.
       * @member {Uint8Array} plaintext
       * @memberof d1.generic.EncryptRequest
       * @instance
       */
      EncryptRequest.prototype.plaintext = $util.newBuffer([]);

      /**
       * Associated data.
       * @member {Uint8Array} associatedData
       * @memberof d1.generic.EncryptRequest
       * @instance
       */
      EncryptRequest.prototype.associatedData = $util.newBuffer([]);

      /**
       * Creates a new EncryptRequest instance using the specified properties.
       * @function create
       * @memberof d1.generic.EncryptRequest
       * @static
       * @param {d1.generic.IEncryptRequest=} [properties] Properties to set
       * @returns {d1.generic.EncryptRequest} EncryptRequest instance
       */
      EncryptRequest.create = function create(properties) {
        return new EncryptRequest(properties);
      };

      /**
       * Encodes the specified EncryptRequest message. Does not implicitly {@link d1.generic.EncryptRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.generic.EncryptRequest
       * @static
       * @param {d1.generic.IEncryptRequest} message EncryptRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      EncryptRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.plaintext != null && Object.hasOwnProperty.call(message, 'plaintext'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.plaintext);
        if (message.associatedData != null && Object.hasOwnProperty.call(message, 'associatedData'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.associatedData);
        return writer;
      };

      /**
       * Encodes the specified EncryptRequest message, length delimited. Does not implicitly {@link d1.generic.EncryptRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.generic.EncryptRequest
       * @static
       * @param {d1.generic.IEncryptRequest} message EncryptRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      EncryptRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an EncryptRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.generic.EncryptRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.generic.EncryptRequest} EncryptRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      EncryptRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.generic.EncryptRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.plaintext = reader.bytes();
              break;
            }
            case 2: {
              message.associatedData = reader.bytes();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an EncryptRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.generic.EncryptRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.generic.EncryptRequest} EncryptRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      EncryptRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an EncryptRequest message.
       * @function verify
       * @memberof d1.generic.EncryptRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      EncryptRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.plaintext != null && message.hasOwnProperty('plaintext'))
          if (
            !((message.plaintext && typeof message.plaintext.length === 'number') || $util.isString(message.plaintext))
          )
            return 'plaintext: buffer expected';
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          if (
            !(
              (message.associatedData && typeof message.associatedData.length === 'number') ||
              $util.isString(message.associatedData)
            )
          )
            return 'associatedData: buffer expected';
        return null;
      };

      /**
       * Creates an EncryptRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.generic.EncryptRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.generic.EncryptRequest} EncryptRequest
       */
      EncryptRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.generic.EncryptRequest) return object;
        var message = new $root.d1.generic.EncryptRequest();
        if (object.plaintext != null)
          if (typeof object.plaintext === 'string')
            $util.base64.decode(
              object.plaintext,
              (message.plaintext = $util.newBuffer($util.base64.length(object.plaintext))),
              0,
            );
          else if (object.plaintext.length >= 0) message.plaintext = object.plaintext;
        if (object.associatedData != null)
          if (typeof object.associatedData === 'string')
            $util.base64.decode(
              object.associatedData,
              (message.associatedData = $util.newBuffer($util.base64.length(object.associatedData))),
              0,
            );
          else if (object.associatedData.length >= 0) message.associatedData = object.associatedData;
        return message;
      };

      /**
       * Creates a plain object from an EncryptRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.generic.EncryptRequest
       * @static
       * @param {d1.generic.EncryptRequest} message EncryptRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      EncryptRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          if (options.bytes === String) object.plaintext = '';
          else {
            object.plaintext = [];
            if (options.bytes !== Array) object.plaintext = $util.newBuffer(object.plaintext);
          }
          if (options.bytes === String) object.associatedData = '';
          else {
            object.associatedData = [];
            if (options.bytes !== Array) object.associatedData = $util.newBuffer(object.associatedData);
          }
        }
        if (message.plaintext != null && message.hasOwnProperty('plaintext'))
          object.plaintext =
            options.bytes === String
              ? $util.base64.encode(message.plaintext, 0, message.plaintext.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.plaintext)
              : message.plaintext;
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          object.associatedData =
            options.bytes === String
              ? $util.base64.encode(message.associatedData, 0, message.associatedData.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.associatedData)
              : message.associatedData;
        return object;
      };

      /**
       * Converts this EncryptRequest to JSON.
       * @function toJSON
       * @memberof d1.generic.EncryptRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      EncryptRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for EncryptRequest
       * @function getTypeUrl
       * @memberof d1.generic.EncryptRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      EncryptRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.generic.EncryptRequest';
      };

      return EncryptRequest;
    })();

    generic.EncryptResponse = (function () {
      /**
       * Properties of an EncryptResponse.
       * @memberof d1.generic
       * @interface IEncryptResponse
       * @property {Uint8Array|null} [ciphertext] Ciphertext of the provided plaintext.
       * @property {Uint8Array|null} [associatedData] Associated data.
       * @property {string|null} [objectId] The object ID of the encrypted data.
       */

      /**
       * Constructs a new EncryptResponse.
       * @memberof d1.generic
       * @classdesc Represents a response to an encryption request.
       * @implements IEncryptResponse
       * @constructor
       * @param {d1.generic.IEncryptResponse=} [properties] Properties to set
       */
      function EncryptResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Ciphertext of the provided plaintext.
       * @member {Uint8Array} ciphertext
       * @memberof d1.generic.EncryptResponse
       * @instance
       */
      EncryptResponse.prototype.ciphertext = $util.newBuffer([]);

      /**
       * Associated data.
       * @member {Uint8Array} associatedData
       * @memberof d1.generic.EncryptResponse
       * @instance
       */
      EncryptResponse.prototype.associatedData = $util.newBuffer([]);

      /**
       * The object ID of the encrypted data.
       * @member {string} objectId
       * @memberof d1.generic.EncryptResponse
       * @instance
       */
      EncryptResponse.prototype.objectId = '';

      /**
       * Creates a new EncryptResponse instance using the specified properties.
       * @function create
       * @memberof d1.generic.EncryptResponse
       * @static
       * @param {d1.generic.IEncryptResponse=} [properties] Properties to set
       * @returns {d1.generic.EncryptResponse} EncryptResponse instance
       */
      EncryptResponse.create = function create(properties) {
        return new EncryptResponse(properties);
      };

      /**
       * Encodes the specified EncryptResponse message. Does not implicitly {@link d1.generic.EncryptResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.generic.EncryptResponse
       * @static
       * @param {d1.generic.IEncryptResponse} message EncryptResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      EncryptResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.ciphertext != null && Object.hasOwnProperty.call(message, 'ciphertext'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.ciphertext);
        if (message.associatedData != null && Object.hasOwnProperty.call(message, 'associatedData'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.associatedData);
        if (message.objectId != null && Object.hasOwnProperty.call(message, 'objectId'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.objectId);
        return writer;
      };

      /**
       * Encodes the specified EncryptResponse message, length delimited. Does not implicitly {@link d1.generic.EncryptResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.generic.EncryptResponse
       * @static
       * @param {d1.generic.IEncryptResponse} message EncryptResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      EncryptResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an EncryptResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.generic.EncryptResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.generic.EncryptResponse} EncryptResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      EncryptResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.generic.EncryptResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.ciphertext = reader.bytes();
              break;
            }
            case 2: {
              message.associatedData = reader.bytes();
              break;
            }
            case 3: {
              message.objectId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an EncryptResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.generic.EncryptResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.generic.EncryptResponse} EncryptResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      EncryptResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an EncryptResponse message.
       * @function verify
       * @memberof d1.generic.EncryptResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      EncryptResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.ciphertext != null && message.hasOwnProperty('ciphertext'))
          if (
            !(
              (message.ciphertext && typeof message.ciphertext.length === 'number') ||
              $util.isString(message.ciphertext)
            )
          )
            return 'ciphertext: buffer expected';
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          if (
            !(
              (message.associatedData && typeof message.associatedData.length === 'number') ||
              $util.isString(message.associatedData)
            )
          )
            return 'associatedData: buffer expected';
        if (message.objectId != null && message.hasOwnProperty('objectId'))
          if (!$util.isString(message.objectId)) return 'objectId: string expected';
        return null;
      };

      /**
       * Creates an EncryptResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.generic.EncryptResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.generic.EncryptResponse} EncryptResponse
       */
      EncryptResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.generic.EncryptResponse) return object;
        var message = new $root.d1.generic.EncryptResponse();
        if (object.ciphertext != null)
          if (typeof object.ciphertext === 'string')
            $util.base64.decode(
              object.ciphertext,
              (message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext))),
              0,
            );
          else if (object.ciphertext.length >= 0) message.ciphertext = object.ciphertext;
        if (object.associatedData != null)
          if (typeof object.associatedData === 'string')
            $util.base64.decode(
              object.associatedData,
              (message.associatedData = $util.newBuffer($util.base64.length(object.associatedData))),
              0,
            );
          else if (object.associatedData.length >= 0) message.associatedData = object.associatedData;
        if (object.objectId != null) message.objectId = String(object.objectId);
        return message;
      };

      /**
       * Creates a plain object from an EncryptResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.generic.EncryptResponse
       * @static
       * @param {d1.generic.EncryptResponse} message EncryptResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      EncryptResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          if (options.bytes === String) object.ciphertext = '';
          else {
            object.ciphertext = [];
            if (options.bytes !== Array) object.ciphertext = $util.newBuffer(object.ciphertext);
          }
          if (options.bytes === String) object.associatedData = '';
          else {
            object.associatedData = [];
            if (options.bytes !== Array) object.associatedData = $util.newBuffer(object.associatedData);
          }
          object.objectId = '';
        }
        if (message.ciphertext != null && message.hasOwnProperty('ciphertext'))
          object.ciphertext =
            options.bytes === String
              ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.ciphertext)
              : message.ciphertext;
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          object.associatedData =
            options.bytes === String
              ? $util.base64.encode(message.associatedData, 0, message.associatedData.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.associatedData)
              : message.associatedData;
        if (message.objectId != null && message.hasOwnProperty('objectId')) object.objectId = message.objectId;
        return object;
      };

      /**
       * Converts this EncryptResponse to JSON.
       * @function toJSON
       * @memberof d1.generic.EncryptResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      EncryptResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for EncryptResponse
       * @function getTypeUrl
       * @memberof d1.generic.EncryptResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      EncryptResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.generic.EncryptResponse';
      };

      return EncryptResponse;
    })();

    generic.DecryptRequest = (function () {
      /**
       * Properties of a DecryptRequest.
       * @memberof d1.generic
       * @interface IDecryptRequest
       * @property {Uint8Array|null} [ciphertext] Data to decrypt.
       * @property {Uint8Array|null} [associatedData] Associated data.
       * @property {string|null} [objectId] The object ID of the data.
       */

      /**
       * Constructs a new DecryptRequest.
       * @memberof d1.generic
       * @classdesc Represents a request to decrypt data.
       * @implements IDecryptRequest
       * @constructor
       * @param {d1.generic.IDecryptRequest=} [properties] Properties to set
       */
      function DecryptRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Data to decrypt.
       * @member {Uint8Array} ciphertext
       * @memberof d1.generic.DecryptRequest
       * @instance
       */
      DecryptRequest.prototype.ciphertext = $util.newBuffer([]);

      /**
       * Associated data.
       * @member {Uint8Array} associatedData
       * @memberof d1.generic.DecryptRequest
       * @instance
       */
      DecryptRequest.prototype.associatedData = $util.newBuffer([]);

      /**
       * The object ID of the data.
       * @member {string} objectId
       * @memberof d1.generic.DecryptRequest
       * @instance
       */
      DecryptRequest.prototype.objectId = '';

      /**
       * Creates a new DecryptRequest instance using the specified properties.
       * @function create
       * @memberof d1.generic.DecryptRequest
       * @static
       * @param {d1.generic.IDecryptRequest=} [properties] Properties to set
       * @returns {d1.generic.DecryptRequest} DecryptRequest instance
       */
      DecryptRequest.create = function create(properties) {
        return new DecryptRequest(properties);
      };

      /**
       * Encodes the specified DecryptRequest message. Does not implicitly {@link d1.generic.DecryptRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.generic.DecryptRequest
       * @static
       * @param {d1.generic.IDecryptRequest} message DecryptRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DecryptRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.ciphertext != null && Object.hasOwnProperty.call(message, 'ciphertext'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.ciphertext);
        if (message.associatedData != null && Object.hasOwnProperty.call(message, 'associatedData'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.associatedData);
        if (message.objectId != null && Object.hasOwnProperty.call(message, 'objectId'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.objectId);
        return writer;
      };

      /**
       * Encodes the specified DecryptRequest message, length delimited. Does not implicitly {@link d1.generic.DecryptRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.generic.DecryptRequest
       * @static
       * @param {d1.generic.IDecryptRequest} message DecryptRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DecryptRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DecryptRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.generic.DecryptRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.generic.DecryptRequest} DecryptRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DecryptRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.generic.DecryptRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.ciphertext = reader.bytes();
              break;
            }
            case 2: {
              message.associatedData = reader.bytes();
              break;
            }
            case 3: {
              message.objectId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DecryptRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.generic.DecryptRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.generic.DecryptRequest} DecryptRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DecryptRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DecryptRequest message.
       * @function verify
       * @memberof d1.generic.DecryptRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DecryptRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.ciphertext != null && message.hasOwnProperty('ciphertext'))
          if (
            !(
              (message.ciphertext && typeof message.ciphertext.length === 'number') ||
              $util.isString(message.ciphertext)
            )
          )
            return 'ciphertext: buffer expected';
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          if (
            !(
              (message.associatedData && typeof message.associatedData.length === 'number') ||
              $util.isString(message.associatedData)
            )
          )
            return 'associatedData: buffer expected';
        if (message.objectId != null && message.hasOwnProperty('objectId'))
          if (!$util.isString(message.objectId)) return 'objectId: string expected';
        return null;
      };

      /**
       * Creates a DecryptRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.generic.DecryptRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.generic.DecryptRequest} DecryptRequest
       */
      DecryptRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.generic.DecryptRequest) return object;
        var message = new $root.d1.generic.DecryptRequest();
        if (object.ciphertext != null)
          if (typeof object.ciphertext === 'string')
            $util.base64.decode(
              object.ciphertext,
              (message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext))),
              0,
            );
          else if (object.ciphertext.length >= 0) message.ciphertext = object.ciphertext;
        if (object.associatedData != null)
          if (typeof object.associatedData === 'string')
            $util.base64.decode(
              object.associatedData,
              (message.associatedData = $util.newBuffer($util.base64.length(object.associatedData))),
              0,
            );
          else if (object.associatedData.length >= 0) message.associatedData = object.associatedData;
        if (object.objectId != null) message.objectId = String(object.objectId);
        return message;
      };

      /**
       * Creates a plain object from a DecryptRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.generic.DecryptRequest
       * @static
       * @param {d1.generic.DecryptRequest} message DecryptRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DecryptRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          if (options.bytes === String) object.ciphertext = '';
          else {
            object.ciphertext = [];
            if (options.bytes !== Array) object.ciphertext = $util.newBuffer(object.ciphertext);
          }
          if (options.bytes === String) object.associatedData = '';
          else {
            object.associatedData = [];
            if (options.bytes !== Array) object.associatedData = $util.newBuffer(object.associatedData);
          }
          object.objectId = '';
        }
        if (message.ciphertext != null && message.hasOwnProperty('ciphertext'))
          object.ciphertext =
            options.bytes === String
              ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.ciphertext)
              : message.ciphertext;
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          object.associatedData =
            options.bytes === String
              ? $util.base64.encode(message.associatedData, 0, message.associatedData.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.associatedData)
              : message.associatedData;
        if (message.objectId != null && message.hasOwnProperty('objectId')) object.objectId = message.objectId;
        return object;
      };

      /**
       * Converts this DecryptRequest to JSON.
       * @function toJSON
       * @memberof d1.generic.DecryptRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DecryptRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for DecryptRequest
       * @function getTypeUrl
       * @memberof d1.generic.DecryptRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      DecryptRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.generic.DecryptRequest';
      };

      return DecryptRequest;
    })();

    generic.DecryptResponse = (function () {
      /**
       * Properties of a DecryptResponse.
       * @memberof d1.generic
       * @interface IDecryptResponse
       * @property {Uint8Array|null} [plaintext] Decrypted data.
       * @property {Uint8Array|null} [associatedData] Associated data.
       */

      /**
       * Constructs a new DecryptResponse.
       * @memberof d1.generic
       * @classdesc Represents a response to a decryption request.
       * @implements IDecryptResponse
       * @constructor
       * @param {d1.generic.IDecryptResponse=} [properties] Properties to set
       */
      function DecryptResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Decrypted data.
       * @member {Uint8Array} plaintext
       * @memberof d1.generic.DecryptResponse
       * @instance
       */
      DecryptResponse.prototype.plaintext = $util.newBuffer([]);

      /**
       * Associated data.
       * @member {Uint8Array} associatedData
       * @memberof d1.generic.DecryptResponse
       * @instance
       */
      DecryptResponse.prototype.associatedData = $util.newBuffer([]);

      /**
       * Creates a new DecryptResponse instance using the specified properties.
       * @function create
       * @memberof d1.generic.DecryptResponse
       * @static
       * @param {d1.generic.IDecryptResponse=} [properties] Properties to set
       * @returns {d1.generic.DecryptResponse} DecryptResponse instance
       */
      DecryptResponse.create = function create(properties) {
        return new DecryptResponse(properties);
      };

      /**
       * Encodes the specified DecryptResponse message. Does not implicitly {@link d1.generic.DecryptResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.generic.DecryptResponse
       * @static
       * @param {d1.generic.IDecryptResponse} message DecryptResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DecryptResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.plaintext != null && Object.hasOwnProperty.call(message, 'plaintext'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.plaintext);
        if (message.associatedData != null && Object.hasOwnProperty.call(message, 'associatedData'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.associatedData);
        return writer;
      };

      /**
       * Encodes the specified DecryptResponse message, length delimited. Does not implicitly {@link d1.generic.DecryptResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.generic.DecryptResponse
       * @static
       * @param {d1.generic.IDecryptResponse} message DecryptResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DecryptResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DecryptResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.generic.DecryptResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.generic.DecryptResponse} DecryptResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DecryptResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.generic.DecryptResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.plaintext = reader.bytes();
              break;
            }
            case 2: {
              message.associatedData = reader.bytes();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DecryptResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.generic.DecryptResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.generic.DecryptResponse} DecryptResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DecryptResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DecryptResponse message.
       * @function verify
       * @memberof d1.generic.DecryptResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DecryptResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.plaintext != null && message.hasOwnProperty('plaintext'))
          if (
            !((message.plaintext && typeof message.plaintext.length === 'number') || $util.isString(message.plaintext))
          )
            return 'plaintext: buffer expected';
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          if (
            !(
              (message.associatedData && typeof message.associatedData.length === 'number') ||
              $util.isString(message.associatedData)
            )
          )
            return 'associatedData: buffer expected';
        return null;
      };

      /**
       * Creates a DecryptResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.generic.DecryptResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.generic.DecryptResponse} DecryptResponse
       */
      DecryptResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.generic.DecryptResponse) return object;
        var message = new $root.d1.generic.DecryptResponse();
        if (object.plaintext != null)
          if (typeof object.plaintext === 'string')
            $util.base64.decode(
              object.plaintext,
              (message.plaintext = $util.newBuffer($util.base64.length(object.plaintext))),
              0,
            );
          else if (object.plaintext.length >= 0) message.plaintext = object.plaintext;
        if (object.associatedData != null)
          if (typeof object.associatedData === 'string')
            $util.base64.decode(
              object.associatedData,
              (message.associatedData = $util.newBuffer($util.base64.length(object.associatedData))),
              0,
            );
          else if (object.associatedData.length >= 0) message.associatedData = object.associatedData;
        return message;
      };

      /**
       * Creates a plain object from a DecryptResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.generic.DecryptResponse
       * @static
       * @param {d1.generic.DecryptResponse} message DecryptResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DecryptResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          if (options.bytes === String) object.plaintext = '';
          else {
            object.plaintext = [];
            if (options.bytes !== Array) object.plaintext = $util.newBuffer(object.plaintext);
          }
          if (options.bytes === String) object.associatedData = '';
          else {
            object.associatedData = [];
            if (options.bytes !== Array) object.associatedData = $util.newBuffer(object.associatedData);
          }
        }
        if (message.plaintext != null && message.hasOwnProperty('plaintext'))
          object.plaintext =
            options.bytes === String
              ? $util.base64.encode(message.plaintext, 0, message.plaintext.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.plaintext)
              : message.plaintext;
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          object.associatedData =
            options.bytes === String
              ? $util.base64.encode(message.associatedData, 0, message.associatedData.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.associatedData)
              : message.associatedData;
        return object;
      };

      /**
       * Converts this DecryptResponse to JSON.
       * @function toJSON
       * @memberof d1.generic.DecryptResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DecryptResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for DecryptResponse
       * @function getTypeUrl
       * @memberof d1.generic.DecryptResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      DecryptResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.generic.DecryptResponse';
      };

      return DecryptResponse;
    })();

    return generic;
  })();

  d1.index = (function () {
    /**
     * Namespace index.
     * @memberof d1
     * @namespace
     */
    var index = {};

    index.Index = (function () {
      /**
       * Constructs a new Index service.
       * @memberof d1.index
       * @classdesc Service for using secure index.
       * @extends $protobuf.rpc.Service
       * @constructor
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       */
      function Index(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
      }

      (Index.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Index;

      /**
       * Creates new Index service using the specified rpc implementation.
       * @function create
       * @memberof d1.index.Index
       * @static
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       * @returns {Index} RPC service. Useful where requests and/or responses are streamed.
       */
      Index.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
      };

      /**
       * Callback as used by {@link d1.index.Index#add}.
       * @memberof d1.index.Index
       * @typedef AddCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.index.AddResponse} [response] AddResponse
       */

      /**
       * Calls Add.
       * @function add
       * @memberof d1.index.Index
       * @instance
       * @param {d1.index.IAddRequest} request AddRequest message or plain object
       * @param {d1.index.Index.AddCallback} callback Node-style callback called with the error, if any, and AddResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Index.prototype.add = function add(request, callback) {
          return this.rpcCall(add, $root.d1.index.AddRequest, $root.d1.index.AddResponse, request, callback);
        }),
        'name',
        { value: 'Add' },
      );

      /**
       * Calls Add.
       * @function add
       * @memberof d1.index.Index
       * @instance
       * @param {d1.index.IAddRequest} request AddRequest message or plain object
       * @returns {Promise<d1.index.AddResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.index.Index#search}.
       * @memberof d1.index.Index
       * @typedef SearchCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.index.SearchResponse} [response] SearchResponse
       */

      /**
       * Calls Search.
       * @function search
       * @memberof d1.index.Index
       * @instance
       * @param {d1.index.ISearchRequest} request SearchRequest message or plain object
       * @param {d1.index.Index.SearchCallback} callback Node-style callback called with the error, if any, and SearchResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Index.prototype.search = function search(request, callback) {
          return this.rpcCall(search, $root.d1.index.SearchRequest, $root.d1.index.SearchResponse, request, callback);
        }),
        'name',
        { value: 'Search' },
      );

      /**
       * Calls Search.
       * @function search
       * @memberof d1.index.Index
       * @instance
       * @param {d1.index.ISearchRequest} request SearchRequest message or plain object
       * @returns {Promise<d1.index.SearchResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.index.Index#delete_}.
       * @memberof d1.index.Index
       * @typedef DeleteCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.index.DeleteResponse} [response] DeleteResponse
       */

      /**
       * Calls Delete.
       * @function delete
       * @memberof d1.index.Index
       * @instance
       * @param {d1.index.IDeleteRequest} request DeleteRequest message or plain object
       * @param {d1.index.Index.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Index.prototype['delete'] = function delete_(request, callback) {
          return this.rpcCall(delete_, $root.d1.index.DeleteRequest, $root.d1.index.DeleteResponse, request, callback);
        }),
        'name',
        { value: 'Delete' },
      );

      /**
       * Calls Delete.
       * @function delete
       * @memberof d1.index.Index
       * @instance
       * @param {d1.index.IDeleteRequest} request DeleteRequest message or plain object
       * @returns {Promise<d1.index.DeleteResponse>} Promise
       * @variation 2
       */

      return Index;
    })();

    index.AddRequest = (function () {
      /**
       * Properties of an AddRequest.
       * @memberof d1.index
       * @interface IAddRequest
       * @property {Array.<string>|null} [keywords] Keywords to be associated with identifier in secure index.
       * @property {string|null} [identifier] Identifier, e.g. a document ID, to be stored in secure index.
       */

      /**
       * Constructs a new AddRequest.
       * @memberof d1.index
       * @classdesc Represents an AddRequest.
       * @implements IAddRequest
       * @constructor
       * @param {d1.index.IAddRequest=} [properties] Properties to set
       */
      function AddRequest(properties) {
        this.keywords = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Keywords to be associated with identifier in secure index.
       * @member {Array.<string>} keywords
       * @memberof d1.index.AddRequest
       * @instance
       */
      AddRequest.prototype.keywords = $util.emptyArray;

      /**
       * Identifier, e.g. a document ID, to be stored in secure index.
       * @member {string} identifier
       * @memberof d1.index.AddRequest
       * @instance
       */
      AddRequest.prototype.identifier = '';

      /**
       * Creates a new AddRequest instance using the specified properties.
       * @function create
       * @memberof d1.index.AddRequest
       * @static
       * @param {d1.index.IAddRequest=} [properties] Properties to set
       * @returns {d1.index.AddRequest} AddRequest instance
       */
      AddRequest.create = function create(properties) {
        return new AddRequest(properties);
      };

      /**
       * Encodes the specified AddRequest message. Does not implicitly {@link d1.index.AddRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.index.AddRequest
       * @static
       * @param {d1.index.IAddRequest} message AddRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.keywords != null && message.keywords.length)
          for (var i = 0; i < message.keywords.length; ++i)
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.keywords[i]);
        if (message.identifier != null && Object.hasOwnProperty.call(message, 'identifier'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.identifier);
        return writer;
      };

      /**
       * Encodes the specified AddRequest message, length delimited. Does not implicitly {@link d1.index.AddRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.index.AddRequest
       * @static
       * @param {d1.index.IAddRequest} message AddRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an AddRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.index.AddRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.index.AddRequest} AddRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.index.AddRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.keywords && message.keywords.length)) message.keywords = [];
              message.keywords.push(reader.string());
              break;
            }
            case 2: {
              message.identifier = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an AddRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.index.AddRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.index.AddRequest} AddRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an AddRequest message.
       * @function verify
       * @memberof d1.index.AddRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      AddRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.keywords != null && message.hasOwnProperty('keywords')) {
          if (!Array.isArray(message.keywords)) return 'keywords: array expected';
          for (var i = 0; i < message.keywords.length; ++i)
            if (!$util.isString(message.keywords[i])) return 'keywords: string[] expected';
        }
        if (message.identifier != null && message.hasOwnProperty('identifier'))
          if (!$util.isString(message.identifier)) return 'identifier: string expected';
        return null;
      };

      /**
       * Creates an AddRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.index.AddRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.index.AddRequest} AddRequest
       */
      AddRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.index.AddRequest) return object;
        var message = new $root.d1.index.AddRequest();
        if (object.keywords) {
          if (!Array.isArray(object.keywords)) throw TypeError('.d1.index.AddRequest.keywords: array expected');
          message.keywords = [];
          for (var i = 0; i < object.keywords.length; ++i) message.keywords[i] = String(object.keywords[i]);
        }
        if (object.identifier != null) message.identifier = String(object.identifier);
        return message;
      };

      /**
       * Creates a plain object from an AddRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.index.AddRequest
       * @static
       * @param {d1.index.AddRequest} message AddRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      AddRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.keywords = [];
        if (options.defaults) object.identifier = '';
        if (message.keywords && message.keywords.length) {
          object.keywords = [];
          for (var j = 0; j < message.keywords.length; ++j) object.keywords[j] = message.keywords[j];
        }
        if (message.identifier != null && message.hasOwnProperty('identifier')) object.identifier = message.identifier;
        return object;
      };

      /**
       * Converts this AddRequest to JSON.
       * @function toJSON
       * @memberof d1.index.AddRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      AddRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for AddRequest
       * @function getTypeUrl
       * @memberof d1.index.AddRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      AddRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.index.AddRequest';
      };

      return AddRequest;
    })();

    index.AddResponse = (function () {
      /**
       * Properties of an AddResponse.
       * @memberof d1.index
       * @interface IAddResponse
       */

      /**
       * Constructs a new AddResponse.
       * @memberof d1.index
       * @classdesc Represents a response to an add request.
       * @implements IAddResponse
       * @constructor
       * @param {d1.index.IAddResponse=} [properties] Properties to set
       */
      function AddResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new AddResponse instance using the specified properties.
       * @function create
       * @memberof d1.index.AddResponse
       * @static
       * @param {d1.index.IAddResponse=} [properties] Properties to set
       * @returns {d1.index.AddResponse} AddResponse instance
       */
      AddResponse.create = function create(properties) {
        return new AddResponse(properties);
      };

      /**
       * Encodes the specified AddResponse message. Does not implicitly {@link d1.index.AddResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.index.AddResponse
       * @static
       * @param {d1.index.IAddResponse} message AddResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified AddResponse message, length delimited. Does not implicitly {@link d1.index.AddResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.index.AddResponse
       * @static
       * @param {d1.index.IAddResponse} message AddResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an AddResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.index.AddResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.index.AddResponse} AddResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.index.AddResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an AddResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.index.AddResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.index.AddResponse} AddResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an AddResponse message.
       * @function verify
       * @memberof d1.index.AddResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      AddResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates an AddResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.index.AddResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.index.AddResponse} AddResponse
       */
      AddResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.index.AddResponse) return object;
        return new $root.d1.index.AddResponse();
      };

      /**
       * Creates a plain object from an AddResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.index.AddResponse
       * @static
       * @param {d1.index.AddResponse} message AddResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      AddResponse.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this AddResponse to JSON.
       * @function toJSON
       * @memberof d1.index.AddResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      AddResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for AddResponse
       * @function getTypeUrl
       * @memberof d1.index.AddResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      AddResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.index.AddResponse';
      };

      return AddResponse;
    })();

    index.SearchRequest = (function () {
      /**
       * Properties of a SearchRequest.
       * @memberof d1.index
       * @interface ISearchRequest
       * @property {string|null} [keyword] Keyword to search for in secure index.
       */

      /**
       * Constructs a new SearchRequest.
       * @memberof d1.index
       * @classdesc Represents a SearchRequest.
       * @implements ISearchRequest
       * @constructor
       * @param {d1.index.ISearchRequest=} [properties] Properties to set
       */
      function SearchRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Keyword to search for in secure index.
       * @member {string} keyword
       * @memberof d1.index.SearchRequest
       * @instance
       */
      SearchRequest.prototype.keyword = '';

      /**
       * Creates a new SearchRequest instance using the specified properties.
       * @function create
       * @memberof d1.index.SearchRequest
       * @static
       * @param {d1.index.ISearchRequest=} [properties] Properties to set
       * @returns {d1.index.SearchRequest} SearchRequest instance
       */
      SearchRequest.create = function create(properties) {
        return new SearchRequest(properties);
      };

      /**
       * Encodes the specified SearchRequest message. Does not implicitly {@link d1.index.SearchRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.index.SearchRequest
       * @static
       * @param {d1.index.ISearchRequest} message SearchRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SearchRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.keyword != null && Object.hasOwnProperty.call(message, 'keyword'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.keyword);
        return writer;
      };

      /**
       * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link d1.index.SearchRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.index.SearchRequest
       * @static
       * @param {d1.index.ISearchRequest} message SearchRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SearchRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a SearchRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.index.SearchRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.index.SearchRequest} SearchRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SearchRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.index.SearchRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.keyword = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.index.SearchRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.index.SearchRequest} SearchRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SearchRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a SearchRequest message.
       * @function verify
       * @memberof d1.index.SearchRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      SearchRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.keyword != null && message.hasOwnProperty('keyword'))
          if (!$util.isString(message.keyword)) return 'keyword: string expected';
        return null;
      };

      /**
       * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.index.SearchRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.index.SearchRequest} SearchRequest
       */
      SearchRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.index.SearchRequest) return object;
        var message = new $root.d1.index.SearchRequest();
        if (object.keyword != null) message.keyword = String(object.keyword);
        return message;
      };

      /**
       * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.index.SearchRequest
       * @static
       * @param {d1.index.SearchRequest} message SearchRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      SearchRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.keyword = '';
        if (message.keyword != null && message.hasOwnProperty('keyword')) object.keyword = message.keyword;
        return object;
      };

      /**
       * Converts this SearchRequest to JSON.
       * @function toJSON
       * @memberof d1.index.SearchRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      SearchRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for SearchRequest
       * @function getTypeUrl
       * @memberof d1.index.SearchRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      SearchRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.index.SearchRequest';
      };

      return SearchRequest;
    })();

    index.SearchResponse = (function () {
      /**
       * Properties of a SearchResponse.
       * @memberof d1.index
       * @interface ISearchResponse
       * @property {Array.<string>|null} [identifiers] Identifiers that contain the keyword in secure index.
       */

      /**
       * Constructs a new SearchResponse.
       * @memberof d1.index
       * @classdesc Represents a response to a search request.
       * @implements ISearchResponse
       * @constructor
       * @param {d1.index.ISearchResponse=} [properties] Properties to set
       */
      function SearchResponse(properties) {
        this.identifiers = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Identifiers that contain the keyword in secure index.
       * @member {Array.<string>} identifiers
       * @memberof d1.index.SearchResponse
       * @instance
       */
      SearchResponse.prototype.identifiers = $util.emptyArray;

      /**
       * Creates a new SearchResponse instance using the specified properties.
       * @function create
       * @memberof d1.index.SearchResponse
       * @static
       * @param {d1.index.ISearchResponse=} [properties] Properties to set
       * @returns {d1.index.SearchResponse} SearchResponse instance
       */
      SearchResponse.create = function create(properties) {
        return new SearchResponse(properties);
      };

      /**
       * Encodes the specified SearchResponse message. Does not implicitly {@link d1.index.SearchResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.index.SearchResponse
       * @static
       * @param {d1.index.ISearchResponse} message SearchResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SearchResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.identifiers != null && message.identifiers.length)
          for (var i = 0; i < message.identifiers.length; ++i)
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.identifiers[i]);
        return writer;
      };

      /**
       * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link d1.index.SearchResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.index.SearchResponse
       * @static
       * @param {d1.index.ISearchResponse} message SearchResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SearchResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a SearchResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.index.SearchResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.index.SearchResponse} SearchResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SearchResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.index.SearchResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 2: {
              if (!(message.identifiers && message.identifiers.length)) message.identifiers = [];
              message.identifiers.push(reader.string());
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.index.SearchResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.index.SearchResponse} SearchResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SearchResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a SearchResponse message.
       * @function verify
       * @memberof d1.index.SearchResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      SearchResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.identifiers != null && message.hasOwnProperty('identifiers')) {
          if (!Array.isArray(message.identifiers)) return 'identifiers: array expected';
          for (var i = 0; i < message.identifiers.length; ++i)
            if (!$util.isString(message.identifiers[i])) return 'identifiers: string[] expected';
        }
        return null;
      };

      /**
       * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.index.SearchResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.index.SearchResponse} SearchResponse
       */
      SearchResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.index.SearchResponse) return object;
        var message = new $root.d1.index.SearchResponse();
        if (object.identifiers) {
          if (!Array.isArray(object.identifiers))
            throw TypeError('.d1.index.SearchResponse.identifiers: array expected');
          message.identifiers = [];
          for (var i = 0; i < object.identifiers.length; ++i) message.identifiers[i] = String(object.identifiers[i]);
        }
        return message;
      };

      /**
       * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.index.SearchResponse
       * @static
       * @param {d1.index.SearchResponse} message SearchResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      SearchResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.identifiers = [];
        if (message.identifiers && message.identifiers.length) {
          object.identifiers = [];
          for (var j = 0; j < message.identifiers.length; ++j) object.identifiers[j] = message.identifiers[j];
        }
        return object;
      };

      /**
       * Converts this SearchResponse to JSON.
       * @function toJSON
       * @memberof d1.index.SearchResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      SearchResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for SearchResponse
       * @function getTypeUrl
       * @memberof d1.index.SearchResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      SearchResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.index.SearchResponse';
      };

      return SearchResponse;
    })();

    index.DeleteRequest = (function () {
      /**
       * Properties of a DeleteRequest.
       * @memberof d1.index
       * @interface IDeleteRequest
       * @property {Array.<string>|null} [keywords] Keywords that are associated with identifier in secure index.
       * @property {string|null} [identifier] Identifier stored in secure index.
       */

      /**
       * Constructs a new DeleteRequest.
       * @memberof d1.index
       * @classdesc Represents a DeleteRequest.
       * @implements IDeleteRequest
       * @constructor
       * @param {d1.index.IDeleteRequest=} [properties] Properties to set
       */
      function DeleteRequest(properties) {
        this.keywords = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Keywords that are associated with identifier in secure index.
       * @member {Array.<string>} keywords
       * @memberof d1.index.DeleteRequest
       * @instance
       */
      DeleteRequest.prototype.keywords = $util.emptyArray;

      /**
       * Identifier stored in secure index.
       * @member {string} identifier
       * @memberof d1.index.DeleteRequest
       * @instance
       */
      DeleteRequest.prototype.identifier = '';

      /**
       * Creates a new DeleteRequest instance using the specified properties.
       * @function create
       * @memberof d1.index.DeleteRequest
       * @static
       * @param {d1.index.IDeleteRequest=} [properties] Properties to set
       * @returns {d1.index.DeleteRequest} DeleteRequest instance
       */
      DeleteRequest.create = function create(properties) {
        return new DeleteRequest(properties);
      };

      /**
       * Encodes the specified DeleteRequest message. Does not implicitly {@link d1.index.DeleteRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.index.DeleteRequest
       * @static
       * @param {d1.index.IDeleteRequest} message DeleteRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DeleteRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.keywords != null && message.keywords.length)
          for (var i = 0; i < message.keywords.length; ++i)
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.keywords[i]);
        if (message.identifier != null && Object.hasOwnProperty.call(message, 'identifier'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.identifier);
        return writer;
      };

      /**
       * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link d1.index.DeleteRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.index.DeleteRequest
       * @static
       * @param {d1.index.IDeleteRequest} message DeleteRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DeleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DeleteRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.index.DeleteRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.index.DeleteRequest} DeleteRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DeleteRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.index.DeleteRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.keywords && message.keywords.length)) message.keywords = [];
              message.keywords.push(reader.string());
              break;
            }
            case 2: {
              message.identifier = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.index.DeleteRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.index.DeleteRequest} DeleteRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DeleteRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DeleteRequest message.
       * @function verify
       * @memberof d1.index.DeleteRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DeleteRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.keywords != null && message.hasOwnProperty('keywords')) {
          if (!Array.isArray(message.keywords)) return 'keywords: array expected';
          for (var i = 0; i < message.keywords.length; ++i)
            if (!$util.isString(message.keywords[i])) return 'keywords: string[] expected';
        }
        if (message.identifier != null && message.hasOwnProperty('identifier'))
          if (!$util.isString(message.identifier)) return 'identifier: string expected';
        return null;
      };

      /**
       * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.index.DeleteRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.index.DeleteRequest} DeleteRequest
       */
      DeleteRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.index.DeleteRequest) return object;
        var message = new $root.d1.index.DeleteRequest();
        if (object.keywords) {
          if (!Array.isArray(object.keywords)) throw TypeError('.d1.index.DeleteRequest.keywords: array expected');
          message.keywords = [];
          for (var i = 0; i < object.keywords.length; ++i) message.keywords[i] = String(object.keywords[i]);
        }
        if (object.identifier != null) message.identifier = String(object.identifier);
        return message;
      };

      /**
       * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.index.DeleteRequest
       * @static
       * @param {d1.index.DeleteRequest} message DeleteRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DeleteRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.keywords = [];
        if (options.defaults) object.identifier = '';
        if (message.keywords && message.keywords.length) {
          object.keywords = [];
          for (var j = 0; j < message.keywords.length; ++j) object.keywords[j] = message.keywords[j];
        }
        if (message.identifier != null && message.hasOwnProperty('identifier')) object.identifier = message.identifier;
        return object;
      };

      /**
       * Converts this DeleteRequest to JSON.
       * @function toJSON
       * @memberof d1.index.DeleteRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DeleteRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for DeleteRequest
       * @function getTypeUrl
       * @memberof d1.index.DeleteRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      DeleteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.index.DeleteRequest';
      };

      return DeleteRequest;
    })();

    index.DeleteResponse = (function () {
      /**
       * Properties of a DeleteResponse.
       * @memberof d1.index
       * @interface IDeleteResponse
       */

      /**
       * Constructs a new DeleteResponse.
       * @memberof d1.index
       * @classdesc Represents a response to a delete request.
       * @implements IDeleteResponse
       * @constructor
       * @param {d1.index.IDeleteResponse=} [properties] Properties to set
       */
      function DeleteResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new DeleteResponse instance using the specified properties.
       * @function create
       * @memberof d1.index.DeleteResponse
       * @static
       * @param {d1.index.IDeleteResponse=} [properties] Properties to set
       * @returns {d1.index.DeleteResponse} DeleteResponse instance
       */
      DeleteResponse.create = function create(properties) {
        return new DeleteResponse(properties);
      };

      /**
       * Encodes the specified DeleteResponse message. Does not implicitly {@link d1.index.DeleteResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.index.DeleteResponse
       * @static
       * @param {d1.index.IDeleteResponse} message DeleteResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DeleteResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link d1.index.DeleteResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.index.DeleteResponse
       * @static
       * @param {d1.index.IDeleteResponse} message DeleteResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DeleteResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DeleteResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.index.DeleteResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.index.DeleteResponse} DeleteResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DeleteResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.index.DeleteResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.index.DeleteResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.index.DeleteResponse} DeleteResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DeleteResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DeleteResponse message.
       * @function verify
       * @memberof d1.index.DeleteResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DeleteResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.index.DeleteResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.index.DeleteResponse} DeleteResponse
       */
      DeleteResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.index.DeleteResponse) return object;
        return new $root.d1.index.DeleteResponse();
      };

      /**
       * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.index.DeleteResponse
       * @static
       * @param {d1.index.DeleteResponse} message DeleteResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DeleteResponse.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this DeleteResponse to JSON.
       * @function toJSON
       * @memberof d1.index.DeleteResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DeleteResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for DeleteResponse
       * @function getTypeUrl
       * @memberof d1.index.DeleteResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      DeleteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.index.DeleteResponse';
      };

      return DeleteResponse;
    })();

    return index;
  })();

  d1.storage = (function () {
    /**
     * Namespace storage.
     * @memberof d1
     * @namespace
     */
    var storage = {};

    storage.Storage = (function () {
      /**
       * Constructs a new Storage service.
       * @memberof d1.storage
       * @classdesc Service for managing stored objects.
       * @extends $protobuf.rpc.Service
       * @constructor
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       */
      function Storage(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
      }

      (Storage.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Storage;

      /**
       * Creates new Storage service using the specified rpc implementation.
       * @function create
       * @memberof d1.storage.Storage
       * @static
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       * @returns {Storage} RPC service. Useful where requests and/or responses are streamed.
       */
      Storage.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
      };

      /**
       * Callback as used by {@link d1.storage.Storage#store}.
       * @memberof d1.storage.Storage
       * @typedef StoreCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.storage.StoreResponse} [response] StoreResponse
       */

      /**
       * Store an object in encrypted form.
       * @function store
       * @memberof d1.storage.Storage
       * @instance
       * @param {d1.storage.IStoreRequest} request StoreRequest message or plain object
       * @param {d1.storage.Storage.StoreCallback} callback Node-style callback called with the error, if any, and StoreResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Storage.prototype.store = function store(request, callback) {
          return this.rpcCall(store, $root.d1.storage.StoreRequest, $root.d1.storage.StoreResponse, request, callback);
        }),
        'name',
        { value: 'Store' },
      );

      /**
       * Store an object in encrypted form.
       * @function store
       * @memberof d1.storage.Storage
       * @instance
       * @param {d1.storage.IStoreRequest} request StoreRequest message or plain object
       * @returns {Promise<d1.storage.StoreResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.storage.Storage#retrieve}.
       * @memberof d1.storage.Storage
       * @typedef RetrieveCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.storage.RetrieveResponse} [response] RetrieveResponse
       */

      /**
       * Fetches a previously stored object and returns the plaintext content.
       * @function retrieve
       * @memberof d1.storage.Storage
       * @instance
       * @param {d1.storage.IRetrieveRequest} request RetrieveRequest message or plain object
       * @param {d1.storage.Storage.RetrieveCallback} callback Node-style callback called with the error, if any, and RetrieveResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Storage.prototype.retrieve = function retrieve(request, callback) {
          return this.rpcCall(
            retrieve,
            $root.d1.storage.RetrieveRequest,
            $root.d1.storage.RetrieveResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'Retrieve' },
      );

      /**
       * Fetches a previously stored object and returns the plaintext content.
       * @function retrieve
       * @memberof d1.storage.Storage
       * @instance
       * @param {d1.storage.IRetrieveRequest} request RetrieveRequest message or plain object
       * @returns {Promise<d1.storage.RetrieveResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.storage.Storage#update}.
       * @memberof d1.storage.Storage
       * @typedef UpdateCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.storage.UpdateResponse} [response] UpdateResponse
       */

      /**
       * Store an object in encrypted form, replacing the data previously stored.
       * @function update
       * @memberof d1.storage.Storage
       * @instance
       * @param {d1.storage.IUpdateRequest} request UpdateRequest message or plain object
       * @param {d1.storage.Storage.UpdateCallback} callback Node-style callback called with the error, if any, and UpdateResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Storage.prototype.update = function update(request, callback) {
          return this.rpcCall(
            update,
            $root.d1.storage.UpdateRequest,
            $root.d1.storage.UpdateResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'Update' },
      );

      /**
       * Store an object in encrypted form, replacing the data previously stored.
       * @function update
       * @memberof d1.storage.Storage
       * @instance
       * @param {d1.storage.IUpdateRequest} request UpdateRequest message or plain object
       * @returns {Promise<d1.storage.UpdateResponse>} Promise
       * @variation 2
       */

      /**
       * Callback as used by {@link d1.storage.Storage#delete_}.
       * @memberof d1.storage.Storage
       * @typedef DeleteCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.storage.DeleteResponse} [response] DeleteResponse
       */

      /**
       * Deletes a previously stored object.
       * @function delete
       * @memberof d1.storage.Storage
       * @instance
       * @param {d1.storage.IDeleteRequest} request DeleteRequest message or plain object
       * @param {d1.storage.Storage.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Storage.prototype['delete'] = function delete_(request, callback) {
          return this.rpcCall(
            delete_,
            $root.d1.storage.DeleteRequest,
            $root.d1.storage.DeleteResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'Delete' },
      );

      /**
       * Deletes a previously stored object.
       * @function delete
       * @memberof d1.storage.Storage
       * @instance
       * @param {d1.storage.IDeleteRequest} request DeleteRequest message or plain object
       * @returns {Promise<d1.storage.DeleteResponse>} Promise
       * @variation 2
       */

      return Storage;
    })();

    storage.StoreRequest = (function () {
      /**
       * Properties of a StoreRequest.
       * @memberof d1.storage
       * @interface IStoreRequest
       * @property {Uint8Array|null} [plaintext] Data to encrypt.
       * @property {Uint8Array|null} [associatedData] Associated data.
       */

      /**
       * Constructs a new StoreRequest.
       * @memberof d1.storage
       * @classdesc Represents a request to store an object.
       * @implements IStoreRequest
       * @constructor
       * @param {d1.storage.IStoreRequest=} [properties] Properties to set
       */
      function StoreRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Data to encrypt.
       * @member {Uint8Array} plaintext
       * @memberof d1.storage.StoreRequest
       * @instance
       */
      StoreRequest.prototype.plaintext = $util.newBuffer([]);

      /**
       * Associated data.
       * @member {Uint8Array} associatedData
       * @memberof d1.storage.StoreRequest
       * @instance
       */
      StoreRequest.prototype.associatedData = $util.newBuffer([]);

      /**
       * Creates a new StoreRequest instance using the specified properties.
       * @function create
       * @memberof d1.storage.StoreRequest
       * @static
       * @param {d1.storage.IStoreRequest=} [properties] Properties to set
       * @returns {d1.storage.StoreRequest} StoreRequest instance
       */
      StoreRequest.create = function create(properties) {
        return new StoreRequest(properties);
      };

      /**
       * Encodes the specified StoreRequest message. Does not implicitly {@link d1.storage.StoreRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.storage.StoreRequest
       * @static
       * @param {d1.storage.IStoreRequest} message StoreRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      StoreRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.plaintext != null && Object.hasOwnProperty.call(message, 'plaintext'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.plaintext);
        if (message.associatedData != null && Object.hasOwnProperty.call(message, 'associatedData'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.associatedData);
        return writer;
      };

      /**
       * Encodes the specified StoreRequest message, length delimited. Does not implicitly {@link d1.storage.StoreRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.storage.StoreRequest
       * @static
       * @param {d1.storage.IStoreRequest} message StoreRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      StoreRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a StoreRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.storage.StoreRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.storage.StoreRequest} StoreRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      StoreRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.storage.StoreRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.plaintext = reader.bytes();
              break;
            }
            case 2: {
              message.associatedData = reader.bytes();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a StoreRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.storage.StoreRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.storage.StoreRequest} StoreRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      StoreRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a StoreRequest message.
       * @function verify
       * @memberof d1.storage.StoreRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      StoreRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.plaintext != null && message.hasOwnProperty('plaintext'))
          if (
            !((message.plaintext && typeof message.plaintext.length === 'number') || $util.isString(message.plaintext))
          )
            return 'plaintext: buffer expected';
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          if (
            !(
              (message.associatedData && typeof message.associatedData.length === 'number') ||
              $util.isString(message.associatedData)
            )
          )
            return 'associatedData: buffer expected';
        return null;
      };

      /**
       * Creates a StoreRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.storage.StoreRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.storage.StoreRequest} StoreRequest
       */
      StoreRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.storage.StoreRequest) return object;
        var message = new $root.d1.storage.StoreRequest();
        if (object.plaintext != null)
          if (typeof object.plaintext === 'string')
            $util.base64.decode(
              object.plaintext,
              (message.plaintext = $util.newBuffer($util.base64.length(object.plaintext))),
              0,
            );
          else if (object.plaintext.length >= 0) message.plaintext = object.plaintext;
        if (object.associatedData != null)
          if (typeof object.associatedData === 'string')
            $util.base64.decode(
              object.associatedData,
              (message.associatedData = $util.newBuffer($util.base64.length(object.associatedData))),
              0,
            );
          else if (object.associatedData.length >= 0) message.associatedData = object.associatedData;
        return message;
      };

      /**
       * Creates a plain object from a StoreRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.storage.StoreRequest
       * @static
       * @param {d1.storage.StoreRequest} message StoreRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      StoreRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          if (options.bytes === String) object.plaintext = '';
          else {
            object.plaintext = [];
            if (options.bytes !== Array) object.plaintext = $util.newBuffer(object.plaintext);
          }
          if (options.bytes === String) object.associatedData = '';
          else {
            object.associatedData = [];
            if (options.bytes !== Array) object.associatedData = $util.newBuffer(object.associatedData);
          }
        }
        if (message.plaintext != null && message.hasOwnProperty('plaintext'))
          object.plaintext =
            options.bytes === String
              ? $util.base64.encode(message.plaintext, 0, message.plaintext.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.plaintext)
              : message.plaintext;
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          object.associatedData =
            options.bytes === String
              ? $util.base64.encode(message.associatedData, 0, message.associatedData.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.associatedData)
              : message.associatedData;
        return object;
      };

      /**
       * Converts this StoreRequest to JSON.
       * @function toJSON
       * @memberof d1.storage.StoreRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      StoreRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for StoreRequest
       * @function getTypeUrl
       * @memberof d1.storage.StoreRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      StoreRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.storage.StoreRequest';
      };

      return StoreRequest;
    })();

    storage.StoreResponse = (function () {
      /**
       * Properties of a StoreResponse.
       * @memberof d1.storage
       * @interface IStoreResponse
       * @property {string|null} [objectId] The object ID to the stored data.
       */

      /**
       * Constructs a new StoreResponse.
       * @memberof d1.storage
       * @classdesc Represents a response to a store request.
       * @implements IStoreResponse
       * @constructor
       * @param {d1.storage.IStoreResponse=} [properties] Properties to set
       */
      function StoreResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The object ID to the stored data.
       * @member {string} objectId
       * @memberof d1.storage.StoreResponse
       * @instance
       */
      StoreResponse.prototype.objectId = '';

      /**
       * Creates a new StoreResponse instance using the specified properties.
       * @function create
       * @memberof d1.storage.StoreResponse
       * @static
       * @param {d1.storage.IStoreResponse=} [properties] Properties to set
       * @returns {d1.storage.StoreResponse} StoreResponse instance
       */
      StoreResponse.create = function create(properties) {
        return new StoreResponse(properties);
      };

      /**
       * Encodes the specified StoreResponse message. Does not implicitly {@link d1.storage.StoreResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.storage.StoreResponse
       * @static
       * @param {d1.storage.IStoreResponse} message StoreResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      StoreResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.objectId != null && Object.hasOwnProperty.call(message, 'objectId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.objectId);
        return writer;
      };

      /**
       * Encodes the specified StoreResponse message, length delimited. Does not implicitly {@link d1.storage.StoreResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.storage.StoreResponse
       * @static
       * @param {d1.storage.IStoreResponse} message StoreResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      StoreResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a StoreResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.storage.StoreResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.storage.StoreResponse} StoreResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      StoreResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.storage.StoreResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.objectId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a StoreResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.storage.StoreResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.storage.StoreResponse} StoreResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      StoreResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a StoreResponse message.
       * @function verify
       * @memberof d1.storage.StoreResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      StoreResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.objectId != null && message.hasOwnProperty('objectId'))
          if (!$util.isString(message.objectId)) return 'objectId: string expected';
        return null;
      };

      /**
       * Creates a StoreResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.storage.StoreResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.storage.StoreResponse} StoreResponse
       */
      StoreResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.storage.StoreResponse) return object;
        var message = new $root.d1.storage.StoreResponse();
        if (object.objectId != null) message.objectId = String(object.objectId);
        return message;
      };

      /**
       * Creates a plain object from a StoreResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.storage.StoreResponse
       * @static
       * @param {d1.storage.StoreResponse} message StoreResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      StoreResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.objectId = '';
        if (message.objectId != null && message.hasOwnProperty('objectId')) object.objectId = message.objectId;
        return object;
      };

      /**
       * Converts this StoreResponse to JSON.
       * @function toJSON
       * @memberof d1.storage.StoreResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      StoreResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for StoreResponse
       * @function getTypeUrl
       * @memberof d1.storage.StoreResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      StoreResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.storage.StoreResponse';
      };

      return StoreResponse;
    })();

    storage.RetrieveRequest = (function () {
      /**
       * Properties of a RetrieveRequest.
       * @memberof d1.storage
       * @interface IRetrieveRequest
       * @property {string|null} [objectId] The object ID to retrieve.
       */

      /**
       * Constructs a new RetrieveRequest.
       * @memberof d1.storage
       * @classdesc Represents a request to retrieve an object.
       * @implements IRetrieveRequest
       * @constructor
       * @param {d1.storage.IRetrieveRequest=} [properties] Properties to set
       */
      function RetrieveRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The object ID to retrieve.
       * @member {string} objectId
       * @memberof d1.storage.RetrieveRequest
       * @instance
       */
      RetrieveRequest.prototype.objectId = '';

      /**
       * Creates a new RetrieveRequest instance using the specified properties.
       * @function create
       * @memberof d1.storage.RetrieveRequest
       * @static
       * @param {d1.storage.IRetrieveRequest=} [properties] Properties to set
       * @returns {d1.storage.RetrieveRequest} RetrieveRequest instance
       */
      RetrieveRequest.create = function create(properties) {
        return new RetrieveRequest(properties);
      };

      /**
       * Encodes the specified RetrieveRequest message. Does not implicitly {@link d1.storage.RetrieveRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.storage.RetrieveRequest
       * @static
       * @param {d1.storage.IRetrieveRequest} message RetrieveRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RetrieveRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.objectId != null && Object.hasOwnProperty.call(message, 'objectId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.objectId);
        return writer;
      };

      /**
       * Encodes the specified RetrieveRequest message, length delimited. Does not implicitly {@link d1.storage.RetrieveRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.storage.RetrieveRequest
       * @static
       * @param {d1.storage.IRetrieveRequest} message RetrieveRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RetrieveRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a RetrieveRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.storage.RetrieveRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.storage.RetrieveRequest} RetrieveRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RetrieveRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.storage.RetrieveRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.objectId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a RetrieveRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.storage.RetrieveRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.storage.RetrieveRequest} RetrieveRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RetrieveRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a RetrieveRequest message.
       * @function verify
       * @memberof d1.storage.RetrieveRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      RetrieveRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.objectId != null && message.hasOwnProperty('objectId'))
          if (!$util.isString(message.objectId)) return 'objectId: string expected';
        return null;
      };

      /**
       * Creates a RetrieveRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.storage.RetrieveRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.storage.RetrieveRequest} RetrieveRequest
       */
      RetrieveRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.storage.RetrieveRequest) return object;
        var message = new $root.d1.storage.RetrieveRequest();
        if (object.objectId != null) message.objectId = String(object.objectId);
        return message;
      };

      /**
       * Creates a plain object from a RetrieveRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.storage.RetrieveRequest
       * @static
       * @param {d1.storage.RetrieveRequest} message RetrieveRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      RetrieveRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.objectId = '';
        if (message.objectId != null && message.hasOwnProperty('objectId')) object.objectId = message.objectId;
        return object;
      };

      /**
       * Converts this RetrieveRequest to JSON.
       * @function toJSON
       * @memberof d1.storage.RetrieveRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      RetrieveRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for RetrieveRequest
       * @function getTypeUrl
       * @memberof d1.storage.RetrieveRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      RetrieveRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.storage.RetrieveRequest';
      };

      return RetrieveRequest;
    })();

    storage.RetrieveResponse = (function () {
      /**
       * Properties of a RetrieveResponse.
       * @memberof d1.storage
       * @interface IRetrieveResponse
       * @property {Uint8Array|null} [plaintext] The decrypted data.
       * @property {Uint8Array|null} [associatedData] Associated data.
       */

      /**
       * Constructs a new RetrieveResponse.
       * @memberof d1.storage
       * @classdesc Represents a response to a retrieve request.
       * @implements IRetrieveResponse
       * @constructor
       * @param {d1.storage.IRetrieveResponse=} [properties] Properties to set
       */
      function RetrieveResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The decrypted data.
       * @member {Uint8Array} plaintext
       * @memberof d1.storage.RetrieveResponse
       * @instance
       */
      RetrieveResponse.prototype.plaintext = $util.newBuffer([]);

      /**
       * Associated data.
       * @member {Uint8Array} associatedData
       * @memberof d1.storage.RetrieveResponse
       * @instance
       */
      RetrieveResponse.prototype.associatedData = $util.newBuffer([]);

      /**
       * Creates a new RetrieveResponse instance using the specified properties.
       * @function create
       * @memberof d1.storage.RetrieveResponse
       * @static
       * @param {d1.storage.IRetrieveResponse=} [properties] Properties to set
       * @returns {d1.storage.RetrieveResponse} RetrieveResponse instance
       */
      RetrieveResponse.create = function create(properties) {
        return new RetrieveResponse(properties);
      };

      /**
       * Encodes the specified RetrieveResponse message. Does not implicitly {@link d1.storage.RetrieveResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.storage.RetrieveResponse
       * @static
       * @param {d1.storage.IRetrieveResponse} message RetrieveResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RetrieveResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.plaintext != null && Object.hasOwnProperty.call(message, 'plaintext'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.plaintext);
        if (message.associatedData != null && Object.hasOwnProperty.call(message, 'associatedData'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.associatedData);
        return writer;
      };

      /**
       * Encodes the specified RetrieveResponse message, length delimited. Does not implicitly {@link d1.storage.RetrieveResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.storage.RetrieveResponse
       * @static
       * @param {d1.storage.IRetrieveResponse} message RetrieveResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RetrieveResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a RetrieveResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.storage.RetrieveResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.storage.RetrieveResponse} RetrieveResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RetrieveResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.storage.RetrieveResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.plaintext = reader.bytes();
              break;
            }
            case 2: {
              message.associatedData = reader.bytes();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a RetrieveResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.storage.RetrieveResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.storage.RetrieveResponse} RetrieveResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RetrieveResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a RetrieveResponse message.
       * @function verify
       * @memberof d1.storage.RetrieveResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      RetrieveResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.plaintext != null && message.hasOwnProperty('plaintext'))
          if (
            !((message.plaintext && typeof message.plaintext.length === 'number') || $util.isString(message.plaintext))
          )
            return 'plaintext: buffer expected';
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          if (
            !(
              (message.associatedData && typeof message.associatedData.length === 'number') ||
              $util.isString(message.associatedData)
            )
          )
            return 'associatedData: buffer expected';
        return null;
      };

      /**
       * Creates a RetrieveResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.storage.RetrieveResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.storage.RetrieveResponse} RetrieveResponse
       */
      RetrieveResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.storage.RetrieveResponse) return object;
        var message = new $root.d1.storage.RetrieveResponse();
        if (object.plaintext != null)
          if (typeof object.plaintext === 'string')
            $util.base64.decode(
              object.plaintext,
              (message.plaintext = $util.newBuffer($util.base64.length(object.plaintext))),
              0,
            );
          else if (object.plaintext.length >= 0) message.plaintext = object.plaintext;
        if (object.associatedData != null)
          if (typeof object.associatedData === 'string')
            $util.base64.decode(
              object.associatedData,
              (message.associatedData = $util.newBuffer($util.base64.length(object.associatedData))),
              0,
            );
          else if (object.associatedData.length >= 0) message.associatedData = object.associatedData;
        return message;
      };

      /**
       * Creates a plain object from a RetrieveResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.storage.RetrieveResponse
       * @static
       * @param {d1.storage.RetrieveResponse} message RetrieveResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      RetrieveResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          if (options.bytes === String) object.plaintext = '';
          else {
            object.plaintext = [];
            if (options.bytes !== Array) object.plaintext = $util.newBuffer(object.plaintext);
          }
          if (options.bytes === String) object.associatedData = '';
          else {
            object.associatedData = [];
            if (options.bytes !== Array) object.associatedData = $util.newBuffer(object.associatedData);
          }
        }
        if (message.plaintext != null && message.hasOwnProperty('plaintext'))
          object.plaintext =
            options.bytes === String
              ? $util.base64.encode(message.plaintext, 0, message.plaintext.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.plaintext)
              : message.plaintext;
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          object.associatedData =
            options.bytes === String
              ? $util.base64.encode(message.associatedData, 0, message.associatedData.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.associatedData)
              : message.associatedData;
        return object;
      };

      /**
       * Converts this RetrieveResponse to JSON.
       * @function toJSON
       * @memberof d1.storage.RetrieveResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      RetrieveResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for RetrieveResponse
       * @function getTypeUrl
       * @memberof d1.storage.RetrieveResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      RetrieveResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.storage.RetrieveResponse';
      };

      return RetrieveResponse;
    })();

    storage.UpdateRequest = (function () {
      /**
       * Properties of an UpdateRequest.
       * @memberof d1.storage
       * @interface IUpdateRequest
       * @property {Uint8Array|null} [plaintext] The data to encrypt.
       * @property {Uint8Array|null} [associatedData] Associated data.
       * @property {string|null} [objectId] The ID of the object to update.
       */

      /**
       * Constructs a new UpdateRequest.
       * @memberof d1.storage
       * @classdesc Represents a request to update an object.
       * @implements IUpdateRequest
       * @constructor
       * @param {d1.storage.IUpdateRequest=} [properties] Properties to set
       */
      function UpdateRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The data to encrypt.
       * @member {Uint8Array} plaintext
       * @memberof d1.storage.UpdateRequest
       * @instance
       */
      UpdateRequest.prototype.plaintext = $util.newBuffer([]);

      /**
       * Associated data.
       * @member {Uint8Array} associatedData
       * @memberof d1.storage.UpdateRequest
       * @instance
       */
      UpdateRequest.prototype.associatedData = $util.newBuffer([]);

      /**
       * The ID of the object to update.
       * @member {string} objectId
       * @memberof d1.storage.UpdateRequest
       * @instance
       */
      UpdateRequest.prototype.objectId = '';

      /**
       * Creates a new UpdateRequest instance using the specified properties.
       * @function create
       * @memberof d1.storage.UpdateRequest
       * @static
       * @param {d1.storage.IUpdateRequest=} [properties] Properties to set
       * @returns {d1.storage.UpdateRequest} UpdateRequest instance
       */
      UpdateRequest.create = function create(properties) {
        return new UpdateRequest(properties);
      };

      /**
       * Encodes the specified UpdateRequest message. Does not implicitly {@link d1.storage.UpdateRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.storage.UpdateRequest
       * @static
       * @param {d1.storage.IUpdateRequest} message UpdateRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      UpdateRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.plaintext != null && Object.hasOwnProperty.call(message, 'plaintext'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).bytes(message.plaintext);
        if (message.associatedData != null && Object.hasOwnProperty.call(message, 'associatedData'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.associatedData);
        if (message.objectId != null && Object.hasOwnProperty.call(message, 'objectId'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.objectId);
        return writer;
      };

      /**
       * Encodes the specified UpdateRequest message, length delimited. Does not implicitly {@link d1.storage.UpdateRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.storage.UpdateRequest
       * @static
       * @param {d1.storage.IUpdateRequest} message UpdateRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      UpdateRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an UpdateRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.storage.UpdateRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.storage.UpdateRequest} UpdateRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      UpdateRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.storage.UpdateRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.plaintext = reader.bytes();
              break;
            }
            case 2: {
              message.associatedData = reader.bytes();
              break;
            }
            case 3: {
              message.objectId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an UpdateRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.storage.UpdateRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.storage.UpdateRequest} UpdateRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      UpdateRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an UpdateRequest message.
       * @function verify
       * @memberof d1.storage.UpdateRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      UpdateRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.plaintext != null && message.hasOwnProperty('plaintext'))
          if (
            !((message.plaintext && typeof message.plaintext.length === 'number') || $util.isString(message.plaintext))
          )
            return 'plaintext: buffer expected';
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          if (
            !(
              (message.associatedData && typeof message.associatedData.length === 'number') ||
              $util.isString(message.associatedData)
            )
          )
            return 'associatedData: buffer expected';
        if (message.objectId != null && message.hasOwnProperty('objectId'))
          if (!$util.isString(message.objectId)) return 'objectId: string expected';
        return null;
      };

      /**
       * Creates an UpdateRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.storage.UpdateRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.storage.UpdateRequest} UpdateRequest
       */
      UpdateRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.storage.UpdateRequest) return object;
        var message = new $root.d1.storage.UpdateRequest();
        if (object.plaintext != null)
          if (typeof object.plaintext === 'string')
            $util.base64.decode(
              object.plaintext,
              (message.plaintext = $util.newBuffer($util.base64.length(object.plaintext))),
              0,
            );
          else if (object.plaintext.length >= 0) message.plaintext = object.plaintext;
        if (object.associatedData != null)
          if (typeof object.associatedData === 'string')
            $util.base64.decode(
              object.associatedData,
              (message.associatedData = $util.newBuffer($util.base64.length(object.associatedData))),
              0,
            );
          else if (object.associatedData.length >= 0) message.associatedData = object.associatedData;
        if (object.objectId != null) message.objectId = String(object.objectId);
        return message;
      };

      /**
       * Creates a plain object from an UpdateRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.storage.UpdateRequest
       * @static
       * @param {d1.storage.UpdateRequest} message UpdateRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      UpdateRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          if (options.bytes === String) object.plaintext = '';
          else {
            object.plaintext = [];
            if (options.bytes !== Array) object.plaintext = $util.newBuffer(object.plaintext);
          }
          if (options.bytes === String) object.associatedData = '';
          else {
            object.associatedData = [];
            if (options.bytes !== Array) object.associatedData = $util.newBuffer(object.associatedData);
          }
          object.objectId = '';
        }
        if (message.plaintext != null && message.hasOwnProperty('plaintext'))
          object.plaintext =
            options.bytes === String
              ? $util.base64.encode(message.plaintext, 0, message.plaintext.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.plaintext)
              : message.plaintext;
        if (message.associatedData != null && message.hasOwnProperty('associatedData'))
          object.associatedData =
            options.bytes === String
              ? $util.base64.encode(message.associatedData, 0, message.associatedData.length)
              : options.bytes === Array
              ? Array.prototype.slice.call(message.associatedData)
              : message.associatedData;
        if (message.objectId != null && message.hasOwnProperty('objectId')) object.objectId = message.objectId;
        return object;
      };

      /**
       * Converts this UpdateRequest to JSON.
       * @function toJSON
       * @memberof d1.storage.UpdateRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      UpdateRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for UpdateRequest
       * @function getTypeUrl
       * @memberof d1.storage.UpdateRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      UpdateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.storage.UpdateRequest';
      };

      return UpdateRequest;
    })();

    storage.UpdateResponse = (function () {
      /**
       * Properties of an UpdateResponse.
       * @memberof d1.storage
       * @interface IUpdateResponse
       */

      /**
       * Constructs a new UpdateResponse.
       * @memberof d1.storage
       * @classdesc Represents a response to an update request.
       * @implements IUpdateResponse
       * @constructor
       * @param {d1.storage.IUpdateResponse=} [properties] Properties to set
       */
      function UpdateResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new UpdateResponse instance using the specified properties.
       * @function create
       * @memberof d1.storage.UpdateResponse
       * @static
       * @param {d1.storage.IUpdateResponse=} [properties] Properties to set
       * @returns {d1.storage.UpdateResponse} UpdateResponse instance
       */
      UpdateResponse.create = function create(properties) {
        return new UpdateResponse(properties);
      };

      /**
       * Encodes the specified UpdateResponse message. Does not implicitly {@link d1.storage.UpdateResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.storage.UpdateResponse
       * @static
       * @param {d1.storage.IUpdateResponse} message UpdateResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      UpdateResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified UpdateResponse message, length delimited. Does not implicitly {@link d1.storage.UpdateResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.storage.UpdateResponse
       * @static
       * @param {d1.storage.IUpdateResponse} message UpdateResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      UpdateResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an UpdateResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.storage.UpdateResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.storage.UpdateResponse} UpdateResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      UpdateResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.storage.UpdateResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an UpdateResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.storage.UpdateResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.storage.UpdateResponse} UpdateResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      UpdateResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an UpdateResponse message.
       * @function verify
       * @memberof d1.storage.UpdateResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      UpdateResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates an UpdateResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.storage.UpdateResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.storage.UpdateResponse} UpdateResponse
       */
      UpdateResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.storage.UpdateResponse) return object;
        return new $root.d1.storage.UpdateResponse();
      };

      /**
       * Creates a plain object from an UpdateResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.storage.UpdateResponse
       * @static
       * @param {d1.storage.UpdateResponse} message UpdateResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      UpdateResponse.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this UpdateResponse to JSON.
       * @function toJSON
       * @memberof d1.storage.UpdateResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      UpdateResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for UpdateResponse
       * @function getTypeUrl
       * @memberof d1.storage.UpdateResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      UpdateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.storage.UpdateResponse';
      };

      return UpdateResponse;
    })();

    storage.DeleteRequest = (function () {
      /**
       * Properties of a DeleteRequest.
       * @memberof d1.storage
       * @interface IDeleteRequest
       * @property {string|null} [objectId] The ID of the object to delete.
       */

      /**
       * Constructs a new DeleteRequest.
       * @memberof d1.storage
       * @classdesc Represents a request to delete an object.
       * @implements IDeleteRequest
       * @constructor
       * @param {d1.storage.IDeleteRequest=} [properties] Properties to set
       */
      function DeleteRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The ID of the object to delete.
       * @member {string} objectId
       * @memberof d1.storage.DeleteRequest
       * @instance
       */
      DeleteRequest.prototype.objectId = '';

      /**
       * Creates a new DeleteRequest instance using the specified properties.
       * @function create
       * @memberof d1.storage.DeleteRequest
       * @static
       * @param {d1.storage.IDeleteRequest=} [properties] Properties to set
       * @returns {d1.storage.DeleteRequest} DeleteRequest instance
       */
      DeleteRequest.create = function create(properties) {
        return new DeleteRequest(properties);
      };

      /**
       * Encodes the specified DeleteRequest message. Does not implicitly {@link d1.storage.DeleteRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.storage.DeleteRequest
       * @static
       * @param {d1.storage.IDeleteRequest} message DeleteRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DeleteRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.objectId != null && Object.hasOwnProperty.call(message, 'objectId'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.objectId);
        return writer;
      };

      /**
       * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link d1.storage.DeleteRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.storage.DeleteRequest
       * @static
       * @param {d1.storage.IDeleteRequest} message DeleteRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DeleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DeleteRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.storage.DeleteRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.storage.DeleteRequest} DeleteRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DeleteRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.storage.DeleteRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.objectId = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.storage.DeleteRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.storage.DeleteRequest} DeleteRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DeleteRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DeleteRequest message.
       * @function verify
       * @memberof d1.storage.DeleteRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DeleteRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.objectId != null && message.hasOwnProperty('objectId'))
          if (!$util.isString(message.objectId)) return 'objectId: string expected';
        return null;
      };

      /**
       * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.storage.DeleteRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.storage.DeleteRequest} DeleteRequest
       */
      DeleteRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.storage.DeleteRequest) return object;
        var message = new $root.d1.storage.DeleteRequest();
        if (object.objectId != null) message.objectId = String(object.objectId);
        return message;
      };

      /**
       * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.storage.DeleteRequest
       * @static
       * @param {d1.storage.DeleteRequest} message DeleteRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DeleteRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.objectId = '';
        if (message.objectId != null && message.hasOwnProperty('objectId')) object.objectId = message.objectId;
        return object;
      };

      /**
       * Converts this DeleteRequest to JSON.
       * @function toJSON
       * @memberof d1.storage.DeleteRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DeleteRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for DeleteRequest
       * @function getTypeUrl
       * @memberof d1.storage.DeleteRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      DeleteRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.storage.DeleteRequest';
      };

      return DeleteRequest;
    })();

    storage.DeleteResponse = (function () {
      /**
       * Properties of a DeleteResponse.
       * @memberof d1.storage
       * @interface IDeleteResponse
       */

      /**
       * Constructs a new DeleteResponse.
       * @memberof d1.storage
       * @classdesc Represents a response to a delete request.
       * @implements IDeleteResponse
       * @constructor
       * @param {d1.storage.IDeleteResponse=} [properties] Properties to set
       */
      function DeleteResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new DeleteResponse instance using the specified properties.
       * @function create
       * @memberof d1.storage.DeleteResponse
       * @static
       * @param {d1.storage.IDeleteResponse=} [properties] Properties to set
       * @returns {d1.storage.DeleteResponse} DeleteResponse instance
       */
      DeleteResponse.create = function create(properties) {
        return new DeleteResponse(properties);
      };

      /**
       * Encodes the specified DeleteResponse message. Does not implicitly {@link d1.storage.DeleteResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.storage.DeleteResponse
       * @static
       * @param {d1.storage.IDeleteResponse} message DeleteResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DeleteResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link d1.storage.DeleteResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.storage.DeleteResponse
       * @static
       * @param {d1.storage.IDeleteResponse} message DeleteResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DeleteResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DeleteResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.storage.DeleteResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.storage.DeleteResponse} DeleteResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DeleteResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.storage.DeleteResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.storage.DeleteResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.storage.DeleteResponse} DeleteResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DeleteResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DeleteResponse message.
       * @function verify
       * @memberof d1.storage.DeleteResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DeleteResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.storage.DeleteResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.storage.DeleteResponse} DeleteResponse
       */
      DeleteResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.storage.DeleteResponse) return object;
        return new $root.d1.storage.DeleteResponse();
      };

      /**
       * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.storage.DeleteResponse
       * @static
       * @param {d1.storage.DeleteResponse} message DeleteResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DeleteResponse.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this DeleteResponse to JSON.
       * @function toJSON
       * @memberof d1.storage.DeleteResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DeleteResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for DeleteResponse
       * @function getTypeUrl
       * @memberof d1.storage.DeleteResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      DeleteResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.storage.DeleteResponse';
      };

      return DeleteResponse;
    })();

    return storage;
  })();

  d1.version = (function () {
    /**
     * Namespace version.
     * @memberof d1
     * @namespace
     */
    var version = {};

    version.Version = (function () {
      /**
       * Constructs a new Version service.
       * @memberof d1.version
       * @classdesc Service for getting version information.
       * @extends $protobuf.rpc.Service
       * @constructor
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       */
      function Version(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
      }

      (Version.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Version;

      /**
       * Creates new Version service using the specified rpc implementation.
       * @function create
       * @memberof d1.version.Version
       * @static
       * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
       * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
       * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
       * @returns {Version} RPC service. Useful where requests and/or responses are streamed.
       */
      Version.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
      };

      /**
       * Callback as used by {@link d1.version.Version#version}.
       * @memberof d1.version.Version
       * @typedef VersionCallback
       * @type {function}
       * @param {Error|null} error Error, if any
       * @param {d1.version.VersionResponse} [response] VersionResponse
       */

      /**
       * Returns the versions of the currently running service.
       * @function version
       * @memberof d1.version.Version
       * @instance
       * @param {d1.version.IVersionRequest} request VersionRequest message or plain object
       * @param {d1.version.Version.VersionCallback} callback Node-style callback called with the error, if any, and VersionResponse
       * @returns {undefined}
       * @variation 1
       */
      Object.defineProperty(
        (Version.prototype.version = function version(request, callback) {
          return this.rpcCall(
            version,
            $root.d1.version.VersionRequest,
            $root.d1.version.VersionResponse,
            request,
            callback,
          );
        }),
        'name',
        { value: 'Version' },
      );

      /**
       * Returns the versions of the currently running service.
       * @function version
       * @memberof d1.version.Version
       * @instance
       * @param {d1.version.IVersionRequest} request VersionRequest message or plain object
       * @returns {Promise<d1.version.VersionResponse>} Promise
       * @variation 2
       */

      return Version;
    })();

    version.VersionRequest = (function () {
      /**
       * Properties of a VersionRequest.
       * @memberof d1.version
       * @interface IVersionRequest
       */

      /**
       * Constructs a new VersionRequest.
       * @memberof d1.version
       * @classdesc Represents a request to get version information.
       * @implements IVersionRequest
       * @constructor
       * @param {d1.version.IVersionRequest=} [properties] Properties to set
       */
      function VersionRequest(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new VersionRequest instance using the specified properties.
       * @function create
       * @memberof d1.version.VersionRequest
       * @static
       * @param {d1.version.IVersionRequest=} [properties] Properties to set
       * @returns {d1.version.VersionRequest} VersionRequest instance
       */
      VersionRequest.create = function create(properties) {
        return new VersionRequest(properties);
      };

      /**
       * Encodes the specified VersionRequest message. Does not implicitly {@link d1.version.VersionRequest.verify|verify} messages.
       * @function encode
       * @memberof d1.version.VersionRequest
       * @static
       * @param {d1.version.IVersionRequest} message VersionRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      VersionRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified VersionRequest message, length delimited. Does not implicitly {@link d1.version.VersionRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.version.VersionRequest
       * @static
       * @param {d1.version.IVersionRequest} message VersionRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      VersionRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a VersionRequest message from the specified reader or buffer.
       * @function decode
       * @memberof d1.version.VersionRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.version.VersionRequest} VersionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      VersionRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.version.VersionRequest();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a VersionRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.version.VersionRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.version.VersionRequest} VersionRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      VersionRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a VersionRequest message.
       * @function verify
       * @memberof d1.version.VersionRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      VersionRequest.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        return null;
      };

      /**
       * Creates a VersionRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.version.VersionRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.version.VersionRequest} VersionRequest
       */
      VersionRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.version.VersionRequest) return object;
        return new $root.d1.version.VersionRequest();
      };

      /**
       * Creates a plain object from a VersionRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.version.VersionRequest
       * @static
       * @param {d1.version.VersionRequest} message VersionRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      VersionRequest.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this VersionRequest to JSON.
       * @function toJSON
       * @memberof d1.version.VersionRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      VersionRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for VersionRequest
       * @function getTypeUrl
       * @memberof d1.version.VersionRequest
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      VersionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.version.VersionRequest';
      };

      return VersionRequest;
    })();

    version.VersionResponse = (function () {
      /**
       * Properties of a VersionResponse.
       * @memberof d1.version
       * @interface IVersionResponse
       * @property {string|null} [commit] The Git commit of the running service.
       * @property {string|null} [tag] The version of the running service.
       */

      /**
       * Constructs a new VersionResponse.
       * @memberof d1.version
       * @classdesc Represents a response to get version information.
       * @implements IVersionResponse
       * @constructor
       * @param {d1.version.IVersionResponse=} [properties] Properties to set
       */
      function VersionResponse(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
      }

      /**
       * The Git commit of the running service.
       * @member {string} commit
       * @memberof d1.version.VersionResponse
       * @instance
       */
      VersionResponse.prototype.commit = '';

      /**
       * The version of the running service.
       * @member {string} tag
       * @memberof d1.version.VersionResponse
       * @instance
       */
      VersionResponse.prototype.tag = '';

      /**
       * Creates a new VersionResponse instance using the specified properties.
       * @function create
       * @memberof d1.version.VersionResponse
       * @static
       * @param {d1.version.IVersionResponse=} [properties] Properties to set
       * @returns {d1.version.VersionResponse} VersionResponse instance
       */
      VersionResponse.create = function create(properties) {
        return new VersionResponse(properties);
      };

      /**
       * Encodes the specified VersionResponse message. Does not implicitly {@link d1.version.VersionResponse.verify|verify} messages.
       * @function encode
       * @memberof d1.version.VersionResponse
       * @static
       * @param {d1.version.IVersionResponse} message VersionResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      VersionResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.commit != null && Object.hasOwnProperty.call(message, 'commit'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.commit);
        if (message.tag != null && Object.hasOwnProperty.call(message, 'tag'))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.tag);
        return writer;
      };

      /**
       * Encodes the specified VersionResponse message, length delimited. Does not implicitly {@link d1.version.VersionResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof d1.version.VersionResponse
       * @static
       * @param {d1.version.IVersionResponse} message VersionResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      VersionResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a VersionResponse message from the specified reader or buffer.
       * @function decode
       * @memberof d1.version.VersionResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {d1.version.VersionResponse} VersionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      VersionResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.d1.version.VersionResponse();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.commit = reader.string();
              break;
            }
            case 2: {
              message.tag = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a VersionResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof d1.version.VersionResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {d1.version.VersionResponse} VersionResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      VersionResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a VersionResponse message.
       * @function verify
       * @memberof d1.version.VersionResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      VersionResponse.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) return 'object expected';
        if (message.commit != null && message.hasOwnProperty('commit'))
          if (!$util.isString(message.commit)) return 'commit: string expected';
        if (message.tag != null && message.hasOwnProperty('tag'))
          if (!$util.isString(message.tag)) return 'tag: string expected';
        return null;
      };

      /**
       * Creates a VersionResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof d1.version.VersionResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {d1.version.VersionResponse} VersionResponse
       */
      VersionResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.d1.version.VersionResponse) return object;
        var message = new $root.d1.version.VersionResponse();
        if (object.commit != null) message.commit = String(object.commit);
        if (object.tag != null) message.tag = String(object.tag);
        return message;
      };

      /**
       * Creates a plain object from a VersionResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof d1.version.VersionResponse
       * @static
       * @param {d1.version.VersionResponse} message VersionResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      VersionResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.commit = '';
          object.tag = '';
        }
        if (message.commit != null && message.hasOwnProperty('commit')) object.commit = message.commit;
        if (message.tag != null && message.hasOwnProperty('tag')) object.tag = message.tag;
        return object;
      };

      /**
       * Converts this VersionResponse to JSON.
       * @function toJSON
       * @memberof d1.version.VersionResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      VersionResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for VersionResponse
       * @function getTypeUrl
       * @memberof d1.version.VersionResponse
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      VersionResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/d1.version.VersionResponse';
      };

      return VersionResponse;
    })();

    return version;
  })();

  return d1;
})();

module.exports = $root;
