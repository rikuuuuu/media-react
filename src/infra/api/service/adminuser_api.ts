import {IApiClient} from '../client';
import { IAdminUserRepository, TUpdateAdminUserParams } from '../../../domain/repository/adminuser';
import firebase from 'firebase';
import { handleErrorFirebaseAuth } from '../../../domain/usecase/error_handler_firebase';
import { AdminUser } from '../../../domain/model/adminuser';
import { getToken } from './bind_token';
import { BufferWriter, Writer } from "protobufjs";
import {
    common,
    entity, 
    // api
} from "../rpc/api";
import { AdminUserConvertResponse, AdminUserConvertResponseList } from './adminuser_api_convert';

const AdminUserID = entity.AdminUserID;
const AdminUserList = entity.AdminUserList;
const CreateAdminUserRequest = entity.CreateAdminUserRequest;
const UpdateAdminUserReqest = entity.UpdateAdminUserRequest;
const Empty = common.Empty;
const Pager = common.Pager;


class AdminUserAPI implements IAdminUserRepository {

    constructor(readonly apiClient: IApiClient){
    }

    // public onAuthListener(callback: (error: any, data?: {user: (User | null), authState: AuthStateType}) => void): void {
    //     // onAuthStateChanged解除用にローカルに戻り値を保存しておく
    //     this.fireBaseListener = firebase.auth().onAuthStateChanged((authUser: firebase.User | null) => {
    //         if (this.authFlow !== AuthFlowType.CUSTOMER_CREATE && authUser) {
    //             this.userRepository.getMe()
    //                 .then((user: User): void => {
    //                     callback(
    //                         null,
    //                         {
    //                             user,
    //                             authState: AuthStateType.LOGIN_USER
    //                     });
    //                 })
    //                 .catch((error) => {
    //                     // getMeがエラー時の処理
    //                     firebase.auth().signOut()
    //                         .then(() => {
    //                             callback(error);
    //                         })
    //                 })

    //         } else {
    //             // ログオンしていない状態のUserを返す
    //             callback(
    //                 null,
    //                 {
    //                     user:   new User(
    //                         "UNKNOWN USER",
    //                         0,
    //                         null,
    //                         null,
    //                         []
    //                     ),
    //                     authState: AuthStateType.UNKNOWN
    //                 }
    //             )
    //         }
    //     }, (error: any) => {
    //         throw handleErrorFirebaseAuth(error);
    //     });
    // }

    public getMe(): Promise<AdminUser> {
        return new Promise<AdminUser>((resolve, reject) => {
            getToken()
                .then((token: string): Promise<any> => {
                    const req = new Empty();
                    const writer: BufferWriter | Writer = Writer.create();
                    return this.apiClient.postWithToken("/api.AdminUserService/GetMe", token, Empty.encode(req, writer).finish())
                })
                .then((binary: any) => {
                    const res = entity.AdminUser.decode(binary);
                    const resConverted = AdminUserConvertResponse.from(res);
                    const item: AdminUser = AdminUser.from(resConverted);
                    resolve(item);
                })
                .catch((error: Error): void => {
                    reject(error);
                });
        });
    }

    public getAll(page: number, offset: number): Promise<AdminUser[]> {
        return new Promise<AdminUser[]>((resolve, reject) => {
            getToken()
                .then((token: string): Promise<any> => {
                    const req = new Pager();
                    req.page = page
                    req.offset = offset
                    const writer: BufferWriter | Writer = Writer.create();
                    return this.apiClient.postWithToken("/api.AdminUserService/GetAll", token, Pager.encode(req, writer).finish())
                })
                .then((binary: any) => {
                    const res = AdminUserList.decode(binary);
                    const resConverted: AdminUserConvertResponseList = AdminUserConvertResponseList.from(res);
                    const items: AdminUser[] = resConverted.items.map((item: AdminUserConvertResponse): AdminUser => {
                        return AdminUser.from(item);
                    });
                    resolve(items);
                })
                .catch((error: Error): void => {
                    reject(error);
                });
        });
    }

    public login(email: string, password: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then((): Promise<firebase.auth.UserCredential> => {
                    return firebase.auth().signInWithEmailAndPassword(email, password);
                })
                .then((): void => {
                    resolve();
                })
                .catch((error: any): void => {
                    reject(handleErrorFirebaseAuth(error));
                });
        });
    }

    public logout(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            firebase.auth().signOut()
                .then((): void => {
                    resolve();
                })
                .catch((error: any) => {
                    reject(handleErrorFirebaseAuth(error))
                })
        })
    }

    public create(email: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().signOut()
                .then((): Promise<void> => {
                    return this.createFirebaseCustomer(email, password)
                })
                .then((): Promise<AdminUser> => {
                    return this.createAdminUser(email, password)
                })
                .then((user: AdminUser): void =>{
                    resolve(user)
                })
                .catch((error: any) => {
                    reject(error)
                })
            return
        })
    }

    private createFirebaseCustomer(email: string, password: string): Promise<void>{
        return new Promise<void>((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((): void => {
                    resolve()
                })
                .catch((error: any): void => {
                    reject(handleErrorFirebaseAuth(error))
                })
        })
    }

    private createAdminUser(email: string, password: string): Promise<AdminUser> {
        return new Promise<AdminUser>((resolve, reject) => {
            getToken()
                .then((token: string): Promise<any> => {
                    const req = new CreateAdminUserRequest();
                    req.email = email
                    req.password = password
                    const writer: BufferWriter | Writer = Writer.create();
                    return this.apiClient.postWithToken("/api.AdminUserService/Create", token, CreateAdminUserRequest.encode(req, writer).finish())
                })
                .then((binary: any) => {
                    const res = entity.AdminUser.decode(binary);
                    const resConverted = AdminUserConvertResponse.from(res);
                    const item: AdminUser = AdminUser.from(resConverted);
                    resolve(item);
                })
                .catch((error: Error): void => {
                    reject(error);
                });
        })
    }

    public update(updateAdminUserParams: TUpdateAdminUserParams): Promise<AdminUser> {
        return new Promise<AdminUser>((resolve, reject) => {
            getToken()
                .then((token: string): Promise<any> => {
                    const req = new UpdateAdminUserReqest();
                    req.id = updateAdminUserParams.id
                    req.name = updateAdminUserParams.name
                    const writer: BufferWriter | Writer = Writer.create();
                    return this.apiClient.postWithToken("/api.AdminUserService/Update", token, UpdateAdminUserReqest.encode(req, writer).finish())
                })
                .then((binary: any) => {
                    const res = entity.AdminUser.decode(binary);
                    const resConverted = AdminUserConvertResponse.from(res);
                    const item: AdminUser = AdminUser.from(resConverted);
                    resolve(item);
                })
                .catch((error: Error): void => {
                    reject(error);
                });
        })
    }

    public delete(userID: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            getToken()
                .then((token: string): Promise<any> => {
                    const req = new AdminUserID();
                    req.id = userID
                    const writer: BufferWriter | Writer = Writer.create();
                    return this.apiClient.postWithToken("/api.AdminUserService/Delete", token, AdminUserID.encode(req, writer).finish())
                })
                .then((binary: any) => {
                    // const res = AdminUserID.decode(binary);
                    resolve(binary);
                })
                .catch((error: Error): void => {
                    reject(error);
                });
        });
    }

}

const createAdminUserAPI = (apiClient: IApiClient): IAdminUserRepository => {
    return new AdminUserAPI(apiClient);
};

export {createAdminUserAPI};