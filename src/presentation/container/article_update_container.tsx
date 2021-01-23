import * as React from "react";
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import { createArticleDispatcher, IArticleDispatcher } from "../dispatcher/articles_dispatcher";
import { ArticleState } from '../store/articles_state';
import { AppState } from '../store/app_state';
import { ArticleActionCreator } from '../action/articles_action';
import { Article } from "../../domain/model/article";
import { GetArticleByIdRequest } from "../request/article_request";
import ArticleUpdateComponent from "../component/article_update";

interface IProps {
    state: ArticleState;
    dispatcher: IArticleDispatcher;
    match: any;
}

interface IState {
    isInit: boolean;
}

export class ArticleUpdate extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        
        this.state = {
            isInit: true,
        };
    };

    public componentDidMount() {
        const req = new GetArticleByIdRequest();
        const articleId: string | undefined = this.props.match.params.articleId;
        if (articleId) {
            req.articleId = articleId;
            this.props.dispatcher.getArticleById(req);
        }
    }

    public componentDidUpdate(prevProps: IProps, prevState: IState) {
        // init処理の終了
        const isInitFinished: boolean = this.state.isInit && !this.props.state.isLoading && prevProps.state.isLoading;
        if (isInitFinished) { return this.setState({isInit: false}) }
    }

    public render(): JSX.Element {

        const {state} = this.props;
        
        const {isInit} = this.state;

        const isLoading: boolean = state.isLoading;

        const article: Article | null = state.article;

        return (
            <ArticleUpdateComponent
                isInit={isInit}
                article={article}
                isLoading={isLoading}
            />
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        state: state.articleActionReducer,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        dispatcher: createArticleDispatcher(dispatch, ArticleActionCreator()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleUpdate);