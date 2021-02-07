// import {article} from "../rpc/api"
// import { Article } from '../../../domain/model/article';
import { entity } from "../rpc/api";

class ArticleConvertResponse {
    public static from(from: any): ArticleConvertResponse {
        return new ArticleConvertResponse(
            from.id,
            from.title,
            from.description,
            from.createdAt,
            from.thumbnailURL,
            from.userID,
            // from.updated
            // from.message
        )
    };

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
    };
}

class ArticleConvertResponseList {

    public static from(from: entity.ArticleList): ArticleConvertResponseList {
        const items: ArticleConvertResponse[] = [];

        from.items.map((item, index) => {
            return items.push(ArticleConvertResponse.from(item as entity.Article))
        });

        return new ArticleConvertResponseList(
            items,
        )
    };

    constructor(
        public readonly items: ArticleConvertResponse[],
    ) {
    };

}

export {
    ArticleConvertResponse,
    ArticleConvertResponseList
}