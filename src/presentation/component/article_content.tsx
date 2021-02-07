import * as React from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ConstBorderRadius, ConstColor } from '../../config/styles_config/styles_config';
import { Article } from '../../domain/model/article';
import MainRight from './main_right';
import Assets from '../assets/assets';
import BtnLinkDefault from '../common/atom/btn/btn_link';
import marked from 'marked';
import highlight from 'highlightjs';
import 'highlightjs/styles/docco.css';
import TitleText from '../common/atom/text/title_text';
import { AdminUser } from '../../domain/model/adminuser';

interface IProps {
    article: Article | null;
    adminUser: AdminUser | null;
}

marked.setOptions({
    highlight: function (code, lang) {
        return highlight.highlightAuto(code, [lang.split(':')[0]]).value;
    }
});

const ArticleContentComponent: React.FC<IProps> = (props) => {
    const {
        article,
        adminUser
    } = props;

    // const [markdown, setMarkdown] = useState('');

    return (
        <MainWrapper>
            <ArticleContentWrapper>
                <LeftWrapper>
                    <ContentWrapper>
                        {article &&
                            <>
                                <TitleWrapper>
                                    <TitleText>
                                        {article.title}
                                    </TitleText>
                                </TitleWrapper>
                                <ImgWrapper>
                                    {article.thumbnailURL !== "" ?
                                        <Img src={article.thumbnailURL} />
                                        :
                                        <Img src={Assets.thumbnail} />
                                    }
                                </ImgWrapper>
                                <DescriptionWrapper>
                                    <span dangerouslySetInnerHTML={{ __html: marked(article.description)}}/>
                                </DescriptionWrapper>
                                {adminUser && adminUser.id === article.userID &&
                                    <BtnWrapper>
                                        <BtnLinkDefault to={`/article_update/${article.id}`}>
                                            編集
                                        </BtnLinkDefault>
                                    </BtnWrapper>
                                }
                            </>
                        }
                    </ContentWrapper>
                </LeftWrapper>
                <MainRight />
            </ArticleContentWrapper>
        </MainWrapper>
    )
};

export default ArticleContentComponent;

const MainWrapper = styled.div`
    height: fit-content;
    background-color: ${ConstColor.Back};
    padding: 50px 0;

    @media screen and (min-width: 768px) {
        
    };
`

const ArticleContentWrapper = styled.div`
    margin: auto;
    width: 70%;
    height: -webkit-fill-available;
    display: block;

    @media screen and (min-width: 768px) {
        display: flex;
    };
`

const LeftWrapper = styled.div`
    width: 100%;
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
        width:70%;
        padding-right: 30px;
        margin-bottom: 0px;
    };
`

const ContentWrapper = styled.div`
    background-color: ${ConstColor.White};
    height: fit-content;
    border-radius: ${ConstBorderRadius.Base};
    min-height: 440px;
    padding: 30px 40px;
`

const TitleWrapper = styled.div`
    margin-bottom: 30px;
`

const ImgWrapper = styled.div`
    margin-bottom: 30px;
`

const Img = styled.img`
    width: 100%;
    max-height: 450px;
    border-radius: ${ConstBorderRadius.Card};
    overflow: hidden;
    object-fit: cover;
`

const DescriptionWrapper = styled.div` 
    margin-bottom: 30px;
`

const BtnWrapper = styled.div`
    margin-bottom: 30px;
`