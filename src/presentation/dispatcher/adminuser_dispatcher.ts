import { Action } from 'redux';
import { 
    CreateAdminUserRequest, 
    DeleteAdminUserRequest, 
    GetAllAdminUserRequest, 
    GetMeAdminUserRequest, 
    LoginAdminUserRequest, 
    UpdateAdminUserRequest} from '../request/adminuser_request'
import { IAdminUserActionCreator } from '../action/adminuser_action';

interface IAdminUserDispatcher {
    getMe(item: GetMeAdminUserRequest): void;
    getAll(item: GetAllAdminUserRequest): void
    login(item: LoginAdminUserRequest): void;
    logout(): void;
    createAdminUser(item: CreateAdminUserRequest): void;
    updateAdminUser(item: UpdateAdminUserRequest): void;
    deleteAdminUser(item: DeleteAdminUserRequest): void;
}

class Dispatcher implements IAdminUserDispatcher {
    constructor(private dispatch: (action: Action) => void,
                private actionCreator: IAdminUserActionCreator) {
    }

    public getMe = (item: GetMeAdminUserRequest): void => {
        this.dispatch(this.actionCreator.requestGetMeAction(item));
    };

    public getAll = (item: GetAllAdminUserRequest): void => {
        this.dispatch(this.actionCreator.requestGetAllAction(item));
    };

    public login = (item: LoginAdminUserRequest): void => {
        this.dispatch(this.actionCreator.requestLoginAction(item));
    };

    public logout = (): void => {
        this.dispatch(this.actionCreator.requestLogoutAction())
    };

    public createAdminUser = (item: CreateAdminUserRequest): void => {
        this.dispatch(this.actionCreator.requestCreateAction(item));
    };

    public updateAdminUser = (item: UpdateAdminUserRequest): void => {
        this.dispatch(this.actionCreator.requestUpdateAction(item));
    };

    public deleteAdminUser = (item: DeleteAdminUserRequest): void => {
        this.dispatch(this.actionCreator.requestDeleteAction(item));
    };
}

const AdminUserDispatcher = (dispatch: (action: Action) => void, actionCreator: IAdminUserActionCreator): IAdminUserDispatcher => {
    return new Dispatcher(dispatch, actionCreator);
};

export { AdminUserDispatcher };
export type { IAdminUserDispatcher };
