import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ConstBorderRadius, ConstBoxShadow, ConstColor, ConstFontSize, ConstLetterSpacing } from "../../config/styles_config/styles_config"
import { Article } from "../../domain/model/article"
import Assets from "../assets/assets"
import TextDefault from "../common/atom/text/text"

interface IProps {
    article: Article;
    cardURL: string;
}

const ArticleCard: React.FC<IProps> = (props) => {
    const {
        article,
        cardURL
    } = props
    
    return (
        <LinkWrapper to={cardURL}>
            <ArticleCardWrapper>
                <ImgWrapper>
                    {article.thumbnailURL !== "" ?
                        <Img src={article.thumbnailURL} />
                        :
                        <Img src={Assets.thumbnail} />
                    }
                </ImgWrapper>
                <ContentWrapper>
                    <TitleWrapper>
                        <Title bold={true}>
                            {article.title}
                        </Title>
                    </TitleWrapper>
                    <CreatedWrapper>
                        <Created>
                            {article.createdAt}
                        </Created>
                    </CreatedWrapper>
                </ContentWrapper>
            </ArticleCardWrapper>
        </LinkWrapper>
    )
}

export default ArticleCard;

const LinkWrapper = styled(Link)`
    text-decoration: none;
`

const ArticleCardWrapper = styled.div`
    background-color: ${ConstColor.White};
    border-radius: ${ConstBorderRadius.Card};
    overflow: hidden;
    width: 100%;
    box-shadow: ${ConstBoxShadow.Card};
`

const ImgWrapper = styled.div`
`

const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
    border-radius: ${ConstBorderRadius.None};
`

const ContentWrapper = styled.div`
    padding: 10px;
`

const TitleWrapper = styled.div`
    margin-bottom: 10px;
`

const Title = styled(TextDefault)`
    font-size: ${ConstFontSize.TitleText};
    letter-spacing: ${ConstLetterSpacing.Base};
`

const CreatedWrapper = styled.div`
    margin-bottom: 10px;
`

const Created = styled(TextDefault)`
    font-size: ${ConstFontSize.Created};
    color: ${ConstColor.Created};
    letter-spacing: ${ConstLetterSpacing.Base};
`
