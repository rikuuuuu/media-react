import {Action} from 'redux';
import {
    CreateArticleRequest,
    DeleteArticleRequest,
    GetAllArticleRequest, GetArticleByIdRequest, UpdateArticleRequest
} from '../request/article_request';
import { IArticleActionCreator } from '../action/articles_action';

interface IArticleDispatcher {
    getAllArticle(item: GetAllArticleRequest): void;
    getArticleById(item: GetArticleByIdRequest): void;
    createArticle(item: CreateArticleRequest): void;
    updateArticle(item: UpdateArticleRequest): void;
    deleteArticle(imte: DeleteArticleRequest): void;
}

class Dispatcher implements IArticleDispatcher {

    constructor(private dispatch: (action: Action) => void,
                private actionCreator: IArticleActionCreator) {
    }

    public getAllArticle = (item: GetAllArticleRequest): void => {
        this.dispatch(this.actionCreator.requestGetAllArticleAction(item));
    };

    public getArticleById = (item: GetArticleByIdRequest): void => {
        this.dispatch(this.actionCreator.requestGetArticleAction(item));
    };

    public createArticle = (item: CreateArticleRequest): void => {
        this.dispatch(this.actionCreator.requestCreateArticleAction(item));
    };

    public updateArticle = (item: UpdateArticleRequest): void => {
        this.dispatch(this.actionCreator.requestUpdateArticleAction(item));
    };

    public deleteArticle = (item: DeleteArticleRequest): void => {
        this.dispatch(this.actionCreator.requestDeleteArticleAction(item));
    };

}

const createArticleDispatcher = (dispatch: (action: Action) => void, actionCreator: IArticleActionCreator): IArticleDispatcher => {
    return new Dispatcher(dispatch, actionCreator);
};

export { createArticleDispatcher };
export type { IArticleDispatcher };

