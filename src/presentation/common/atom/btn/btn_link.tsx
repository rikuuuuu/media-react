import * as React from 'react';
import styled from 'styled-components';
import {Link, LinkProps} from "react-router-dom";
import { IBtnDefaultProps } from './button';
import { ConstBorderRadius, ConstColor, ConstLetterSpacing } from '../../../../config/styles_config/styles_config';

interface IProps
    extends IBtnDefaultProps, LinkProps {
}

const BtnLink: React.FC<IProps> = (props) => {

    const { icon, widthSize, ...ButtonProps } = props;

    return (<Link {...ButtonProps} />)

};

const BtnLinkDefault = styled(BtnLink)`
    display: inline-block;
    letter-spacing: ${ConstLetterSpacing.Base};
    text-decoration: none;
    color: ${ConstColor.White};
    background-color: ${ConstColor.HeaderBack};
    border-radius: ${ConstBorderRadius.Card};
    padding: 10px 20px;
`;

export default BtnLinkDefault;
