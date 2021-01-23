import {AdminUserConvertResponse} from '../../infra/api/service/adminuser_api_convert'

export class AdminUser {
    public static from(from: AdminUserConvertResponse): AdminUser {
        return new AdminUser(
            from.id,
            from.email,
            from.name
        )
    }

    constructor(
        public readonly id: string,
        public readonly email: string,
        public readonly name: string,
    ) {

    }
}