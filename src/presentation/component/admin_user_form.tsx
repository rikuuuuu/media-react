import * as React from 'react'
import styled from 'styled-components';
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import { AdminUserDispatcher, IAdminUserDispatcher } from '../dispatcher/adminuser_dispatcher';
import { AdminUserActionCreator } from '../action/adminuser_action';
import { UpdateAdminUserRequest } from '../request/adminuser_request';
import { AppState } from '../store/app_state';
import { AdminUserState } from '../store/adminuser_state';
import { AdminUser } from '../../domain/model/adminuser';
import FormInput from '../common/atom/form/form_input';
import BtnDefault from '../common/atom/btn/button';

interface IProps {
    state: AdminUserState;
    dispatcher: IAdminUserDispatcher;
    adminUser: AdminUser | null;
}

interface IState {
    name: string
}

export class AdminUserFormComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            name: "",
        };
    };

    public componentDidMount() {

        if (this.props.adminUser) {
            this.setState({
                name: this.props.adminUser.name
            })
        }

    }

    public render(): JSX.Element {

        // const {
        //     // adminUser
        // } = this.props;

        // const [name, setName] = React.useState('');

        // const nameChange = (e: any) => setName(e.target.value);

        const updateSubmit = (event: any) => {
            event.preventDefault();
            const req: UpdateAdminUserRequest = new UpdateAdminUserRequest();
            req.id = "n6f8713AYFDms8R9ZXag"
            req.name = this.state.name;
            this.props.dispatcher.updateAdminUser(req)
        }

        const Logout = (event: any) => {
            event.preventDefault();
            this.props.dispatcher.logout()
        }        

        return (
            <LoginFormWrapper>
                <form onSubmit={updateSubmit}>
                    <LoginLabelWrapeer>
                        <LoginLabel>
                            編集
                        </LoginLabel>
                    </LoginLabelWrapeer>
                    <LoginEmailWrapper>
                        <LoginEmail>
                            <FormInput value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} type="text" placeholder={"ユーザーネーム"} />
                        </LoginEmail>
                    </LoginEmailWrapper>
                    <LoginBtnWrapper>
                        <LoginBtn type="submit" value="Submit">更新</LoginBtn>
                    </LoginBtnWrapper>
                </form>
                <LoginBtnWrapper>
                        <LoginBtn onClick={Logout}>ログアウト</LoginBtn>
                    </LoginBtnWrapper>
            </LoginFormWrapper>
        )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserFormComponent);

const LoginFormWrapper = styled.div`

`

const LoginLabelWrapeer = styled.div`
    margin: 0 auto 30px;
    width: fit-content;
`

const LoginLabel = styled.div`
    margin-bottom: 20px;
`

const LoginEmailWrapper = styled.div`
    margin: 0 auto 50px;
    width: fit-content;
`

const LoginEmail = styled.div`
`

// const LoginPassWrapper = styled.div`
//     margin: 0 auto 50px;
//     width: fit-content;
// `

// const LoginPass = styled.div`

// `

const LoginBtnWrapper = styled.div`
    margin: 0 auto 50px;
    width: 100%;
`

const LoginBtn = styled(BtnDefault)`
    width: 100%;
`

// const LinkBtn = styled(Link)`
//     text-decoration: none;
//     color: #333;
// `