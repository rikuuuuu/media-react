import * as $protobuf from "protobufjs";
/** Namespace api. */
export namespace api {

    /** Represents an AdminUserService */
    class AdminUserService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AdminUserService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AdminUserService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AdminUserService;

        /**
         * Calls GetMe.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and AdminUser
         */
        public getMe(request: common.IEmpty, callback: api.AdminUserService.GetMeCallback): void;

        /**
         * Calls GetMe.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getMe(request: common.IEmpty): Promise<entity.AdminUser>;

        /**
         * Calls GetAll.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and AdminUserList
         */
        public getAll(request: common.IEmpty, callback: api.AdminUserService.GetAllCallback): void;

        /**
         * Calls GetAll.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getAll(request: common.IEmpty): Promise<entity.AdminUserList>;

        /**
         * Calls Create.
         * @param request CreateAdminUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AdminUser
         */
        public create(request: entity.ICreateAdminUserRequest, callback: api.AdminUserService.CreateCallback): void;

        /**
         * Calls Create.
         * @param request CreateAdminUserRequest message or plain object
         * @returns Promise
         */
        public create(request: entity.ICreateAdminUserRequest): Promise<entity.AdminUser>;

        /**
         * Calls Update.
         * @param request UpdateAdminUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AdminUser
         */
        public update(request: entity.IUpdateAdminUserRequest, callback: api.AdminUserService.UpdateCallback): void;

        /**
         * Calls Update.
         * @param request UpdateAdminUserRequest message or plain object
         * @returns Promise
         */
        public update(request: entity.IUpdateAdminUserRequest): Promise<entity.AdminUser>;

