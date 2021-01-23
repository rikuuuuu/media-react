import * as React from 'react';
import styled from 'styled-components';
import { ConstBorderRadius, ConstColor, ConstLetterSpacing } from '../../../../config/styles_config/styles_config';
// import {mixinBtnBorder, mixinBtnLarge, mixinResetBtnCss, mixinWithBtnPropsFn, IBtnDefaultProps} from "./btn_mixin";

export interface IBtnDefaultProps {
    icon?: string;
    widthSize?: "200px" | "100px";
}

interface IProps
    extends IBtnDefaultProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

const Btn: React.FC<IProps> = (props) => {

    const { icon, widthSize, ...ButtonProps } = props;

    return (<button {...ButtonProps} />)

};

// border: 1px solid #CCC;
const BtnDefault = styled(Btn)`
    letter-spacing: ${ConstLetterSpacing.Base};
    padding: 10px 20px;
    background-color: #FFF;
    background-color: ${ConstColor.HeaderBack};
    color: ${ConstColor.White};
    border-radius: ${ConstBorderRadius.Card};
    border: none;
    cursor: pointer;
`;

export default BtnDefault
