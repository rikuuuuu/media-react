import * as React from 'react'
import styled from 'styled-components';
import { ConstColor, ConstFontFamily } from '../../config/styles_config/styles_config';

interface IProps {
}

const FooterComponent: React.FC<IProps> = (props) => {
    // const {
    // } = props;

    return (
        <FooterWrapper>
            <TitleWrapper>
                <TitleText>- Go and React Blog -</TitleText>
            </TitleWrapper>
        </FooterWrapper>
    )
};

export default FooterComponent;

const FooterWrapper = styled.div`
    height: 100px;

    @media screen and (min-width: 768px) {
        height: 200px;
    };
`;

const TitleWrapper = styled.div`
    margin: auto;
    width: fit-content;
    height: -webkit-fill-available;
    padding: 35px 0;

    @media screen and (min-width: 768px) {
        padding: 80px 0;
    };
`

const TitleText = styled.div`
    font-size: 24px;
    color: ${ConstColor.HeaderBack};
    font-family: ${ConstFontFamily.HeaderTitle};
    @media screen and (min-width: 768px) {
        font-size: 32px;
    };
`;
