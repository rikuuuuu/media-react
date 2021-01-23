import * as React from 'react';
import styled
// {css} 
from 'styled-components'
import { ConstBreakPoint, ConstColor, ConstFontSize, ConstLetterSpacing, ConstLineHeight } from '../../../../config/styles_config/styles_config';

interface IProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    icon?: string;
    iconPrefix?: "900" | "400" | "300"; // fontawesom solid 900 regular 400 light 300
    bold?: boolean;
    defaultMargin?: boolean;
}

const Title: React.FC<IProps> = (props) => {

    const { icon, bold, defaultMargin, iconPrefix, children, ...PProps } = props;

    return<h1 {...PProps}>{children}</h1>;

};

// font-size: ${};
// line-height: ${};

const TitleText = styled(Title)`
    letter-spacing : ${ConstLetterSpacing.Base};
    text-decoration: none;
    border: none;
    color: ${ConstColor.TextBase};
    line-height: ${ConstLineHeight.Title};
    font-style: bold;
    font-size: ${ConstFontSize.Title};
    font-weight: bold;
    @media screen and (min-width: ${ConstBreakPoint.Default}) {
        font-weight: bold;
    };
`;

export default TitleText;
