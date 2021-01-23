// import {Reducer} from 'redux'
import {ArticlesState} from '../store/articles_state';
import {ArticleActionType, ArticleAction, ICallbackGetAllArticleAction} from '../action/articles_action';

const articlesInitialState: ArticlesState = {
    articles: [],
    isLoading: false
};

// Reducer<ArticleState>
const articlesActionReducer = (state = articlesInitialState, action: ArticleAction): ArticlesState => {
    switch(action.type) {
        case ArticleActionType.REQUEST_GET_ALL_ARTICLE: {
            return Object.assign({}, state, {
                articles: state.articles,
                isLoading: true,
            });
        }
        case ArticleActionType.CALLBACK_GET_ALL_ARTICLE: {
            const _action = action as ICallbackGetAllArticleAction;
            if (action.isSuccess) {
                return Object.assign({}, state, {
                    articles: _action.item ? _action.item.articles : articlesInitialState,
                    isLoading: false,
                });
            } else {
                return Object.assign({}, state, {
                    articles: state.articles,
                    isLoading: false,
                });
            }
        }

        default:
            return state;
    }
};

export default articlesActionReducer;