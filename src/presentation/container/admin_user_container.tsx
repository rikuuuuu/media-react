import * as React from "react";
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {RouteComponentProps} from "react-router";
import { AppState } from '../store/app_state';
// import AdminLoginComponent from '../component/admin_login';
// import { LoginAdminUserRequest } from "../request/adminuser_request";
import { AdminUserDispatcher, IAdminUserDispatcher } from "../dispatcher/adminuser_dispatcher";
import { AdminUserActionCreator } from '../action/adminuser_action';
import { AdminUserState } from '../store/adminuser_state';
import AdminUserComponent from "../component/admin_user";
import { GetMeAdminUserRequest } from "../request/adminuser_request";
import { AdminUser } from "../../domain/model/adminuser";

interface IProps extends RouteComponentProps<{}>{
    state: AdminUserState;
    dispatcher: IAdminUserDispatcher;
}

interface IState {
    isInit: boolean;
}

export class AdminUserContent extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            isInit: true,
        };
    };

    public componentDidMount() {
        const req = new GetMeAdminUserRequest();
        this.props.dispatcher.getMe(req);
    }

    public render(): JSX.Element {

        const {state} = this.props;
        
        const {isInit} = this.state;

        const isLoading: boolean = state.isLoading;

        const adminUser: AdminUser | null = state.adminuser;

        return (
            <AdminUserComponent
                adminUser={adminUser}
                isInit={isInit}
                isLoading={isLoading}
            />
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        state: state.adminUserReducer,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        dispatcher: AdminUserDispatcher(dispatch, AdminUserActionCreator()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserContent);