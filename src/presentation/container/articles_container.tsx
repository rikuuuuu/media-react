import * as React from "react";
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import ArticleComponent from '../component/articles';
import { createArticleDispatcher, IArticleDispatcher } from "../dispatcher/articles_dispatcher";
import { ArticlesState } from '../store/articles_state';
import { AppState } from '../store/app_state';
import { ArticleActionCreator } from '../action/articles_action';
// import AdminLoginComponent from '../component/admin_login';
// import articleActionReducer from '../reducer/article_reducer';
import { GetAllArticleRequest } from "../request/article_request";
import { Pager } from "../../domain/model/common";
import { Article } from "../../domain/model/article";

interface IProps {
    state: ArticlesState;
    dispatcher: IArticleDispatcher;
}

interface IState {
    isInit: boolean;
}

export class ArticleTop extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        
        this.state = {
            isInit: true,
        };
    };

    public componentDidMount() {
        const req = new GetAllArticleRequest();
        req.pager = new Pager(1, 1)
        this.props.dispatcher.getAllArticle(req);
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

        const articles: Article[] = state.articles;

        return (
            <ArticleComponent
                isInit={isInit}
                articles={articles}
                isLoading={isLoading}
            />
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        state: state.articlesActionReducer,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        dispatcher: createArticleDispatcher(dispatch, ArticleActionCreator()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTop);