import * as React from "react";
import {connect} from "react-redux";
import {Action, Dispatch} from "redux";
import ArticleComponent from '../component/article';
import { createArticleDispatcher, IArticleDispatcher } from "../dispatcher/articles_dispatcher";
import { ArticleState } from '../store/articles_state';
import { AppState } from '../store/app_state';
import { ArticleActionCreator } from '../action/articles_action';
import { Article } from "../../domain/model/article";
import { GetArticleByIdRequest } from "../request/article_request";
import { AdminUserState } from "../store/adminuser_state";
import { GetMeAdminUserRequest } from "../request/adminuser_request";
import { AdminUserDispatcher, IAdminUserDispatcher } from "../dispatcher/adminuser_dispatcher";
import { AdminUserActionCreator } from '../action/adminuser_action';
import { AdminUser } from "../../domain/model/adminuser";

interface IProps {
    state: ArticleState;
    userstate: AdminUserState;
    dispatcher: IArticleDispatcher;
    userdispatcher: IAdminUserDispatcher;
    match: any;
}

interface IState {
    isInit: boolean;
}

export class ArticleContent extends React.Component<IProps, IState> {
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

        const userreq = new GetMeAdminUserRequest();
        this.props.userdispatcher.getMe(userreq);
    }

    public componentDidUpdate(prevProps: IProps, prevState: IState) {
        // init処理の終了
        const isInitFinished: boolean = this.state.isInit && !this.props.state.isLoading && prevProps.state.isLoading;
        if (isInitFinished) { return this.setState({isInit: false}) }
    }

    public render(): JSX.Element {

        const {state, userstate} = this.props;
        
        const {isInit} = this.state;

        const isLoading: boolean = state.isLoading;

        const article: Article | null = state.article;
        
        const adminUser: AdminUser | null = userstate.adminuser
        
        return (
            <ArticleComponent
                isInit={isInit}
                article={article}
                adminUser={adminUser}
                isLoading={isLoading}
            />
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        state: state.articleActionReducer,
        userstate: state.adminUserReducer
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        dispatcher: createArticleDispatcher(dispatch, ArticleActionCreator()),
        userdispatcher: AdminUserDispatcher(dispatch, AdminUserActionCreator())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContent);