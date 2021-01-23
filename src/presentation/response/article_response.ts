import {Article} from '../../domain/model/article'

interface IGetAllArticleResponse {
    articles?: Article[];
}

class GetAllArticleResponse implements IGetAllArticleResponse {
    public articles?: Article[];
}

interface IGetArticleByIdResponse {
    article?: Article;
}
class GetArticleByIdResponse implements IGetArticleByIdResponse {
    public article?: Article;
}

interface ICreateArticleResponse {
    article?: Article;
}

class CreateArticleResponse implements ICreateArticleResponse {
    public article?: Article;
}

interface IUpdateArticleResponse {
    article?: Article;
}

class UpdateArticleResponse implements IUpdateArticleResponse {
    public article?: Article;
}

interface IDeleteArticleResponse {
}

class DeleteArticleResponse implements IDeleteArticleResponse {
}

export {
    GetAllArticleResponse,
    GetArticleByIdResponse,
    CreateArticleResponse,
    UpdateArticleResponse,
    DeleteArticleResponse
}