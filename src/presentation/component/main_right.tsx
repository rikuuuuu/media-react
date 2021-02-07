import * as React from 'react'
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import styled from "styled-components";
import { ConstBorderRadius, ConstColor, ConstFontSize } from "../../config/styles_config/styles_config";
import { AdminUserActionCreator } from '../action/adminuser_action';
import Assets from '../assets/assets';
import BtnLinkDefault from '../common/atom/btn/btn_link';
import TextDefault from '../common/atom/text/text';
import { AdminUserDispatcher, IAdminUserDispatcher } from '../dispatcher/adminuser_dispatcher';
import { GetMeAdminUserRequest } from '../request/adminuser_request';
import { AdminUserState } from '../store/adminuser_state';
import { AppState } from '../store/app_state';
// import BtnDefault from '../common/atom/btn/button';

interface IProps {
    state: AdminUserState;
    dispatcher: IAdminUserDispatcher;
}

interface IState {
    isInit: boolean;
}

export class MainRight extends React.Component<IProps, IState> {
// const MainRight: React.FC<IProps> = (props) => {
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
        return (
            <RightWrapper>
                <RightContentsWrapper>
                    <IconWrapper>
                        <Icon src={Assets.icon} />
                    </IconWrapper>
                    <ContentWrapper>
                        <InfoText>
                            ポートフォリオ用Webサイトです。
                        </InfoText>
                        <InfoText>
                            ログインすれば投稿が可能です。
                        </InfoText>
                    </ContentWrapper>
                    <LoginLinkWrapper>
                        {this.props.state.adminuser ?
                            <>
                                <BtnWrapper>
                                    <Btn to={`/admin/update`}>マイページ</Btn>
                                </BtnWrapper>
                                <BtnWrapper>
                                    <Btn to={`/article/create`}>投稿</Btn>
                                </BtnWrapper>
                            </>
                            :
                            <Btn to={`/admin/login`}>ログイン</Btn>
                        }
                    </LoginLinkWrapper>
                </RightContentsWrapper>
            </RightWrapper>
        )
    }
}

// export default MainRight;

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

export default connect(mapStateToProps, mapDispatchToProps)(MainRight);

const RightWrapper = styled.div`
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 30%;
    };
`

const RightContentsWrapper = styled.div`
    background-color: ${ConstColor.White};
    height: fit-content;
    border-radius: ${ConstBorderRadius.Base};
    text-align: center;
    padding: 40px 20px;
    margin-bottom: 50px;
`

// const TitleText = styled.div`
//     margin-bottom: 30px;
// `

const IconWrapper = styled.div`
    text-align: center;
`

const Icon = styled.img`
    width: 70%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 20px;
`

const LoginLinkWrapper = styled.div`
    text-align: center;
`

const ContentWrapper = styled.div`
    margin-bottom: 30px;
`

const InfoText = styled(TextDefault)`
    font-size: ${ConstFontSize.TitleText};

`

const BtnWrapper = styled.div`
    margin-bottom: 30px;
`

const Btn = styled(BtnLinkDefault)`
    display: block;
`