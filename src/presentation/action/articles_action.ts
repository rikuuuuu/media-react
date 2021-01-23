import {Action} from "redux";
import {CreateArticleRequest, DeleteArticleRequest, GetAllArticleRequest, GetArticleByIdRequest, UpdateArticleRequest} from '../request/article_request'
import {CreateArticleResponse, DeleteArticleResponse, GetAllArticleResponse, GetArticleByIdResponse, UpdateArticleResponse} from '../response/article_response'

export enum ArticleActionType {
    REQUEST_GET_ALL_ARTICLE = "REQUEST_GET_ALL_ARTICLE",
    CALLBACK_GET_ALL_ARTICLE = "CALLBACK_GET_ALL_ARTICLE",

    REQUEST_GET_ARTICLE = "REQUEST_GET_ARTICLE",
    CALLBACK_GET_ARTICLE = "CALLBACK_GET_ARTICLE",

    REQUEST_CREATE_ARTICLE = "REQUEST_CREATE_ARTICLE",
    CALLBACK_CREATE_ARTICLE = "CALLBACK_CREATE_ARTICLE",

    REQUEST_UPDATE_ARTICLE = "REQUEST_UPDATE_ARTICLE",
    CALLBACK_UPDATE_ARTICLE = "CALLBACK_UPDATE_ARTICLE",

    REQUEST_DELETE_ARTICLE = "REQUEST_DELETE_ARTICLE",
    CALLBACK_DELETE_ARTICLE = "CALLBACK_DELETE_ARTICLE",
}

export interface IRequestGetAllArticleAction extends Action {
    type: ArticleActionType.REQUEST_GET_ALL_ARTICLE;
    item: GetAllArticleRequest;
}

export interface ICallbackGetAllArticleAction extends Action {
    type: ArticleActionType.CALLBACK_GET_ALL_ARTICLE;
    isSuccess: boolean;
    item?: GetAllArticleResponse;
}

export interface IRequestGetArticleAction extends Action {
    type: ArticleActionType.REQUEST_GET_ARTICLE;
    item: GetArticleByIdRequest;
}

export interface ICallbackGetArticleAction extends Action {
    type: ArticleActionType.CALLBACK_GET_ARTICLE;
    isSuccess: boolean;
    item?: GetArticleByIdResponse;
}

export interface IRequestCreateArticleAction extends Action {
    type: ArticleActionType.REQUEST_CREATE_ARTICLE;
    item: CreateArticleRequest;
}

export interface ICallbackCreateArticleAction extends Action {
    type: ArticleActionType.CALLBACK_CREATE_ARTICLE;
    isSuccess: boolean;
    item?: CreateArticleResponse;
}

export interface IRequestUpdateArticleAction extends Action {
    type: ArticleActionType.REQUEST_UPDATE_ARTICLE;
    item: UpdateArticleRequest;
}

export interface ICallbackUpdateArticleAction extends Action {
    type: ArticleActionType.CALLBACK_UPDATE_ARTICLE;
    isSuccess: boolean;
    item?: UpdateArticleResponse;
}

export interface IRequestDeleteArticleAction extends Action {
    type: ArticleActionType.REQUEST_DELETE_ARTICLE;
    item: DeleteArticleRequest;
}

export interface ICallbackDeleteArticleAction extends Action {
    type: ArticleActionType.CALLBACK_DELETE_ARTICLE;
    isSuccess: boolean;
    item?: DeleteArticleResponse;
}

export type ArticleAction = 
    IRequestGetAllArticleAction | 
    ICallbackGetAllArticleAction |

    IRequestGetArticleAction |
    ICallbackGetArticleAction |

    IRequestCreateArticleAction |
    ICallbackCreateArticleAction |

    IRequestUpdateArticleAction |
    ICallbackUpdateArticleAction |

    IRequestDeleteArticleAction |
    ICallbackDeleteArticleAction;

export interface IArticleActionCreator {
    requestGetAllArticleAction(item: GetAllArticleRequest): IRequestGetAllArticleAction;

