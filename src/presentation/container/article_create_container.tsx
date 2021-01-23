import * as React from "react";
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import {RouteComponentProps} from "react-router";
import { createArticleDispatcher, IArticleDispatcher } from "../dispatcher/articles_dispatcher";
import { ArticleState } from '../store/articles_state';
import { AppState } from '../store/app_state';
import { ArticleActionCreator } from '../action/articles_action';
import ArticleCreateComponent from '../component/article_create';
// import { CreateArticleRequest } from "../request/article_request";

interface IProps extends RouteComponentProps<{}>{
    state: ArticleState;
    dispatcher: IArticleDispatcher;
    mode: string;
}

interface IState {
    isInit: boolean;
}

export class ArticleCreate extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            isInit: true,
        };
    };
    
    public render(): JSX.Element {
        return (
            <ArticleCreateComponent
                // createSubmit={this.createSubmit}
             />
        )
    }

    // private createSubmit = (values: any) => {
    //     const req: CreateArticleRequest = new CreateArticleRequest();
    //     req.title = values.title;
    //     req.description = values.markdown;
    //     values.preventDefault()
    //     // this.props.dispatcher.createArticle(req)
    // }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreate);