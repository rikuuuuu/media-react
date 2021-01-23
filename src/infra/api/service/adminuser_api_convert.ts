import { entity } from "../rpc/api";

class AdminUserConvertResponse {
    public static from(from: any): AdminUserConvertResponse {
        return new AdminUserConvertResponse(
            from.id,
            from.name,
            from.email,
            // from.password
        )
    };

    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        // public readonly password: string
    ) {
    };
}

class AdminUserConvertResponseList {

    public static from(from: entity.AdminUserList): AdminUserConvertResponseList {
        const items: AdminUserConvertResponse[] = [];

        from.items.map((item, index) => {
            return items.push(AdminUserConvertResponse.from(item as entity.Article))
        });

        return new AdminUserConvertResponseList(
            items,
        )
    };

    constructor(
        public readonly items: AdminUserConvertResponse[],
    ) {
    };

}

export {
    AdminUserConvertResponse,
    AdminUserConvertResponseList
}