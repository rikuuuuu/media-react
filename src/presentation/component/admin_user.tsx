import * as React from 'react'
import styled from 'styled-components';
import HeaderComponent from './header';
import FooterComponent from './footer';
import AdminUserFormComponent from './admin_user_form';
import { AdminUser } from '../../domain/model/adminuser';
import { ConstBorderRadius, ConstBoxShadow, ConstColor } from '../../config/styles_config/styles_config';

interface IProps {
    adminUser: AdminUser | null,
    isInit: boolean,
    isLoading: boolean,
}

const AdminUserComponent: React.FC<IProps> = (props) => {
    const {
        adminUser,
        isLoading,
    } = props;

    return (
        <React.Fragment>
            {!isLoading &&
                <ArticleWrapper>
                    <HeaderComponent />
                        <LoginWrapper>
                            <LoginCardWrapper>
                                <AdminUserFormComponent
                                    adminUser={adminUser}
                                />
                            </LoginCardWrapper>
                        </LoginWrapper>
                    <FooterComponent />
                </ArticleWrapper>
            }
        </React.Fragment>
    )
};

export default AdminUserComponent;

const ArticleWrapper = styled.div`

`

const LoginWrapper = styled.div`
    height: fit-content;
    background-color: ${ConstColor.Back};
    padding: 80px;

    @media screen and (min-width: 768px) {
    };
`

const LoginCardWrapper = styled.div`
    background-color: ${ConstColor.White};
    width: 600px;
    height: 700px;
    margin: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: ${ConstBorderRadius.Base};
    box-shadow: ${ConstBoxShadow.Base};
`