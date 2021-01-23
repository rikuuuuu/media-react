import { ArticlesState, ArticleState } from './articles_state';
import { AdminUserState } from './adminuser_state';

export type AppState = {
    adminUserReducer: AdminUserState,
    articlesActionReducer: ArticlesState,
    articleActionReducer: ArticleState,
    rooter: any
};