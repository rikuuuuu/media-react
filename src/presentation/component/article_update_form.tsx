import * as React from 'react'
import styled from 'styled-components';
import {connect} from "react-redux";
import {Action, 
    // Dispatch
} from "redux";
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
import { DeleteArticleRequest, UpdateArticleRequest } from '../request/article_request';
import FileInput from '../common/atom/form/file_input';
import { Article } from '../../domain/model/article';
import { ConstColor } from '../../config/styles_config/styles_config';

interface IProps {
    article: Article | null;
    dispatcher: IArticleDispatcher;
}

interface IState {
    title: string;
    markdown: string;
    previewThumbnail: string;
    uploadFileThumbnailURL: File | null;
}

function handleDrop(data: any, e: any){
    let files = e.dataTransfer.files;
    if(files.length > 0){
        let file = files[0];
        alert('FileName : ' + file.name );
        // any action
    }
}

marked.setOptions({
    highlight: function (code, lang) {
        return highlight.highlightAuto(code, [lang.split(':')[0]]).value;
    }
});

export class ArticleUpdateFormComponent extends React.Component<IProps, IState> {
// const ArticleUpdateFormComponent: React.FC<IProps> = (props) => {
    constructor(props: IProps) {
        super(props);

        this.state = {
            title: "",
            markdown: "",
            previewThumbnail: "",
            uploadFileThumbnailURL: null,
        };
    };

    public componentDidMount() {

        if (this.props.article) {
            this.setState({
                title: this.props.article.title,
                markdown: this.props.article.description,
                previewThumbnail: this.props.article.thumbnailURL,
                // uploadFileThumbnailURL: this.props.article
            })
        }

    }

    public render(): JSX.Element {

        const {
            article
        } = this.props;
    
        // const [markdown, setMarkdown] = useState('');
        // const [title, setTitle] = useState('');
        // const [previewThumbnail, setPreviewThumbnail] = useState('');
        // const [uploadFileThumbnailURL, setUploadFileThumbnailURL] = useState<File | null>(null);
    
        // const titleChange = (e: any) => useState({
        //     title: e.target.value
        // });

        const previewThumbnailChange = (e: any) => {
            e.preventDefault()
            const file: File = e.target.files[0];
            // const filename = files[0].name;
            this.setState({
                uploadFileThumbnailURL: file
            })
            // setUploadFileThumbnailURL(file)
            createImage(file)
            // const blob = new Blob(e.target.value, { type: "image/png" })
        }
    
        const createImage = (file: File) => {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              const uploadedImage = e.target.result;
            //   setPreviewThumbnail(uploadedImage);
              this.setState({
                  previewThumbnail: uploadedImage
              })
            };
            reader.readAsDataURL(file);
        }
    
        const updateSubmit = (event: any) => {
            event.preventDefault()
            const req: UpdateArticleRequest = new UpdateArticleRequest();
            if (this.props.article) {
                req.articleId = this.props.article.id;
                req.title = this.state.title;
                req.description = this.state.markdown;
                req.uploadFileThumbnailURL = this.state.uploadFileThumbnailURL
                this.props.dispatcher.updateArticle(req)
            }
        }

        const deleteSubmit = (e: any) => {
            // e.preventDefault();
            if (article) {
                const req: DeleteArticleRequest = new DeleteArticleRequest();
                req.articleId = article.id;
                this.props.dispatcher.deleteArticle(req);
            }
        }

        return (
            <MainWrapper>
                <CreateFormWrapper>
                    <form onSubmit={updateSubmit}>
                        <ImageWrapper>
                            <ImageTitle>
                                サムネイル画像
                            </ImageTitle>
                            {this.state.previewThumbnail !== "" &&
                                <Img src={this.state.previewThumbnail} />
                            }
                            <FileInput onChange={previewThumbnailChange} />
                        </ImageWrapper>
                        <TitleWrapper>
                            <FormInput value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} type="text" placeholder={"タイトル"}></FormInput>
                        </TitleWrapper>
                        <SimpleMDE value={this.state.markdown} onChange={(e) => this.setState({ markdown: e })} events={{'drop': handleDrop}} />
                        {/* <Sample>
                            <span dangerouslySetInnerHTML={{ __html: marked(this.state.markdown)}}/>
                        </Sample> */}
                        <CreateBtnWrapper>
                            <CreateBtn type="submit" value="Submit">
                                更新する
                            </CreateBtn>
                        </CreateBtnWrapper>
                    </form>
                    <form onSubmit={deleteSubmit}>
                        <DeleteBtnWrapper>
                            <DeleteBtn>
                                {/* onClick={deleteSubmit} */}
                                投稿を削除する
                            </DeleteBtn>
                        </DeleteBtnWrapper>
                    </form>
                </CreateFormWrapper>
            </MainWrapper>
        )
    }
};

const mapStateToProps = (state: AppState) => {
    return {
        state: state.articleActionReducer
    };
};

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => {
    return {
        dispatcher: createArticleDispatcher(dispatch, ArticleActionCreator()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleUpdateFormComponent);

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
// const Sample = styled.div`
//     background: #fff;
//     min-height: 100px;
//     height: fit-content;
//     padding: 20px;
// `

const CreateBtnWrapper = styled.div`
    text-align: center;
`

const CreateBtn = styled(BtnDefault)`
    margin: 30px auto;
`

const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 30px;
`

const DeleteBtnWrapper = styled.div`
    width: fit-content;
    margin-left: auto;
`

const DeleteBtn = styled(BtnDefault)`
    margin: 30px auto;
    background-color: ${ConstColor.White};
    color: ${ConstColor.HeaderBack};
    border: 1px solid ${ConstColor.HeaderBack};
`   