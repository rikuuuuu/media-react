import * as React from 'react'
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import FormInput from '../common/atom/form/form_input';
import marked from 'marked';
import highlight from 'highlightjs';
import 'highlightjs/styles/docco.css';
import BtnDefault from '../common/atom/btn/button';
import { AppState } from '../store/app_state';
import { createArticleDispatcher, IArticleDispatcher } from '../dispatcher/articles_dispatcher';
import { ArticleActionCreator } from '../action/articles_action';
import { ArticleState } from '../store/articles_state';
import { CreateArticleRequest } from '../request/article_request';
import FileInput from '../common/atom/form/file_input';
import { ConstColor } from '../../config/styles_config/styles_config';


interface IProps {
    // createSubmit: (values: any) => void;
    state: ArticleState;
    dispatcher: IArticleDispatcher;
}

// function handleDrop(data: any, e: any){
//     let files = e.dataTransfer.files;
//     if(files.length > 0){
//         let file = files[0];
//         alert('FileName : ' + file.name );
//         // any action
//     }
// } 

// function handleImg(file: File, onSuccess: (url: string) => void) {
//     console.log("handle", file, onSuccess)
//     // onSuccess(imageUrl: string)
// }

marked.setOptions({
    highlight: function (code, lang) {
        return highlight.highlightAuto(code, [lang.split(':')[0]]).value;
    }
});

const ArticleCreateFormComponent: React.FC<IProps> = (props) => {
    // const {
    //     // createSubmit
    // } = props;

    const [markdown, setMarkdown] = useState('');
    const [title, setTitle] = useState('');
    const [previewThumbnail, setPreviewThumbnail] = useState('');
    const [uploadFileThumbnailURL, setUploadFileThumbnailURL] = useState<File | null>(null);

    const titleChange = (e: any) => setTitle(e.target.value);
    const previewThumbnailChange = (e: any) => {
        e.preventDefault()
        const file: File = e.target.files[0];
        // const filename = files[0].name;
        setUploadFileThumbnailURL(file)
        createImage(file)
        // const blob = new Blob(e.target.value, { type: "image/png" })
    }

    const createImage = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const uploadedImage = e.target.result;
          setPreviewThumbnail(uploadedImage);
        };
        reader.readAsDataURL(file);
    }

    const createSubmit = (event: any) => {
        event.preventDefault()
        const req: CreateArticleRequest = new CreateArticleRequest();
        req.title = title;
        req.description = markdown;
        req.uploadFileThumbnailURL = uploadFileThumbnailURL
        props.dispatcher.createArticle(req)
    }

    // const toolbar = [
    //     'bold',
    //     'italic',
    //     'heading',
    //     '|',
    //     'quote',
    //     'unordered-list',
    //     'ordered-list',
    //     '|',
    //     'link',
    //     {
    //         name: "image",
    //         action: function customFunction(editor: any) {
    //             console.log(editor.value());
    //         },
    //         className: "fa fa-picture-o",
    //         title: "Image"
    //     },
    //     '|',
    //     'preview',
    //     'side-by-side',
    //     'fullscreen',
    //     '|',
    //     'guide',
    // ]
    
    return (
        <MainWrapper>
            <CreateFormWrapper>
                <form onSubmit={createSubmit}>
                    <ImageWrapper>
                        <ImageTitle>
                            サムネイル画像
                        </ImageTitle>
                        {previewThumbnail !== "" &&
                            <Img src={previewThumbnail} />
                        }
                        <FileInput onChange={previewThumbnailChange} />
                    </ImageWrapper>
                    <TitleWrapper>
                        <FormInput value={title} onChange={titleChange} type="text" placeholder={"タイトル"}></FormInput>
                    </TitleWrapper>
                    <SimpleMDE onChange={(e) => setMarkdown(e)} 
                        // options={{
                        //     'uploadImage': true,
                        //     'imageUploadFunction': handleImg,
                        //     'insertTexts': {
                        //         horizontalRule: ["", "\n\n-----\n\n"],
                        //         image: ["![](http://", ")"],
                        //         link: ["[", "](http://)"],
                        //         table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                        //     },
                        //     'toolbar': [
                        //     'bold',
                        //     'italic',
                        //     'heading',
                        //     '|',
                        //     'quote',
                        //     'unordered-list',
                        //     'ordered-list',
                        //     '|',
                        //     'link',
                        //     {
                        //         name: "image",
                        //         action: function customFunction(editor: any) {
                        //             console.log(editor.value());
                        //         },
                        //         className: "fa fa-picture-o",
                        //         title: "Image"
                        //     },
                        //     '|',
                        //     'preview',
                        //     'side-by-side',
                        //     'fullscreen',
                        //     '|',
                        //     'guide',
                        // ]
                    // }}
                        // events={{'drop': handleDrop}}
                    />
                    <Sample>
                        <span dangerouslySetInnerHTML={{ __html: marked(markdown)}}/>
                    </Sample>
                    <CreateBtnWrapper>
                        <CreateBtn type="submit" value="Submit">
                            投稿する
                        </CreateBtn>
                    </CreateBtnWrapper>
                </form>
            </CreateFormWrapper>
        </MainWrapper>
    )
};

// export default ArticleCreateFormComponent;

const mapStateToProps = (state: AppState) => {
    return {
        state: state.articleActionReducer
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        dispatcher: createArticleDispatcher(dispatch, ArticleActionCreator()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreateFormComponent);

const MainWrapper = styled.div`
    height: fit-content;
    background-color: ${ConstColor.Back};
    padding: 50px 0;

    @media screen and (min-width: 768px) {
        
    };
`

const CreateFormWrapper = styled.div`
    width: 70%;
    max-width: 960px;
    margin: 0 auto;
`

const ImageWrapper = styled.div`
    margin-bottom: 30px;
`

const ImageTitle = styled.div`
    margin-bottom: 30px;
`

const TitleWrapper = styled.div`
    margin-bottom: 30px;
`
const Sample = styled.div`
    background: #fff;
    min-height: 100px;
    height: fit-content;
    padding: 20px;
`

const CreateBtnWrapper = styled.div`
    text-align: center;
`

const CreateBtn = styled(BtnDefault)`
    margin: 30px auto;
`

const Img = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    margin-bottom: 30px;
`