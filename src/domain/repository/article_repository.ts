import { Article } from '../model/article';
// import GetArticle from 'mediareact/proto/article_pb';

export interface IArticleRepository {
    get(articleID: string): Promise<Article>;
    getAll(page: number, offset: number): Promise<Article[]>;
    create(createArticleParams: TCreateArticleParams): Promise<Article>;
    update(updateArticleParams: TUpdateArticleParams): Promise<Article>;
    delete(articleID: string): Promise<void>;
}

export type TCreateArticleParams ={
    title: string,
    description: string,
    thumbnailURL: string,
    // createdAt: string
}

export type TUpdateArticleParams ={
    articleId: string,
    title: string,
    description: string,
    thumbnailURL: string,
}