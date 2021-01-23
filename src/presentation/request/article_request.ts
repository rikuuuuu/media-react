import {Pager} from "../../domain/model/common";

interface IGetAllArticleRequest {
    pager: Pager;
}

class GetAllArticleRequest implements IGetAllArticleRequest {
    public pager!: Pager;
}

interface IGetArticleByIdRequest {
    articleId: string;
}

class GetArticleByIdRequest implements IGetArticleByIdRequest {
    public articleId!: string;
}

interface ICreateArticleRequest {
    title: string;
    description: string;
    thumbnailURL: string;
    uploadFileThumbnailURL: File | null;
}

class CreateArticleRequest implements ICreateArticleRequest {
    public title!: string;
    public description!: string;
    public thumbnailURL!: string;
    public uploadFileThumbnailURL!: File | null;
}

interface IUpdateArticleRequest {
    articleId: string;
    title: string;
    description: string;
    thumbnailURL: string;
    uploadFileThumbnailURL: File | null;
}

class UpdateArticleRequest implements IUpdateArticleRequest {
    public articleId!: string;
    public title!: string;
    public description!: string;
    public thumbnailURL!: string;
    public uploadFileThumbnailURL!: File | null;
}

interface IDeleteArticleRequest {
    articleId: string;
}

class DeleteArticleRequest implements IDeleteArticleRequest {
    public articleId!: string;
}

export {
    GetAllArticleRequest,
    GetArticleByIdRequest,
    CreateArticleRequest,
    UpdateArticleRequest,
    DeleteArticleRequest
}