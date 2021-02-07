import { Action } from 'redux';
import { CreateAdminUserRequest, DeleteAdminUserRequest, GetAllAdminUserRequest, GetMeAdminUserRequest, LoginAdminUserRequest, UpdateAdminUserRequest } from '../request/adminuser_request';
import { CreateAdminUserResponse, DeleteAdminUserResponse, GetAllAdminUserResponse, GetMeAdminUserResponse, LoginAdminUserResponse, UpdateAdminUserResponse } from '../response/adminuser_response';

export enum AdminUserActionType {
    REQUEST_GETME_ADMINUSER= "AUTH_REQUEST_GETME_ADMINUSER",
    CALLBACK_GETME_ADMINUSER = "AUTH_CALLBACK_GETME_ADMINUSER",

    REQUEST_GETALL_ADMINUSER= "AUTH_REQUEST_GETALL_ADMINUSER",
    CALLBACK_GETALL_ADMINUSER = "AUTH_CALLBACK_GETALL_ADMINUSER",

    REQUEST_CREATE_ADMINUSER= "AUTH_REQUEST_CREATE_ADMINUSER",
    CALLBACK_CREATE_ADMINUSER = "AUTH_CALLBACK_CREATE_ADMINUSER",

    REQUEST_LOGIN_ADMINUSER= "AUTH_REQUEST_LOGIN_ADMINUSER",
    CALLBACK_LOGIN_ADMINUSER = "AUTH_CALLBACK_LOGIN_ADMINUSER",

    REQUEST_LOGOUT_ADMINUSER= "AUTH_REQUEST_LOGOUT_ADMINUSER",
    CALLBACK_LOGOUT_ADMINUSER = "AUTH_CALLBACK_LOGOUT_ADMINUSER",

    REQUEST_UPDATE_ADMINUSER= "AUTH_REQUEST_UPDATE_ADMINUSER",
    CALLBACK_UPDATE_ADMINUSER = "AUTH_CALLBACK_UPDATE_ADMINUSER",

    REQUEST_DELETE_ADMINUSER= "AUTH_REQUEST_DELETE_ADMINUSER",
    CALLBACK_DELETE_ADMINUSER = "AUTH_CALLBACK_DELETE_ADMINUSER",
}

export interface IRequestGetMeAction extends Action {
    type: AdminUserActionType.REQUEST_GETME_ADMINUSER;
    item: GetMeAdminUserRequest;

}
export interface ICallbackGetMeAction extends Action {
    type: AdminUserActionType.CALLBACK_GETME_ADMINUSER;
    isSuccess: boolean;
    item?: GetMeAdminUserResponse,
}

export interface IRequestGetAllAction extends Action {
    type: AdminUserActionType.REQUEST_GETALL_ADMINUSER;
    item: GetAllAdminUserRequest;

}
export interface ICallbackGetAllAction extends Action {
    type: AdminUserActionType.CALLBACK_GETALL_ADMINUSER;
    isSuccess: boolean;
    item?: GetAllAdminUserResponse,
}

export interface IRequestCreateAction extends Action {
    type: AdminUserActionType.REQUEST_CREATE_ADMINUSER;
    item: CreateAdminUserRequest;

}
export interface ICallbackCreateAction extends Action {
    type: AdminUserActionType.CALLBACK_CREATE_ADMINUSER;
    isSuccess: boolean;
    item?: CreateAdminUserResponse,
}

export interface IRequestLoginAction extends Action {
    type: AdminUserActionType.REQUEST_LOGIN_ADMINUSER;
    item: LoginAdminUserRequest;
}

export interface ICallbackLoginAction extends Action {
    type: AdminUserActionType.CALLBACK_LOGIN_ADMINUSER;
    isSuccess: boolean;
    item?: LoginAdminUserResponse,
}

export interface IRequestLogoutAction extends Action {
    type: AdminUserActionType.REQUEST_LOGOUT_ADMINUSER;
}

export interface ICallbackLogoutAction extends Action {
    type: AdminUserActionType.CALLBACK_LOGOUT_ADMINUSER;
    isSuccess: boolean;
}
export interface IRequestUpdateAction extends Action {
    type: AdminUserActionType.REQUEST_UPDATE_ADMINUSER;
    item: UpdateAdminUserRequest;

}
export interface ICallbackUpdateAction extends Action {
    type: AdminUserActionType.CALLBACK_UPDATE_ADMINUSER;
    isSuccess: boolean;
    item?: UpdateAdminUserResponse,
}

export interface IRequestDeleteAction extends Action {
    type: AdminUserActionType.REQUEST_DELETE_ADMINUSER;
    item: DeleteAdminUserRequest;

}
export interface ICallbackDeleteAction extends Action {
    type: AdminUserActionType.CALLBACK_DELETE_ADMINUSER;
    isSuccess: boolean;
    item?: DeleteAdminUserResponse,
}

export type AdminUserAction =
    IRequestGetMeAction |
    ICallbackGetMeAction |
    IRequestGetAllAction |
    ICallbackGetAllAction |
    IRequestCreateAction |
    ICallbackCreateAction |
    IRequestLoginAction |
    ICallbackLoginAction |
    IRequestLogoutAction |
    ICallbackLogoutAction |
    IRequestUpdateAction |
    ICallbackUpdateAction |
    IRequestDeleteAction |
    ICallbackDeleteAction

