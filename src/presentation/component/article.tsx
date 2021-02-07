import * as React from 'react'
import styled from 'styled-components';
import HeaderComponent from './header';
import FooterComponent from './footer';
import { Article } from '../../domain/model/article';
import ArticleContentComponent from './article_content';
import { AdminUser } from '../../domain/model/adminuser';

interface IProps {
    article: Article | null;
    adminUser: AdminUser | null;
    isLoading: boolean;
    isInit: boolean;
}

const ArticleComponent: React.FC<IProps> = (props) => {
    const {
        article,
        adminUser,
        isLoading,
        // isInit
    } = props;

    // if (isInit) { return <ArticleWrapper /> }

    return (
        <React.Fragment>
            {!isLoading &&
                <ArticleWrapper>
                    <HeaderComponent />
                    <ArticleContentComponent
                        article={article}
                        adminUser={adminUser}
                    />
                    <FooterComponent />
                </ArticleWrapper>
            }
        </React.Fragment>
    )
};

export default ArticleComponent;

const ArticleWrapper = styled.div`

`