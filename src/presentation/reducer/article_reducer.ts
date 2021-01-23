// import {Reducer} from 'redux'
import {ArticleState} from '../store/articles_state';
import {ArticleActionType, ArticleAction, ICallbackGetArticleAction, ICallbackCreateArticleAction, ICallbackUpdateArticleAction, ICallbackDeleteArticleAction} from '../action/articles_action';

const articleInitialState: ArticleState = {
    article: null,
    isLoading: false
};

const articleActionReducer = (state = articleInitialState, action: ArticleAction): ArticleState => {
    switch(action.type) {
        case ArticleActionType.REQUEST_GET_ARTICLE: {
            return Object.assign({}, state, {
                article: state.article,
                isLoading: true,
            });
        }
        case ArticleActionType.CALLBACK_GET_ARTICLE: {
            const _action = action as ICallbackGetArticleAction;
            if (action.isSuccess) {
                return Object.assign({}, state, {
                    article: _action.item ? _action.item.article : articleInitialState,
                    isLoading: false,
                });
            } else {
                return Object.assign({}, state, {
                    article: state.article,
                    isLoading: false,
                });
            }
        }

        case ArticleActionType.REQUEST_CREATE_ARTICLE: {
            return Object.assign({}, state, {
                article: state.article,
                isLoading: true,
            });
        }
        case ArticleActionType.CALLBACK_CREATE_ARTICLE: {
            const _action = action as ICallbackCreateArticleAction;
            if (action.isSuccess) {
                return Object.assign({}, state, {
                    article: _action.item ? _action.item.article : articleInitialState,
                    isLoading: false,
                });
            } else {
                return Object.assign({}, state, {
                    article: state.article,
                    isLoading: false,
                });
            }
        }

        case ArticleActionType.REQUEST_UPDATE_ARTICLE: {
            return Object.assign({}, state, {
                article: state.article,
                isLoading: true,
            });
        }
        case ArticleActionType.CALLBACK_UPDATE_ARTICLE: {
            const _action = action as ICallbackUpdateArticleAction;
            if (action.isSuccess) {
                return Object.assign({}, state, {
                    article: _action.item ? _action.item.article : articleInitialState,
                    isLoading: false,
                });
            } else {
                return Object.assign({}, state, {
                    article: state.article,
                    isLoading: false,
                });
            }
        }

        case ArticleActionType.REQUEST_DELETE_ARTICLE: {
            return Object.assign({}, state, {
                article: state.article,
                isLoading: true,
            });
        }
        case ArticleActionType.CALLBACK_DELETE_ARTICLE: {
            const _action = action as ICallbackDeleteArticleAction;
            if (action.isSuccess) {
                return Object.assign({}, state, {
                    article: _action.item ? _action.item : articleInitialState,
                    isLoading: false,
                });
            } else {
                return Object.assign({}, state, {
                    article: state.article,
                    isLoading: false,
                });
            }
        }

        default:
            return state;
    }
};

export default articleActionReducer;