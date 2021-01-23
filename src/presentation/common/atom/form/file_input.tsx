import * as React from 'react';
import styled
// {css} 
from 'styled-components'
// import {ConstBorderRound, ConstColor, ConstFontStyle, ConstPadding} from "../../../../config/styles_const/styles_const";

interface IProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    hasError?: boolean;
    innerRef?: any;
    widthSize?: string;
}

const InputFile: React.FC<IProps> = (props) => {

    const { children, hasError, innerRef, widthSize, ...InputProps } = props;

    return (
        <Label htmlFor="file_photo">
            画像を選択
            <Input id="file_photo" type="file" {...InputProps} ref={innerRef} />
        </Label>
    )

};

const Input = styled.input`
    display: none;
`

const Label = styled.label`
    border: 1px solid #CCC;
    box-sizing: border-box;
    border-radius: 3px;
    background: #FFF;
    font-weight: 400;
    padding: 10px 20px;
    cursor: pointer;
    // width = 200px;
`

const FileInput = styled(InputFile)`
`

export default FileInput;