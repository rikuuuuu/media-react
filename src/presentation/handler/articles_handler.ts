import {
    // all, 
    call, 
    // fork, 
    put, 
    take
} from 'redux-saga/effects';
import {Article} from '../../domain/model/article';
import { IArticleRepository, TCreateArticleParams, TUpdateArticleParams } from '../../domain/repository/article_repository';
import {createApiClient, IApiClient} from '../../infra/api/client';
import {
    // ArticleActionType, 
    IArticleActionCreator, 
    ArticleActionCreator,
    IRequestGetArticleAction,
    IRequestGetAllArticleAction,
    IRequestCreateArticleAction,
    IRequestDeleteArticleAction,
    IRequestUpdateArticleAction} from '../action/articles_action';
import {createArticleAPI} from '../../infra/api/service/article_api'
import {CreateArticleResponse, DeleteArticleResponse, GetAllArticleResponse, GetArticleByIdResponse, UpdateArticleResponse} from '../response/article_response'
import { ArticleActionType, 
    // IRequestGetAllArticleAction
 } from '../action/articles_action';
import { createFileUsecase, IFileUseCase } from '../../domain/usecase/file_usecase';
import { push } from 'connected-react-router';
// import { Pager } from '../../domain/model/common';

const apiClient: IApiClient = createApiClient();
const articleRepository: IArticleRepository = createArticleAPI(apiClient);
const actionCreator: IArticleActionCreator = ArticleActionCreator();

const fileUseCase: IFileUseCase = createFileUsecase();

function* handleGetAllArticle() {
    while (true) {
        try {
            const action: IRequestGetAllArticleAction = yield take(ArticleActionType.REQUEST_GET_ALL_ARTICLE);
            const articles: Article[] = yield call(getAllArticle, action.item.pager.page, action.item.pager.offset);
            const res: GetAllArticleResponse = new GetAllArticleResponse();
            res.articles = articles
            yield put(actionCreator.callbackGetAllArticleAction(true, res));
        } catch (error) {
            yield put(actionCreator.callbackGetAllArticleAction(false));
        }
    }
}

function* handleGetArticle() {
    while (true) {
        try {
            const action: IRequestGetArticleAction = yield take(ArticleActionType.REQUEST_GET_ARTICLE);
            const article: Article = yield call(getArticle, action.item.articleId);
            const res: GetArticleByIdResponse = new GetArticleByIdResponse();
            res.article = article
            yield put(actionCreator.callbackGetArticleAction(true, res));
        } catch (error) {
            yield put(actionCreator.callbackGetArticleAction(false));
        }
    }
}

function* handleCreateArticle() {
    while (true) {
        try {
            const action: IRequestCreateArticleAction = yield take(ArticleActionType.REQUEST_CREATE_ARTICLE);

            let thumbnailURL: string; 

            if (action.item.uploadFileThumbnailURL) {
                thumbnailURL = yield call(createArticleThumbnail, action.item.uploadFileThumbnailURL)
            } else {
                thumbnailURL = "";
            }

            const createParams: TCreateArticleParams = {
                title: action.item.title,
                description: action.item.description,
                thumbnailURL: thumbnailURL,
            }

            const article: Article = yield call(createArticle, createParams);
            const res: CreateArticleResponse = new CreateArticleResponse();
            res.article = article
            yield put(actionCreator.callbackCreateArticleAction(true, res));
        } catch (error) {
            yield put(actionCreator.callbackCreateArticleAction(false));
        }
    }
}

function* handleUpdateArticle() {
    while (true) {
        try {
            const action: IRequestUpdateArticleAction = yield take(ArticleActionType.REQUEST_UPDATE_ARTICLE);

            let thumbnailURL: string; 

            if (action.item.uploadFileThumbnailURL) {
                thumbnailURL = yield call(createArticleThumbnail, action.item.uploadFileThumbnailURL)
            } else {
                thumbnailURL = "";
            }

            const updateParams: TUpdateArticleParams = {
                articleId: action.item.articleId,
                title: action.item.title,
                description: action.item.description,
                thumbnailURL: thumbnailURL,
            }

            const article: Article = yield call(updateArticle, updateParams);
            const res: UpdateArticleResponse = new UpdateArticleResponse();
            res.article = article
            yield put(actionCreator.callbackUpdateArticleAction(true, res));
        } catch (error) {
            yield put(actionCreator.callbackUpdateArticleAction(false));
        }
    }
}

function* handleDeleteArticle() {
    while (true) {
        try {
            const action: IRequestDeleteArticleAction = yield take(ArticleActionType.REQUEST_DELETE_ARTICLE);
            // const article: void = 
            yield call(deleteArticle, action.item.articleId);
            const res: DeleteArticleResponse = new DeleteArticleResponse();
            yield put(actionCreator.callbackDeleteArticleAction(true, res));
            yield put(push(`/`));
        } catch (error) {
            yield put(actionCreator.callbackDeleteArticleAction(false));
        }
    }
}

const getAllArticle = (pager: number, offset: number): Promise<Article[]> => {
    return articleRepository.getAll(pager, pager);
}

const getArticle = (articleID: string): Promise<Article> => {
    return articleRepository.get(articleID);
}

const createArticle = (createArticleParams: TCreateArticleParams): Promise<Article> => {
    return articleRepository.create(createArticleParams);
}

const updateArticle = (updateArticleParams: TUpdateArticleParams): Promise<Article> => {
    return articleRepository.update(updateArticleParams);
}

const deleteArticle = (articleID: string): Promise<void> => {
    return articleRepository.delete(articleID);
}

const createArticleThumbnail = (uploadFile: File): Promise<string> => {
    return fileUseCase.createArticleThumbnail(uploadFile)
};

export {
    handleGetAllArticle,
    handleGetArticle,
    handleCreateArticle,
    handleUpdateArticle,
    handleDeleteArticle
}