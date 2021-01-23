import {Article} from "../../domain/model/article"

export type ArticlesState = {
    articles: Article[],
    isLoading: boolean
}

export type ArticleState = {
    article: Article | null,
    isLoading: boolean
}