export interface IAdminUserActionCreator {
    requestGetMeAction(item: GetMeAdminUserRequest): IRequestGetMeAction;
    callbackGetMeAction(isSuccess: boolean, item?: GetMeAdminUserResponse): ICallbackGetMeAction;

    requestGetAllAction(item: GetAllAdminUserRequest): IRequestGetAllAction;
    callbackGetAllAction(isSuccess: boolean, item?: GetAllAdminUserResponse): ICallbackGetAllAction;

    requestCreateAction(item: CreateAdminUserRequest): IRequestCreateAction;
    callbackCreateAction(isSuccess: boolean, item?: CreateAdminUserResponse): ICallbackCreateAction;

    requestLoginAction(item: LoginAdminUserRequest): IRequestLoginAction;
    callbackLoginAction(isSuccess: boolean, item?: LoginAdminUserResponse): ICallbackLoginAction;

    requestLogoutAction(): IRequestLogoutAction;
    callbackLogoutAction(isSuccess: boolean): ICallbackLogoutAction;

    requestUpdateAction(item: UpdateAdminUserRequest): IRequestUpdateAction;
    callbackUpdateAction(isSuccess: boolean, item?: UpdateAdminUserResponse): ICallbackUpdateAction;

    requestDeleteAction(item: DeleteAdminUserRequest): IRequestDeleteAction;
    callbackDeleteAction(isSuccess: boolean, item?: DeleteAdminUserResponse): ICallbackDeleteAction;
}

class ActionCreater implements IAdminUserActionCreator {

    public requestGetMeAction = (
        item: GetMeAdminUserRequest,
    ): IRequestGetMeAction => {
        return {
            type: AdminUserActionType.REQUEST_GETME_ADMINUSER,
            item,
        };
    };
    
    public callbackGetMeAction = (
        isSuccess: boolean,
        item?: GetMeAdminUserResponse,
    ): ICallbackGetMeAction => {
        return {
            type: AdminUserActionType.CALLBACK_GETME_ADMINUSER,
            isSuccess,
            item,
        };
    };


    public requestGetAllAction = (
        item: GetAllAdminUserRequest,
    ): IRequestGetAllAction => {
        return {
            type: AdminUserActionType.REQUEST_GETALL_ADMINUSER,
            item,
        };
    };
    
    public callbackGetAllAction = (
        isSuccess: boolean,
        item?: GetAllAdminUserResponse,
    ): ICallbackGetAllAction => {
        return {
            type: AdminUserActionType.CALLBACK_GETALL_ADMINUSER,
            isSuccess,
            item,
        };
    };


    public requestCreateAction = (
        item: CreateAdminUserRequest,
    ): IRequestCreateAction => {
        return {
            type: AdminUserActionType.REQUEST_CREATE_ADMINUSER,
            item,
        };
    };
    
    public callbackCreateAction = (
        isSuccess: boolean,
        item?: CreateAdminUserResponse,
    ): ICallbackCreateAction => {
        return {
            type: AdminUserActionType.CALLBACK_CREATE_ADMINUSER,
            isSuccess,
            item,
        };
    };


    public requestLoginAction = (
        item: LoginAdminUserRequest,
    ): IRequestLoginAction => {
        return {
            type: AdminUserActionType.REQUEST_LOGIN_ADMINUSER,
            item,
        };
    };

    public callbackLoginAction = (
        isSuccess: boolean,
        item?: LoginAdminUserResponse,
    ): ICallbackLoginAction => {
        return {
            type: AdminUserActionType.CALLBACK_LOGIN_ADMINUSER,
            isSuccess,
            item,
        };
    };

    public requestLogoutAction = (): IRequestLogoutAction => {
        return {
            type: AdminUserActionType.REQUEST_LOGOUT_ADMINUSER
        };
    };

    public callbackLogoutAction = (
        isSuccess: boolean,
    ): ICallbackLogoutAction => {
        return {
            type: AdminUserActionType.CALLBACK_LOGOUT_ADMINUSER,
            isSuccess,
        };
    };


    public requestUpdateAction = (
        item: UpdateAdminUserRequest,
    ): IRequestUpdateAction => {
        return {
            type: AdminUserActionType.REQUEST_UPDATE_ADMINUSER,
            item,
        };
    };

    public callbackUpdateAction = (
        isSuccess: boolean,
        item?: UpdateAdminUserResponse,
    ): ICallbackUpdateAction => {
        return {
            type: AdminUserActionType.CALLBACK_UPDATE_ADMINUSER,
            isSuccess,
            item,
        };
    };


    public requestDeleteAction = (
        item: DeleteAdminUserRequest,
    ): IRequestDeleteAction => {
        return {
            type: AdminUserActionType.REQUEST_DELETE_ADMINUSER,
            item,
        };
    };

    public callbackDeleteAction = (
        isSuccess: boolean,
        item?: DeleteAdminUserResponse,
    ): ICallbackDeleteAction => {
        return {
            type: AdminUserActionType.CALLBACK_DELETE_ADMINUSER,
            isSuccess,
            item,
        };
    };
}

export const AdminUserActionCreator = (): IAdminUserActionCreator => {
    return new ActionCreater();
};