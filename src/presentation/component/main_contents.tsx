import * as React from 'react'
import styled from 'styled-components';
import { Article } from '../../domain/model/article';
import ArticleCard from './article_card';
import { ConstColor } from '../../config/styles_config/styles_config';
// import BtnLinkDefault from '../common/atom/btn/btn_link';
import MainRight from './main_right';

interface IProps {
    articles: Article[];
}

const MainContentsComponent: React.FC<IProps> = (props) => {
    const {
        articles
    } = props;

    return (
        <MainWrapper>
            <MainContentsWrapper>
                <LeftWrapper>
                    <LeftContentsWrapper>
                        {articles.length !== 0 ?
                            <>
                                <ArticleCardsWrapper>
                                    {articles.map((article: Article, index: number) => {
                                        return (
                                            <ArticleCardWrapper key={index}>
                                                <ArticleCard
                                                    article={article}
                                                    cardURL={`/article/${article.id}`}
                                                />
                                            </ArticleCardWrapper>
                                        )
                                    })}
                                </ArticleCardsWrapper>
                            </>
                            :
                            <TitleText>投稿がありません。</TitleText>
                        }
                    </LeftContentsWrapper>
                </LeftWrapper>
                <MainRight />
            </MainContentsWrapper>
        </MainWrapper>
    )
};

export default MainContentsComponent;

const MainWrapper = styled.div`
    height: fit-content;
    background-color: ${ConstColor.Back};
    padding: 50px 0;

    @media screen and (min-width: 768px) {
        
    };
`

const MainContentsWrapper = styled.div`
    margin: auto;
    width: 90%;
    height: -webkit-fill-available;
    display: block;

    @media screen and (min-width: 768px) {
        display: flex;
        width: 70%;
    };
`

const LeftWrapper = styled.div`
    width: 100%;

    @media screen and (min-width: 768px) {
        width:70%;
    };
`

const LeftContentsWrapper = styled.div`
    width: 100%;
    min-height: 1000px;
    height: fit-content;

    @media screen and (min-width: 768px) {
        width: 95%;
        margin-right: 5%;
    };
`

const TitleText = styled.div`
    margin-bottom: 30px;
`

const ArticleCardsWrapper = styled.div`
    display: block;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    };
`

const ArticleCardWrapper = styled.div`
    width: 100%;
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
        width: 45%;
        margin: 0 5% 30px 0;
    };
`