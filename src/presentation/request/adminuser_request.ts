import { Pager } from '../../domain/model/common';
interface IGetMeAdminUserRequest {}

class GetMeAdminUserRequest implements IGetMeAdminUserRequest {}

interface IGetAllAdminUserRequest {
    pager: Pager;
}

class GetAllAdminUserRequest implements IGetAllAdminUserRequest {
    public pager!: Pager;
}

interface ICreateAdminUserRequest {
    email: string;
    password: string;
}

class CreateAdminUserRequest implements ICreateAdminUserRequest {
    public email!: string;
    public password!: string;
}

interface IUpdateAdminUserRequest {
    id: string;
    name: string;
}

class UpdateAdminUserRequest implements IUpdateAdminUserRequest {
    public id!: string;
    public name!: string;
}

interface ILoginAdminUserRequest {
    email: string;
    password: string;
}

class LoginAdminUserRequest implements ILoginAdminUserRequest {
    public email!: string;
    public password!: string;
}

interface IDeleteAdminUserRequest {
    id: string;
}

class DeleteAdminUserRequest implements IDeleteAdminUserRequest {
    public id!: string;
}

export {
    GetMeAdminUserRequest,
    GetAllAdminUserRequest,
    CreateAdminUserRequest,
    UpdateAdminUserRequest,
    LoginAdminUserRequest,
    DeleteAdminUserRequest
}