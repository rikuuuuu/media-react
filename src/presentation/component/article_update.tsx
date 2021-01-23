import * as React from 'react'
import styled from 'styled-components';
// import { Article } from '../../domain/model/article';
import HeaderComponent from './header';
import FooterComponent from './footer';
import { Article } from '../../domain/model/article';
import ArticleUpdateFormComponent from './article_update_form';

// import { createApiClient, IApiClient } from '../../infra/api/client';
// import { createArticleAPI } from '../../infra/api/service/article_api';
// import { IArticleRepository } from '../../domain/repository/article_repository';

interface IProps {
    article: Article | null;
    isLoading: boolean;
    isInit: boolean;
}

const ArticleUpdateComponent: React.FC<IProps> = (props) => {
    const {
        article,
        isLoading,
        // isInit
    } = props;

    // if (isInit) { return <ArticleWrapper /> }

    return (
        <React.Fragment>
            {!isLoading &&
                <ArticleWrapper>
                    <HeaderComponent />
                    <ArticleUpdateFormComponent
                        article={article}
                    />
                    <FooterComponent />
                </ArticleWrapper>
            }
        </React.Fragment>
    )
};

export default ArticleUpdateComponent;

const ArticleWrapper = styled.div`

`