import { IArticleRepository, TCreateArticleParams, TUpdateArticleParams } from '../../../domain/repository/article_repository';
import {IApiClient} from '../client';

import {
    common,
    entity, 
    api
} from "../rpc/api";
import { getToken } from './bind_token';
import {BufferWriter, Writer} from "protobufjs";
import { Article } from '../../../domain/model/article';
import { ArticleConvertResponse, ArticleConvertResponseList } from './article_api_convert';

// const Firestore = firebase.firestore.Firestore; type Firestore = typeof Firestore;

const ArticleID = entity.ArticleID;
const ArticleList = entity.ArticleList;
const CreateArticleRequest = api.CreateArticleRequest;
const UpdateArticleRequest = api.UpdateArticleRequest;

// const Empty = common.Empty;
const Pager = common.Pager;



class ArticleAPI implements IArticleRepository {

    constructor(readonly apiClient: IApiClient){
    }

    public get(articleID: string): Promise<Article> {
        return new Promise<Article>((resolve, reject) => {
            // getToken()
            //     .then((token: string): Promise<any> => {
                    const req = new ArticleID();
                    req.id = articleID
                    const writer: BufferWriter | Writer = Writer.create();
                    return this.apiClient.post("/api.ArticleService/Get", ArticleID.encode(req, writer).finish())
                // })
                .then((binary: Uint8Array): void => {
                    const res = entity.Article.decode(binary);
                    // BE=>FE 型変換
                    const resConverted = ArticleConvertResponse.from(res);
                    const item: Article = Article.from(resConverted);
                    resolve(item);
                })
                .catch((error: Error): void => {
                    reject(error);
                });
        });
    }

    public getAll(page: number, offset: number): Promise<Article[]> {
        return new Promise<Article[]>((resolve, reject) => {
            // getToken()
            //     .then((token: string): Promise<any> => {
                const req = new Pager();
                req.page = page;
                req.offset = offset;
                const writer: BufferWriter | Writer = Writer.create();
            //         return 
                this.apiClient.post("/api.ArticleService/GetAll", Pager.encode(req, writer).finish())
                // })
                .then((binary: any) => {
                    const res = ArticleList.decode(binary);
                    // BE=>FE 型変換
                    const resConverted: ArticleConvertResponseList = ArticleConvertResponseList.from(res);
                    const items: Article[] = resConverted.items.map((item: ArticleConvertResponse): Article => {
                        return Article.from(item);
                    });
                    resolve(items);
                })
                .catch((error: Error): void => {
                    reject(error);
                });
        });
    }

    public create(createArticleParams: TCreateArticleParams): Promise<Article> {
        return new Promise<Article>((resolve, reject) => {
            getToken()
                .then((token: string): Promise<any> => {
                    const req = new CreateArticleRequest();
                    req.title = createArticleParams.title;
                    req.description = createArticleParams.description;
                    req.thumbnailURL = createArticleParams.thumbnailURL;
                    // req.createdAt = createArticleParams.createdAt;
                    const writer: BufferWriter | Writer = Writer.create();
                    return this.apiClient.postWithToken("/api.ArticleService/Create", token, CreateArticleRequest.encode(req, writer).finish())
                })
                .then((binary: any) => {
                    const res = entity.Article.decode(binary);
                    const resConverted = ArticleConvertResponse.from(res);
                    const item: Article = Article.from(resConverted);
                    resolve(item);
                })
                .catch((error: Error): void => {
                    reject(error);
                });
        });
    }

    public update(updateArticleParams: TUpdateArticleParams): Promise<Article> {
        return new Promise<Article>((resolve, reject) => {
            getToken()
                .then((token: string): Promise<any> => {
                    const req = new UpdateArticleRequest();
                    req.id = updateArticleParams.articleId;
                    req.title = updateArticleParams.title;
                    req.description = updateArticleParams.description;
                    req.thumbnailURL = updateArticleParams.thumbnailURL;
                    const writer: BufferWriter | Writer = Writer.create();
                    return this.apiClient.postWithToken("/api.ArticleService/Update", token, UpdateArticleRequest.encode(req, writer).finish())
                })
                .then((binary: any) => {
                    const res = entity.Article.decode(binary);
                    const resConverted = ArticleConvertResponse.from(res);
                    const item: Article = Article.from(resConverted);
                    resolve(item);
                })
                .catch((error: Error): void => {
                    reject(error);
                });
        });
    }

    public delete(articleID: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            getToken()
                .then((token: string): Promise<any> => {
                    const req = new ArticleID();
                    req.id = articleID;
                    const writer: BufferWriter | Writer = Writer.create();
                    return this.apiClient.postWithToken("/api.ArticleService/Delete", token, ArticleID.encode(req, writer).finish())
                })
                .then((binary: any) => {
                    resolve();
                })
                .catch((error: Error): void => {
                    reject(error);
                });
        });
    }
    
}

const createArticleAPI = (apiClient: IApiClient): IArticleRepository => {
    return new ArticleAPI(apiClient);
};

export {createArticleAPI};
