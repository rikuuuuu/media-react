import * as React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ConstColor, ConstFontFamily } from '../../config/styles_config/styles_config';
import {Helmet} from 'react-helmet'

interface IProps {
}

const HeaderComponent: React.FC<IProps> = (props) => {
    // const {
    // } = props;

    return (
        <HeaderWrapper>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:300" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Economica:700" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Oswald:700" rel="stylesheet" />
            </Helmet>
            <TitleWrapper>
                <TitleText to={`/`}>Go and React Blog</TitleText>
            </TitleWrapper>
        </HeaderWrapper>
    )
};

export default HeaderComponent;

const HeaderWrapper = styled.div`
    height: 80px;
    background-color: ${ConstColor.HeaderBack};

    @media screen and (min-width: 768px) {
        height: 120px;
    };
`;

const TitleWrapper = styled.div`
    margin: auto;
    width: fit-content;
    height: -webkit-fill-available;
    padding: 25px 0;

    @media screen and (min-width: 768px) {
        padding: 40px 0;
    };
`
// Default : "768px",
// PcDeskTop : "1200px"
const TitleText = styled(Link)`
    font-size: 24px;
    text-decoration: none;
    color: ${ConstColor.White};
    font-family: ${ConstFontFamily.HeaderTitle};
    @media screen and (min-width: 768px) {
        font-size: 32px;
    };
`;

