import * as React from 'react'
import styled from 'styled-components';
import HeaderComponent from './header';
import FooterComponent from './footer';
import AdminLoginFormComponent from './admin_login_form';
import { ConstBorderRadius, ConstBoxShadow, ConstColor } from '../../config/styles_config/styles_config';

interface IProps {
    // handleOnSubmit: (values: any) => void;
}

const AdminLoginComponent: React.FC<IProps> = (props) => {
    // const {
    //     // handleOnSubmit,
    // } = props;

    return (
        <ArticleWrapper>
            <HeaderComponent />
            <LoginWrapper>
                <LoginCardWrapper>
                    <AdminLoginFormComponent
                        // handleSubmit={handleOnSubmit}
                        />
                </LoginCardWrapper>
            </LoginWrapper>
            <FooterComponent />
        </ArticleWrapper>
    )
};

export default AdminLoginComponent;

const ArticleWrapper = styled.div`

`

const LoginWrapper = styled.div`
    height: fit-content;
    background-color: ${ConstColor.Back};
    padding: 40px;

    @media screen and (min-width: 768px) {
        padding: 80px;
    };
`

const LoginCardWrapper = styled.div`
    background-color: ${ConstColor.White};
    border-radius: ${ConstBorderRadius.Base};
    margin: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    box-shadow: ${ConstBoxShadow.Base};
    padding: 50px;

    @media screen and (min-width: 768px) {
        width: 600px;
        height: 700px;
        padding: 0px;
    };
`