import * as React from 'react';
import styled
// {css} 
from 'styled-components'
import { ConstColor } from '../../../../config/styles_config/styles_config';
// import {ConstBorderRound, ConstColor, ConstFontStyle, ConstPadding} from "../../../../config/styles_const/styles_const";

interface IProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    hasError?: boolean;
    innerRef?: any;
    widthSize?: string;
}

const InputDefault: React.FC<IProps> = (props) => {

    const { children, hasError, innerRef, widthSize, ...InputProps } = props;

    return (<input {...InputProps} ref={innerRef}/>)

};

const FormInput = styled(InputDefault)`
    width: ${props => props.widthSize || "100%"};
    background: #FFF;
    padding: 10px;
    color: #333;
    // border
    border: 1px solid #CCC;
    box-sizing: border-box;
    border-radius: 3px;
    // font
    font-style: normal;
    &::placeholder {
        color: ${ConstColor.PlaceHolder};
    }
`;

// font-weight: ${ConstFontStyle.FormDefault.fontWeight};
// font-size: ${ConstFontStyle.FormDefault.fontSize};
// line-height: ${ConstFontStyle.FormDefault.lineHeight};

export default FormInput;