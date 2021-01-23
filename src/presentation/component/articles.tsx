import * as React from 'react'
import styled from 'styled-components';
import HeaderComponent from './header';
import MainContentsComponent from './main_contents';
import FooterComponent from './footer';
import { Article } from '../../domain/model/article';

interface IProps {
    articles: Article[];
    isLoading: boolean;
    isInit: boolean;
}

const ArticlesComponent: React.FC<IProps> = (props) => {
    const {
        articles,
        isLoading,
        // isInit
    } = props;

    // if (isInit) { return <ArticleWrapper /> }

    return (
        <React.Fragment>
            {!isLoading &&
                <ArticleWrapper>
                    <HeaderComponent />
                    <MainContentsComponent
                        articles={articles}
                    />
                    <FooterComponent />
                </ArticleWrapper>
            }
        </React.Fragment>
    )
};

export default ArticlesComponent;

const ArticleWrapper = styled.div`

`