        /**
         * Calls Delete.
         * @param request AdminUserID message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public delete(request: entity.IAdminUserID, callback: api.AdminUserService.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request AdminUserID message or plain object
         * @returns Promise
         */
        public delete(request: entity.IAdminUserID): Promise<common.Empty>;
    }

    namespace AdminUserService {

        /**
         * Callback as used by {@link api.AdminUserService#getMe}.
         * @param error Error, if any
         * @param [response] AdminUser
         */
        type GetMeCallback = (error: (Error|null), response?: entity.AdminUser) => void;

        /**
         * Callback as used by {@link api.AdminUserService#getAll}.
         * @param error Error, if any
         * @param [response] AdminUserList
         */
        type GetAllCallback = (error: (Error|null), response?: entity.AdminUserList) => void;

        /**
         * Callback as used by {@link api.AdminUserService#create}.
         * @param error Error, if any
         * @param [response] AdminUser
         */
        type CreateCallback = (error: (Error|null), response?: entity.AdminUser) => void;

        /**
         * Callback as used by {@link api.AdminUserService#update}.
         * @param error Error, if any
         * @param [response] AdminUser
         */
        type UpdateCallback = (error: (Error|null), response?: entity.AdminUser) => void;

        /**
         * Callback as used by {@link api.AdminUserService#delete_}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DeleteCallback = (error: (Error|null), response?: common.Empty) => void;
    }

    /** Represents an ArticleService */
    class ArticleService extends $protobuf.rpc.Service {

        /**
         * Constructs a new ArticleService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ArticleService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ArticleService;

        /**
         * Calls Get.
         * @param request ArticleID message or plain object
         * @param callback Node-style callback called with the error, if any, and Article
         */
        public get(request: entity.IArticleID, callback: api.ArticleService.GetCallback): void;

        /**
         * Calls Get.
         * @param request ArticleID message or plain object
         * @returns Promise
         */
        public get(request: entity.IArticleID): Promise<entity.Article>;

        /**
         * Calls GetAll.
         * @param request Pager message or plain object
         * @param callback Node-style callback called with the error, if any, and ArticleList
         */
        public getAll(request: common.IPager, callback: api.ArticleService.GetAllCallback): void;

        /**
         * Calls GetAll.
         * @param request Pager message or plain object
         * @returns Promise
         */
        public getAll(request: common.IPager): Promise<entity.ArticleList>;

        /**
         * Calls Create.
         * @param request CreateArticleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Article
         */
        public create(request: api.ICreateArticleRequest, callback: api.ArticleService.CreateCallback): void;

        /**
         * Calls Create.
         * @param request CreateArticleRequest message or plain object
         * @returns Promise
         */
        public create(request: api.ICreateArticleRequest): Promise<entity.Article>;

        /**
         * Calls Update.
         * @param request UpdateArticleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Article
         */
        public update(request: api.IUpdateArticleRequest, callback: api.ArticleService.UpdateCallback): void;

        /**
         * Calls Update.
         * @param request UpdateArticleRequest message or plain object
         * @returns Promise
         */
        public update(request: api.IUpdateArticleRequest): Promise<entity.Article>;

        /**
         * Calls Delete.
         * @param request ArticleID message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public delete(request: entity.IArticleID, callback: api.ArticleService.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request ArticleID message or plain object
         * @returns Promise
         */
        public delete(request: entity.IArticleID): Promise<common.Empty>;
    }

    namespace ArticleService {

        /**
         * Callback as used by {@link api.ArticleService#get}.
         * @param error Error, if any
         * @param [response] Article
         */
        type GetCallback = (error: (Error|null), response?: entity.Article) => void;

        /**
         * Callback as used by {@link api.ArticleService#getAll}.
         * @param error Error, if any
         * @param [response] ArticleList
         */
        type GetAllCallback = (error: (Error|null), response?: entity.ArticleList) => void;

        /**
         * Callback as used by {@link api.ArticleService#create}.
         * @param error Error, if any
         * @param [response] Article
         */
        type CreateCallback = (error: (Error|null), response?: entity.Article) => void;

        /**
         * Callback as used by {@link api.ArticleService#update}.
         * @param error Error, if any
         * @param [response] Article
         */
        type UpdateCallback = (error: (Error|null), response?: entity.Article) => void;

        /**
         * Callback as used by {@link api.ArticleService#delete_}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DeleteCallback = (error: (Error|null), response?: common.Empty) => void;
    }

    /** Properties of a CreateArticleRequest. */
    interface ICreateArticleRequest {

        /** CreateArticleRequest title */
        title?: (string|null);

        /** CreateArticleRequest description */
        description?: (string|null);

        /** CreateArticleRequest thumbnailURL */
        thumbnailURL?: (string|null);
    }

    /** Represents a CreateArticleRequest. */
    class CreateArticleRequest implements ICreateArticleRequest {

        /**
         * Constructs a new CreateArticleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.ICreateArticleRequest);

        /** CreateArticleRequest title. */
        public title: string;

        /** CreateArticleRequest description. */
        public description: string;

        /** CreateArticleRequest thumbnailURL. */
        public thumbnailURL: string;

        /**
         * Creates a new CreateArticleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateArticleRequest instance
         */
        public static create(properties?: api.ICreateArticleRequest): api.CreateArticleRequest;

        /**
         * Encodes the specified CreateArticleRequest message. Does not implicitly {@link api.CreateArticleRequest.verify|verify} messages.
         * @param message CreateArticleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.ICreateArticleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateArticleRequest message, length delimited. Does not implicitly {@link api.CreateArticleRequest.verify|verify} messages.
         * @param message CreateArticleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.ICreateArticleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateArticleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateArticleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.CreateArticleRequest;

        /**
         * Decodes a CreateArticleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateArticleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.CreateArticleRequest;

        /**
         * Verifies a CreateArticleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateArticleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateArticleRequest
         */
        public static fromObject(object: { [k: string]: any }): api.CreateArticleRequest;

        /**
         * Creates a plain object from a CreateArticleRequest message. Also converts values to other types if specified.
         * @param message CreateArticleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.CreateArticleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateArticleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateArticleRequest. */
    interface IUpdateArticleRequest {

        /** UpdateArticleRequest id */
        id?: (string|null);

        /** UpdateArticleRequest title */
        title?: (string|null);

        /** UpdateArticleRequest description */
        description?: (string|null);

        /** UpdateArticleRequest thumbnailURL */
        thumbnailURL?: (string|null);
    }

    /** Represents an UpdateArticleRequest. */
    class UpdateArticleRequest implements IUpdateArticleRequest {

        /**
         * Constructs a new UpdateArticleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: api.IUpdateArticleRequest);

        /** UpdateArticleRequest id. */
        public id: string;

        /** UpdateArticleRequest title. */
        public title: string;

        /** UpdateArticleRequest description. */
        public description: string;

        /** UpdateArticleRequest thumbnailURL. */
        public thumbnailURL: string;

        /**
         * Creates a new UpdateArticleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateArticleRequest instance
         */
        public static create(properties?: api.IUpdateArticleRequest): api.UpdateArticleRequest;

        /**
         * Encodes the specified UpdateArticleRequest message. Does not implicitly {@link api.UpdateArticleRequest.verify|verify} messages.
         * @param message UpdateArticleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: api.IUpdateArticleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateArticleRequest message, length delimited. Does not implicitly {@link api.UpdateArticleRequest.verify|verify} messages.
         * @param message UpdateArticleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: api.IUpdateArticleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateArticleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateArticleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): api.UpdateArticleRequest;

        /**
         * Decodes an UpdateArticleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateArticleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): api.UpdateArticleRequest;

        /**
         * Verifies an UpdateArticleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateArticleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateArticleRequest
         */
        public static fromObject(object: { [k: string]: any }): api.UpdateArticleRequest;

        /**
         * Creates a plain object from an UpdateArticleRequest message. Also converts values to other types if specified.
         * @param message UpdateArticleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: api.UpdateArticleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateArticleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: common.IEmpty): common.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link common.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): common.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Count. */
    interface ICount {

        /** Count count */
        count?: (number|Long|null);
    }

    /** Represents a Count. */
    class Count implements ICount {

        /**
         * Constructs a new Count.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ICount);

        /** Count count. */
        public count: (number|Long);

        /**
         * Creates a new Count instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Count instance
         */
        public static create(properties?: common.ICount): common.Count;

        /**
         * Encodes the specified Count message. Does not implicitly {@link common.Count.verify|verify} messages.
         * @param message Count message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Count message, length delimited. Does not implicitly {@link common.Count.verify|verify} messages.
         * @param message Count message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ICount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Count message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Count
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Count;

        /**
         * Decodes a Count message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Count
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Count;

        /**
         * Verifies a Count message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Count message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Count
         */
        public static fromObject(object: { [k: string]: any }): common.Count;

        /**
         * Creates a plain object from a Count message. Also converts values to other types if specified.
         * @param message Count
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Count, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Count to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pager. */
    interface IPager {

        /** Pager page */
        page?: (number|null);

        /** Pager offset */
        offset?: (number|null);
    }

    /** Represents a Pager. */
    class Pager implements IPager {

        /**
         * Constructs a new Pager.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPager);

        /** Pager page. */
        public page: number;

        /** Pager offset. */
        public offset: number;

        /**
         * Creates a new Pager instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pager instance
         */
        public static create(properties?: common.IPager): common.Pager;

        /**
         * Encodes the specified Pager message. Does not implicitly {@link common.Pager.verify|verify} messages.
         * @param message Pager message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPager, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pager message, length delimited. Does not implicitly {@link common.Pager.verify|verify} messages.
         * @param message Pager message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IPager, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pager message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Pager;

        /**
         * Decodes a Pager message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Pager;

        /**
         * Verifies a Pager message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pager message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pager
         */
        public static fromObject(object: { [k: string]: any }): common.Pager;

        /**
         * Creates a plain object from a Pager message. Also converts values to other types if specified.
         * @param message Pager
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Pager, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pager to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a YMD. */
    interface IYMD {

        /** YMD year */
        year?: (number|null);

        /** YMD month */
        month?: (number|null);

        /** YMD day */
        day?: (number|null);
    }

    /** Represents a YMD. */
    class YMD implements IYMD {

        /**
         * Constructs a new YMD.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IYMD);

        /** YMD year. */
        public year: number;

        /** YMD month. */
        public month: number;

        /** YMD day. */
        public day: number;

        /**
         * Creates a new YMD instance using the specified properties.
         * @param [properties] Properties to set
         * @returns YMD instance
         */
        public static create(properties?: common.IYMD): common.YMD;

        /**
         * Encodes the specified YMD message. Does not implicitly {@link common.YMD.verify|verify} messages.
         * @param message YMD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IYMD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified YMD message, length delimited. Does not implicitly {@link common.YMD.verify|verify} messages.
         * @param message YMD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IYMD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a YMD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns YMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.YMD;

        /**
         * Decodes a YMD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns YMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.YMD;

        /**
         * Verifies a YMD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a YMD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns YMD
         */
        public static fromObject(object: { [k: string]: any }): common.YMD;

        /**
         * Creates a plain object from a YMD message. Also converts values to other types if specified.
         * @param message YMD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.YMD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this YMD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace entity. */
export namespace entity {

    /** Properties of an AdminUser. */
    interface IAdminUser {

        /** AdminUser id */
        id?: (string|null);

        /** AdminUser name */
        name?: (string|null);

        /** AdminUser email */
        email?: (string|null);
    }

    /** Represents an AdminUser. */
    class AdminUser implements IAdminUser {

        /**
         * Constructs a new AdminUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.IAdminUser);

        /** AdminUser id. */
        public id: string;

        /** AdminUser name. */
        public name: string;

        /** AdminUser email. */
        public email: string;

        /**
         * Creates a new AdminUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdminUser instance
         */
        public static create(properties?: entity.IAdminUser): entity.AdminUser;

        /**
         * Encodes the specified AdminUser message. Does not implicitly {@link entity.AdminUser.verify|verify} messages.
         * @param message AdminUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.IAdminUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdminUser message, length delimited. Does not implicitly {@link entity.AdminUser.verify|verify} messages.
         * @param message AdminUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.IAdminUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdminUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.AdminUser;

        /**
         * Decodes an AdminUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdminUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.AdminUser;

        /**
         * Verifies an AdminUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdminUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminUser
         */
        public static fromObject(object: { [k: string]: any }): entity.AdminUser;

        /**
         * Creates a plain object from an AdminUser message. Also converts values to other types if specified.
         * @param message AdminUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.AdminUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminUserID. */
    interface IAdminUserID {

        /** AdminUserID id */
        id?: (string|null);
    }

    /** Represents an AdminUserID. */
    class AdminUserID implements IAdminUserID {

        /**
         * Constructs a new AdminUserID.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.IAdminUserID);

        /** AdminUserID id. */
        public id: string;

        /**
         * Creates a new AdminUserID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdminUserID instance
         */
        public static create(properties?: entity.IAdminUserID): entity.AdminUserID;

        /**
         * Encodes the specified AdminUserID message. Does not implicitly {@link entity.AdminUserID.verify|verify} messages.
         * @param message AdminUserID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.IAdminUserID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdminUserID message, length delimited. Does not implicitly {@link entity.AdminUserID.verify|verify} messages.
         * @param message AdminUserID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.IAdminUserID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdminUserID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.AdminUserID;

        /**
         * Decodes an AdminUserID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdminUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.AdminUserID;

        /**
         * Verifies an AdminUserID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdminUserID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminUserID
         */
        public static fromObject(object: { [k: string]: any }): entity.AdminUserID;

        /**
         * Creates a plain object from an AdminUserID message. Also converts values to other types if specified.
         * @param message AdminUserID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.AdminUserID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminUserID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateAdminUserRequest. */
    interface ICreateAdminUserRequest {

        /** CreateAdminUserRequest email */
        email?: (string|null);

        /** CreateAdminUserRequest password */
        password?: (string|null);
    }

    /** Represents a CreateAdminUserRequest. */
    class CreateAdminUserRequest implements ICreateAdminUserRequest {

        /**
         * Constructs a new CreateAdminUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.ICreateAdminUserRequest);

        /** CreateAdminUserRequest email. */
        public email: string;

        /** CreateAdminUserRequest password. */
        public password: string;

        /**
         * Creates a new CreateAdminUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateAdminUserRequest instance
         */
        public static create(properties?: entity.ICreateAdminUserRequest): entity.CreateAdminUserRequest;

        /**
         * Encodes the specified CreateAdminUserRequest message. Does not implicitly {@link entity.CreateAdminUserRequest.verify|verify} messages.
         * @param message CreateAdminUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.ICreateAdminUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateAdminUserRequest message, length delimited. Does not implicitly {@link entity.CreateAdminUserRequest.verify|verify} messages.
         * @param message CreateAdminUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.ICreateAdminUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateAdminUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateAdminUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.CreateAdminUserRequest;

        /**
         * Decodes a CreateAdminUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateAdminUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.CreateAdminUserRequest;

        /**
         * Verifies a CreateAdminUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateAdminUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateAdminUserRequest
         */
        public static fromObject(object: { [k: string]: any }): entity.CreateAdminUserRequest;

        /**
         * Creates a plain object from a CreateAdminUserRequest message. Also converts values to other types if specified.
         * @param message CreateAdminUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.CreateAdminUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateAdminUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateAdminUserRequest. */
    interface IUpdateAdminUserRequest {

        /** UpdateAdminUserRequest id */
        id?: (string|null);

        /** UpdateAdminUserRequest name */
        name?: (string|null);
    }

    /** Represents an UpdateAdminUserRequest. */
    class UpdateAdminUserRequest implements IUpdateAdminUserRequest {

        /**
         * Constructs a new UpdateAdminUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.IUpdateAdminUserRequest);

        /** UpdateAdminUserRequest id. */
        public id: string;

        /** UpdateAdminUserRequest name. */
        public name: string;

        /**
         * Creates a new UpdateAdminUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateAdminUserRequest instance
         */
        public static create(properties?: entity.IUpdateAdminUserRequest): entity.UpdateAdminUserRequest;

        /**
         * Encodes the specified UpdateAdminUserRequest message. Does not implicitly {@link entity.UpdateAdminUserRequest.verify|verify} messages.
         * @param message UpdateAdminUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.IUpdateAdminUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateAdminUserRequest message, length delimited. Does not implicitly {@link entity.UpdateAdminUserRequest.verify|verify} messages.
         * @param message UpdateAdminUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.IUpdateAdminUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateAdminUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateAdminUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.UpdateAdminUserRequest;

        /**
         * Decodes an UpdateAdminUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateAdminUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.UpdateAdminUserRequest;

        /**
         * Verifies an UpdateAdminUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateAdminUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateAdminUserRequest
         */
        public static fromObject(object: { [k: string]: any }): entity.UpdateAdminUserRequest;

        /**
         * Creates a plain object from an UpdateAdminUserRequest message. Also converts values to other types if specified.
         * @param message UpdateAdminUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.UpdateAdminUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateAdminUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccessToken. */
    interface IAccessToken {

        /** AccessToken token */
        token?: (string|null);
    }

    /** Represents an AccessToken. */
    class AccessToken implements IAccessToken {

        /**
         * Constructs a new AccessToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.IAccessToken);

        /** AccessToken token. */
        public token: string;

        /**
         * Creates a new AccessToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccessToken instance
         */
        public static create(properties?: entity.IAccessToken): entity.AccessToken;

        /**
         * Encodes the specified AccessToken message. Does not implicitly {@link entity.AccessToken.verify|verify} messages.
         * @param message AccessToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.IAccessToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccessToken message, length delimited. Does not implicitly {@link entity.AccessToken.verify|verify} messages.
         * @param message AccessToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.IAccessToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccessToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.AccessToken;

        /**
         * Decodes an AccessToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccessToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.AccessToken;

        /**
         * Verifies an AccessToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccessToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccessToken
         */
        public static fromObject(object: { [k: string]: any }): entity.AccessToken;

        /**
         * Creates a plain object from an AccessToken message. Also converts values to other types if specified.
         * @param message AccessToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.AccessToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccessToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminUserList. */
    interface IAdminUserList {

        /** AdminUserList items */
        items?: (entity.IAdminUser[]|null);
    }

    /** Represents an AdminUserList. */
    class AdminUserList implements IAdminUserList {

        /**
         * Constructs a new AdminUserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.IAdminUserList);

        /** AdminUserList items. */
        public items: entity.IAdminUser[];

        /**
         * Creates a new AdminUserList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdminUserList instance
         */
        public static create(properties?: entity.IAdminUserList): entity.AdminUserList;

        /**
         * Encodes the specified AdminUserList message. Does not implicitly {@link entity.AdminUserList.verify|verify} messages.
         * @param message AdminUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.IAdminUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdminUserList message, length delimited. Does not implicitly {@link entity.AdminUserList.verify|verify} messages.
         * @param message AdminUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.IAdminUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdminUserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.AdminUserList;

        /**
         * Decodes an AdminUserList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdminUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.AdminUserList;

        /**
         * Verifies an AdminUserList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdminUserList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminUserList
         */
        public static fromObject(object: { [k: string]: any }): entity.AdminUserList;

        /**
         * Creates a plain object from an AdminUserList message. Also converts values to other types if specified.
         * @param message AdminUserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.AdminUserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminUserList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArticleID. */
    interface IArticleID {

        /** ArticleID id */
        id?: (string|null);
    }

    /** Represents an ArticleID. */
    class ArticleID implements IArticleID {

        /**
         * Constructs a new ArticleID.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.IArticleID);

        /** ArticleID id. */
        public id: string;

        /**
         * Creates a new ArticleID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArticleID instance
         */
        public static create(properties?: entity.IArticleID): entity.ArticleID;

        /**
         * Encodes the specified ArticleID message. Does not implicitly {@link entity.ArticleID.verify|verify} messages.
         * @param message ArticleID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.IArticleID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArticleID message, length delimited. Does not implicitly {@link entity.ArticleID.verify|verify} messages.
         * @param message ArticleID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.IArticleID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArticleID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArticleID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.ArticleID;

        /**
         * Decodes an ArticleID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArticleID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.ArticleID;

        /**
         * Verifies an ArticleID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArticleID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArticleID
         */
        public static fromObject(object: { [k: string]: any }): entity.ArticleID;

        /**
         * Creates a plain object from an ArticleID message. Also converts values to other types if specified.
         * @param message ArticleID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.ArticleID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArticleID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArticleIDList. */
    interface IArticleIDList {

        /** ArticleIDList ids */
        ids?: (string[]|null);
    }

    /** Represents an ArticleIDList. */
    class ArticleIDList implements IArticleIDList {

        /**
         * Constructs a new ArticleIDList.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.IArticleIDList);

        /** ArticleIDList ids. */
        public ids: string[];

        /**
         * Creates a new ArticleIDList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArticleIDList instance
         */
        public static create(properties?: entity.IArticleIDList): entity.ArticleIDList;

        /**
         * Encodes the specified ArticleIDList message. Does not implicitly {@link entity.ArticleIDList.verify|verify} messages.
         * @param message ArticleIDList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.IArticleIDList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArticleIDList message, length delimited. Does not implicitly {@link entity.ArticleIDList.verify|verify} messages.
         * @param message ArticleIDList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.IArticleIDList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArticleIDList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArticleIDList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.ArticleIDList;

        /**
         * Decodes an ArticleIDList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArticleIDList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.ArticleIDList;

        /**
         * Verifies an ArticleIDList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArticleIDList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArticleIDList
         */
        public static fromObject(object: { [k: string]: any }): entity.ArticleIDList;

        /**
         * Creates a plain object from an ArticleIDList message. Also converts values to other types if specified.
         * @param message ArticleIDList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.ArticleIDList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArticleIDList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArticleIDWithPager. */
    interface IArticleIDWithPager {

        /** ArticleIDWithPager id */
        id?: (string|null);
    }

    /** Represents an ArticleIDWithPager. */
    class ArticleIDWithPager implements IArticleIDWithPager {

        /**
         * Constructs a new ArticleIDWithPager.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.IArticleIDWithPager);

        /** ArticleIDWithPager id. */
        public id: string;

        /**
         * Creates a new ArticleIDWithPager instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArticleIDWithPager instance
         */
        public static create(properties?: entity.IArticleIDWithPager): entity.ArticleIDWithPager;

        /**
         * Encodes the specified ArticleIDWithPager message. Does not implicitly {@link entity.ArticleIDWithPager.verify|verify} messages.
         * @param message ArticleIDWithPager message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.IArticleIDWithPager, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArticleIDWithPager message, length delimited. Does not implicitly {@link entity.ArticleIDWithPager.verify|verify} messages.
         * @param message ArticleIDWithPager message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.IArticleIDWithPager, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArticleIDWithPager message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArticleIDWithPager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.ArticleIDWithPager;

        /**
         * Decodes an ArticleIDWithPager message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArticleIDWithPager
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.ArticleIDWithPager;

        /**
         * Verifies an ArticleIDWithPager message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArticleIDWithPager message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArticleIDWithPager
         */
        public static fromObject(object: { [k: string]: any }): entity.ArticleIDWithPager;

        /**
         * Creates a plain object from an ArticleIDWithPager message. Also converts values to other types if specified.
         * @param message ArticleIDWithPager
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.ArticleIDWithPager, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArticleIDWithPager to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Article. */
    interface IArticle {

        /** Article id */
        id?: (string|null);

        /** Article userID */
        userID?: (string|null);

        /** Article title */
        title?: (string|null);

        /** Article description */
        description?: (string|null);

        /** Article createdAt */
        createdAt?: (string|null);

        /** Article thumbnailURL */
        thumbnailURL?: (string|null);
    }

    /** Represents an Article. */
    class Article implements IArticle {

        /**
         * Constructs a new Article.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.IArticle);

        /** Article id. */
        public id: string;

        /** Article userID. */
        public userID: string;

        /** Article title. */
        public title: string;

        /** Article description. */
        public description: string;

        /** Article createdAt. */
        public createdAt: string;

        /** Article thumbnailURL. */
        public thumbnailURL: string;

        /**
         * Creates a new Article instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Article instance
         */
        public static create(properties?: entity.IArticle): entity.Article;

        /**
         * Encodes the specified Article message. Does not implicitly {@link entity.Article.verify|verify} messages.
         * @param message Article message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.IArticle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Article message, length delimited. Does not implicitly {@link entity.Article.verify|verify} messages.
         * @param message Article message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.IArticle, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Article message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Article
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.Article;

        /**
         * Decodes an Article message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Article
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.Article;

        /**
         * Verifies an Article message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Article message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Article
         */
        public static fromObject(object: { [k: string]: any }): entity.Article;

        /**
         * Creates a plain object from an Article message. Also converts values to other types if specified.
         * @param message Article
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.Article, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Article to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ArticleList. */
    interface IArticleList {

        /** ArticleList items */
        items?: (entity.IArticle[]|null);
    }

    /** Represents an ArticleList. */
    class ArticleList implements IArticleList {

        /**
         * Constructs a new ArticleList.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.IArticleList);

        /** ArticleList items. */
        public items: entity.IArticle[];

        /**
         * Creates a new ArticleList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArticleList instance
         */
        public static create(properties?: entity.IArticleList): entity.ArticleList;

        /**
         * Encodes the specified ArticleList message. Does not implicitly {@link entity.ArticleList.verify|verify} messages.
         * @param message ArticleList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.IArticleList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArticleList message, length delimited. Does not implicitly {@link entity.ArticleList.verify|verify} messages.
         * @param message ArticleList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.IArticleList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArticleList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArticleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.ArticleList;

        /**
         * Decodes an ArticleList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArticleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.ArticleList;

        /**
         * Verifies an ArticleList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArticleList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArticleList
         */
        public static fromObject(object: { [k: string]: any }): entity.ArticleList;

        /**
         * Creates a plain object from an ArticleList message. Also converts values to other types if specified.
         * @param message ArticleList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.ArticleList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArticleList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchHighlight. */
    interface ISearchHighlight {

        /** SearchHighlight key */
        key?: (string|null);

        /** SearchHighlight val */
        val?: (string|null);

        /** SearchHighlight matchWord */
        matchWord?: (string|null);

        /** SearchHighlight linkId */
        linkId?: (string|null);
    }

    /** Represents a SearchHighlight. */
    class SearchHighlight implements ISearchHighlight {

        /**
         * Constructs a new SearchHighlight.
         * @param [properties] Properties to set
         */
        constructor(properties?: entity.ISearchHighlight);

        /** SearchHighlight key. */
        public key: string;

        /** SearchHighlight val. */
        public val: string;

        /** SearchHighlight matchWord. */
        public matchWord: string;

        /** SearchHighlight linkId. */
        public linkId: string;

        /**
         * Creates a new SearchHighlight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchHighlight instance
         */
        public static create(properties?: entity.ISearchHighlight): entity.SearchHighlight;

        /**
         * Encodes the specified SearchHighlight message. Does not implicitly {@link entity.SearchHighlight.verify|verify} messages.
         * @param message SearchHighlight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: entity.ISearchHighlight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchHighlight message, length delimited. Does not implicitly {@link entity.SearchHighlight.verify|verify} messages.
         * @param message SearchHighlight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: entity.ISearchHighlight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchHighlight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchHighlight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): entity.SearchHighlight;

        /**
         * Decodes a SearchHighlight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchHighlight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): entity.SearchHighlight;

        /**
         * Verifies a SearchHighlight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchHighlight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchHighlight
         */
        public static fromObject(object: { [k: string]: any }): entity.SearchHighlight;

        /**
         * Creates a plain object from a SearchHighlight message. Also converts values to other types if specified.
         * @param message SearchHighlight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: entity.SearchHighlight, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchHighlight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
