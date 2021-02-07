import { AdminUser } from '../../domain/model/adminuser';

interface IGetMeAdminUserResponse {
    adminuser?: AdminUser;
}

class GetMeAdminUserResponse implements IGetMeAdminUserResponse {
    public adminuser?: AdminUser;
}

interface IGetAllAdminUserResponse {
    adminusers?: AdminUser[];
}

class GetAllAdminUserResponse implements IGetAllAdminUserResponse {
    public adminusers?: AdminUser[];
}

interface ICreateAdminUserResponse {
    adminuser?: AdminUser;
}

class CreateAdminUserResponse implements ICreateAdminUserResponse {
    public adminuser?: AdminUser;
}

interface ILoginAdminUserResponse {}

class LoginAdminUserResponse implements ILoginAdminUserResponse {}

interface IUpdateAdminUserResponse {
    adminuser: AdminUser;
}

class UpdateAdminUserResponse implements IUpdateAdminUserResponse {
    public adminuser!: AdminUser;
}

interface IDeleteAdminUserResponse {}

class DeleteAdminUserResponse implements IDeleteAdminUserResponse {}

export {
    GetMeAdminUserResponse,
    GetAllAdminUserResponse,
    CreateAdminUserResponse,
    LoginAdminUserResponse,
    UpdateAdminUserResponse,
    DeleteAdminUserResponse
}
