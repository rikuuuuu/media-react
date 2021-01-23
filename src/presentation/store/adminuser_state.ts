import { AdminUser } from "../../domain/model/adminuser";

export type AdminUserState = {
    adminuser: AdminUser | null,
    isLoading: boolean
}

// export type AdminUsersState = {
//     adminuser: AdminUser[],
//     isLoading: boolean
// }