    callbackGetAllArticleAction(
        isSuccess: boolean,
        item?: GetAllArticleResponse,
    ): ICallbackGetAllArticleAction;

    requestGetArticleAction(item: GetArticleByIdRequest): IRequestGetArticleAction;

    callbackGetArticleAction(
        isSuccess: boolean,
        item?: GetArticleByIdResponse,
    ): ICallbackGetArticleAction;

    requestCreateArticleAction(item: CreateArticleRequest): IRequestCreateArticleAction;

    callbackCreateArticleAction(
        isSuccess: boolean,
        item?: CreateArticleResponse,
    ): ICallbackCreateArticleAction;

    requestUpdateArticleAction(item: UpdateArticleRequest): IRequestUpdateArticleAction;

    callbackUpdateArticleAction(
        isSuccess: boolean,
        item?: UpdateArticleResponse,
    ): ICallbackUpdateArticleAction;

    requestDeleteArticleAction(item: DeleteArticleRequest): IRequestDeleteArticleAction;

    callbackDeleteArticleAction(
        isSuccess: boolean,
        item?: DeleteArticleResponse,
    ): ICallbackDeleteArticleAction;
}

class ActionCreator implements IArticleActionCreator {

    public requestGetAllArticleAction = (item: GetAllArticleRequest): IRequestGetAllArticleAction => {
        return {
            type: ArticleActionType.REQUEST_GET_ALL_ARTICLE,
            item,
        }
    }

    public callbackGetAllArticleAction = (
        isSuccess: boolean,
        item?: GetAllArticleResponse
    ): ICallbackGetAllArticleAction => {
        return {
            type: ArticleActionType.CALLBACK_GET_ALL_ARTICLE,
            isSuccess,
            item,
        }
    }

    public requestGetArticleAction = (item: GetArticleByIdRequest): IRequestGetArticleAction => {
        return {
            type: ArticleActionType.REQUEST_GET_ARTICLE,
            item,
        }
    }

    public callbackGetArticleAction = (
        isSuccess: boolean,
        item?: GetArticleByIdResponse
    ): ICallbackGetArticleAction => {
        return {
            type: ArticleActionType.CALLBACK_GET_ARTICLE,
            isSuccess,
            item,
        }
    }

    public requestCreateArticleAction = (item: CreateArticleRequest): IRequestCreateArticleAction => {
        return {
            type: ArticleActionType.REQUEST_CREATE_ARTICLE,
            item,
        }
    }

    public callbackCreateArticleAction = (
        isSuccess: boolean,
        item?: CreateArticleResponse
    ): ICallbackCreateArticleAction => {
        return {
            type: ArticleActionType.CALLBACK_CREATE_ARTICLE,
            isSuccess,
            item,
        }
    }

    public requestUpdateArticleAction = (item: UpdateArticleRequest): IRequestUpdateArticleAction => {
        return {
            type: ArticleActionType.REQUEST_UPDATE_ARTICLE,
            item,
        }
    }

    public callbackUpdateArticleAction = (
        isSuccess: boolean,
        item?: UpdateArticleResponse
    ): ICallbackUpdateArticleAction => {
        return {
            type: ArticleActionType.CALLBACK_UPDATE_ARTICLE,
            isSuccess,
            item,
        }
    }

    public requestDeleteArticleAction = (item: DeleteArticleRequest): IRequestDeleteArticleAction => {
        return {
            type: ArticleActionType.REQUEST_DELETE_ARTICLE,
            item,
        }
    }

    public callbackDeleteArticleAction = (
        isSuccess: boolean,
        item?: DeleteArticleResponse
    ): ICallbackDeleteArticleAction => {
        return {
            type: ArticleActionType.CALLBACK_DELETE_ARTICLE,
            isSuccess,
            item,
        }
    }

}

export const ArticleActionCreator = (): IArticleActionCreator => {
    return new ActionCreator();
}