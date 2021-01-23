import * as React from 'react';
import styled
// {css} 
from 'styled-components'
import { ConstBreakPoint, ConstColor, ConstFontWeight } from '../../../../config/styles_config/styles_config';

interface IProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    icon?: string;
    iconPrefix?: "900" | "400" | "300"; // fontawesom solid 900 regular 400 light 300
    bold?: boolean;
    defaultMargin?: boolean;
}

const Text: React.FC<IProps> = (props) => {

    const { icon, bold, defaultMargin, iconPrefix, children, ...PProps } = props;

    return<p {...PProps}>{children}</p>;

};

// font-size: ${};
// line-height: ${};

const TextDefault = styled(Text)`
    text-decoration: none;
    border: none;
    color: ${ConstColor.TextBase};
    font-style: normal;
    font-weight: ${props => props.bold ? ConstFontWeight.BOLD : ConstFontWeight.REGULAR};
    @media screen and (min-width: ${ConstBreakPoint.Default}) {
        font-weight: ${props => props.bold ? ConstFontWeight.BOLD : ConstFontWeight.REGULAR};
    };
`;

export default TextDefault;
