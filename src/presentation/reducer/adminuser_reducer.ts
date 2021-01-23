import { AdminUserState } from '../store/adminuser_state';
import { AdminUserAction, AdminUserActionType, ICallbackCreateAction, ICallbackGetMeAction, ICallbackLoginAction, ICallbackUpdateAction } from '../action/adminuser_action';

const initialState: AdminUserState = {
    adminuser: null,
    isLoading: false
};

const adminUserLoginReducer = (state = initialState, action: AdminUserAction): AdminUserState => {
    switch (action.type) {

        case AdminUserActionType.REQUEST_GETME_ADMINUSER: {
            return Object.assign({}, state, {
                adminuser: state.adminuser,
                isLoading: true,
            });
        }
        case AdminUserActionType.CALLBACK_GETME_ADMINUSER: {
            const _action = action as unknown as ICallbackGetMeAction;
            if (action.isSuccess) {
                return Object.assign({}, state, {
                    adminuser: _action.item ? _action.item.adminuser : null,
                    isLoading: false,
                });
            } else {
                return Object.assign({}, state, {
                    adminuser: state.adminuser,
                    isLoading: false
                })
            }
        }

        case AdminUserActionType.REQUEST_CREATE_ADMINUSER: {
            return Object.assign({}, state, {
                adminuser: state.adminuser,
                isLoading: true,
            });
        }
        case AdminUserActionType.CALLBACK_CREATE_ADMINUSER: {
            const _action = action as unknown as ICallbackCreateAction;
            if (action.isSuccess) {
                return Object.assign({}, state, {
                    adminuser: _action.item ? _action.item : null,
                    isLoading: false,
                });
            } else {
                return Object.assign({}, state, {
                    adminuser: state.adminuser,
                    isLoading: false
                })
            }
        }

        case AdminUserActionType.REQUEST_LOGIN_ADMINUSER: {
            return Object.assign({}, state, {
                adminuser: state.adminuser,
                isLoading: true,
            });
        }
        case AdminUserActionType.CALLBACK_LOGIN_ADMINUSER: {
            const _action = action as unknown as ICallbackLoginAction;
            if (action.isSuccess) {
                return Object.assign({}, state, {
                    adminuser: _action.item ? _action.item : null,
                    isLoading: false,
                });
            } else {
                return Object.assign({}, state, {
                    adminuser: state.adminuser,
                    isLoading: false
                })
            }
        }

        case AdminUserActionType.REQUEST_UPDATE_ADMINUSER: {
            return Object.assign({}, state, {
                adminuser: state.adminuser,
                isLoading: true,
            });
        }
        case AdminUserActionType.CALLBACK_UPDATE_ADMINUSER: {
            const _action = action as unknown as ICallbackUpdateAction;
            if (action.isSuccess) {
                return Object.assign({}, state, {
                    adminuser: _action.item ? _action.item.adminuser : null,
                    isLoading: false,
                });
            } else {
                return Object.assign({}, state, {
                    adminuser: state.adminuser,
                    isLoading: false
                })
            }
        }

        default:
            return state;
    }
};

export default adminUserLoginReducer;