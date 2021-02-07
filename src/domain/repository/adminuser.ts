import { AdminUser } from '../model/adminuser';

export interface IAdminUserRepository {
    getMe(): Promise<AdminUser>;
    getAll(page: number, offset: number): Promise<AdminUser[]>;
    create(email: string, password: string): Promise<AdminUser>;
    update(updateAdminUserParams: TUpdateAdminUserParams): Promise<AdminUser>;
    login(email: string, password: string): Promise<void>;
    logout(): Promise<void>;
    delete(userID: string): Promise<void>;
}

export type TUpdateAdminUserParams ={
    id: string,
    name: string
}