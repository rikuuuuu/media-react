import * as React from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import { AdminUserDispatcher, IAdminUserDispatcher } from '../dispatcher/adminuser_dispatcher';
import { AdminUserActionCreator } from '../action/adminuser_action';
import { CreateAdminUserRequest, LoginAdminUserRequest } from '../request/adminuser_request';
import { AppState } from '../store/app_state';
import { AdminUserState } from '../store/adminuser_state';
import FormInput from '../common/atom/form/form_input';
import BtnDefault from '../common/atom/btn/button';

interface IProps {
    state: AdminUserState;
    dispatcher: IAdminUserDispatcher;
}

const AdminLoginFormComponent: React.FC<IProps> = (props) => {
    // const {
    //     // handleSubmit
    // } = props;

    // const fields = {
    //     email: 'email',
    //     password: 'password'
    // }

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

    const emailChange = (e: any) => setEmail(e.target.value);
    const passwordChange = (e: any) => setPassword(e.target.value);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const req: LoginAdminUserRequest = new LoginAdminUserRequest();
        req.email = email;
        req.password = password;
        props.dispatcher.login(req)
    }

    const createSubmit = (e: any) => {
        e.preventDefault();
        const req: CreateAdminUserRequest = new CreateAdminUserRequest();
        req.email = email;
        req.password = password;
        props.dispatcher.createAdminUser(req);
    }

    return (
        <LoginFormWrapper>
            <form onSubmit={handleSubmit}>
                <LoginEmailWrapper>
                    <FormInput value={email} onChange={emailChange} type="email" placeholder={"Email"} />
                </LoginEmailWrapper>
                <LoginPassWrapper>
                    <FormInput value={password} onChange={passwordChange} type="password" placeholder={"Password"} />
                </LoginPassWrapper>
                <LoginBtnWrapper>
                    <FormBtn type="submit" value="Submit">ログイン</FormBtn>
                </LoginBtnWrapper>
                <LoginBtnWrapper>
                    <FormBtn onClick={createSubmit}>新規登録</FormBtn>
                </LoginBtnWrapper>
            </form>
        </LoginFormWrapper>
    )
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AdminLoginFormComponent);

const LoginFormWrapper = styled.div`

`

const LoginEmailWrapper = styled.div`
    margin: 0 auto 50px;
    width: fit-content;
`

const LoginPassWrapper = styled.div`
    margin: 0 auto 50px;
    width: fit-content;
`

const LoginBtnWrapper = styled.div`
    margin: 0 auto 50px;
    width: 100%;
`

const FormBtn = styled(BtnDefault)`
    width: 100%;
`