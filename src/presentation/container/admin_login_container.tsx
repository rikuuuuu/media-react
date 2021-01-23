import * as React from "react";
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {RouteComponentProps} from "react-router";
import { AppState } from '../store/app_state';
import AdminLoginComponent from '../component/admin_login';
// import { LoginAdminUserRequest } from "../request/adminuser_request";
import { AdminUserDispatcher, IAdminUserDispatcher } from "../dispatcher/adminuser_dispatcher";
import { AdminUserActionCreator } from '../action/adminuser_action';
import { AdminUserState } from '../store/adminuser_state';

interface IProps extends RouteComponentProps<{}>{
    state: AdminUserState;
    dispatcher: IAdminUserDispatcher;
}

interface IState {
    isInit: boolean;
}

export class AdminLogin extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            isInit: true,
        };
    };

    public componentDidMount() {
    }

    // private handleOnSubmit = (values: any) => {
    //     const req: LoginAdminUserRequest = new LoginAdminUserRequest();
    //     req.email = values.email;
    //     req.password = values.password;
    //     values.preventDefault()
    //     this.props.dispatcher.login(req)
    // }

    public render(): JSX.Element {

        return (
            <AdminLoginComponent
                // handleOnSubmit={this.handleOnSubmit}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);