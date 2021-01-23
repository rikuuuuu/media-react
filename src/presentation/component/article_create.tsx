import * as React from 'react'
import styled from 'styled-components';
import HeaderComponent from './header';
// import MainContentsComponent from './main_contents';
import FooterComponent from './footer';
import ArticleCreateFormComponent from './article_create_form';

interface IProps {
    // createSubmit: (values: any) => void;
}

const ArticleCreateComponent: React.FC<IProps> = (props) => {
    // const {
    //     // createSubmit,
    // } = props;

    return (
        <ArticleWrapper>
            <HeaderComponent />
            <ArticleCreateFormComponent
                // createSubmit={createSubmit}
             />
            <FooterComponent />
        </ArticleWrapper>
    )
};

export default ArticleCreateComponent;

const ArticleWrapper = styled.div`

`