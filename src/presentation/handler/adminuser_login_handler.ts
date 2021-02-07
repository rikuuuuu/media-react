import { createApiClient, IApiClient } from "../../infra/api/client";
import { IAdminUserRepository, TUpdateAdminUserParams } from '../../domain/repository/adminuser';
import { createAdminUserAPI } from "../../infra/api/service/adminuser_api";
import { IAdminUserActionCreator, AdminUserActionCreator, AdminUserActionType, IRequestLoginAction, IRequestCreateAction, IRequestUpdateAction } from '../action/adminuser_action';
import { call, put, take } from "redux-saga/effects";
// import { AdminUser } from '../../domain/model/adminuser';
import { 
    CreateAdminUserResponse,
    GetMeAdminUserResponse,
    // CreateAdminUserResponse, 
    LoginAdminUserResponse, 
    UpdateAdminUserResponse} from "../response/adminuser_response";
import { AdminUser } from "../../domain/model/adminuser";
import { push } from "connected-react-router";

const apiClient: IApiClient = createApiClient();
const adminUserRepository: IAdminUserRepository = createAdminUserAPI(apiClient);
const actionCreator: IAdminUserActionCreator = AdminUserActionCreator();

function* handleGetMe() {
    while (true) {
        try {
            // const action: IRequestGetMeAction = 
            yield take(AdminUserActionType.REQUEST_GETME_ADMINUSER);
            const user: AdminUser = yield call(GetMe);
            const res: GetMeAdminUserResponse = new GetMeAdminUserResponse();
            res.adminuser = user;
            yield put(actionCreator.callbackGetMeAction(true, res));
        } catch (error) {
            yield put(actionCreator.callbackGetMeAction(false));
        }
    }
}

function* handleLoginAdminUser() {
    while (true) {
        try {
            yield take(AdminUserActionType.REQUEST_LOGOUT_ADMINUSER);
            yield call(logoutAdminUser);
            yield put(actionCreator.callbackLogoutAction(true));
            yield put(push(`/`));
        } catch (error) {
            yield put(actionCreator.callbackLogoutAction(false));
        }
    }
}

function* handleLogoutAdminUser() {
    while (true) {
        try {
            const action: IRequestLoginAction = yield take(AdminUserActionType.REQUEST_LOGIN_ADMINUSER);
            yield call(loginAdminUser, action.item.email, action.item.password);
            const res: LoginAdminUserResponse = new LoginAdminUserResponse();
            yield put(actionCreator.callbackLoginAction(true, res));
            yield put(push(`/admin/update`));
        } catch (error) {
            yield put(actionCreator.callbackLoginAction(false));
        }
    }
}

function* handleCreateAdminUser() {
    while (true) {
        try {
            const action: IRequestCreateAction = yield take(AdminUserActionType.REQUEST_CREATE_ADMINUSER);
            yield call(createAdminUser, action.item.email, action.item.password);
            const res: CreateAdminUserResponse = new CreateAdminUserResponse();
            yield put(actionCreator.callbackCreateAction(true, res));
            yield put(push(`/admin/update`));
        } catch (error) {
            yield put(actionCreator.callbackCreateAction(false));
        }
    }
}

function* handleUpdateAdminUser() {
    while (true) {
        try {
            const action: IRequestUpdateAction = yield take(AdminUserActionType.REQUEST_UPDATE_ADMINUSER);
            const user = yield call(updateAdminUser, action.item);
            const res: UpdateAdminUserResponse = new UpdateAdminUserResponse();
            res.adminuser = user;
            yield put(actionCreator.callbackUpdateAction(true, res));
        } catch (error) {
            yield put(actionCreator.callbackUpdateAction(false));
        }
    }
}

const GetMe = (): Promise<AdminUser> => {
    return adminUserRepository.getMe();
}

const loginAdminUser = (email: string, password: string): Promise<void> => {
    return adminUserRepository.login(email, password);
}

const logoutAdminUser = (): Promise<void> => {
    return adminUserRepository.logout();
}

const createAdminUser = (email: string, password: string): Promise<AdminUser> => {
    return adminUserRepository.create(email, password);
}

const updateAdminUser = (updateAdminUserParams: TUpdateAdminUserParams): Promise<AdminUser> => {
    return adminUserRepository.update(updateAdminUserParams);
}

export {
    handleGetMe,
    handleLoginAdminUser,
    handleLogoutAdminUser,
    handleCreateAdminUser,
    handleUpdateAdminUser
}