import {ArticleConvertResponse} from "../../infra/api/service/article_api_convert"

export class Article {
    public static from(from: ArticleConvertResponse): Article {
        return new Article(
            from.id,
            from.title,
            from.description,
            from.createdAt,
            from.thumbnailURL,
            from.userID,
            // from.updated
            // from.message
        )
    }

    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly createdAt: string,
        public readonly thumbnailURL: string,
        public readonly userID: string,
        // public readonly updated: string
        // public readonly message: string
    ) {

    }
}