import {AppError, ErrorType} from "../model/app_error";

export function handleErrorFirebaseAuth(error: any): any {

    if (error.code === "auth/email-already-in-use") {
        return new AppError(error.code, ErrorType.FIREBASE_AUTH_ERROR, "すでにそのEmailアドレスは登録済みです。");
    }

    if (error.code === "auth/invalid-email") {
        return new AppError(error.code, ErrorType.FIREBASE_AUTH_ERROR, "無効なEmailアドレスです。");
    }

    if (error.code === "auth/weak-password") {
        return new AppError(error.code, ErrorType.FIREBASE_AUTH_ERROR, "パスワードが貧弱です。");
    }

    if (error.code === "auth/wrong-password") {
        return new AppError(error.code, ErrorType.FIREBASE_AUTH_ERROR, "メールアドレス、またはパスワードが正しくありません。");
    }

    if (error.code === "auth/user-not-found") {
        return new AppError(error.code, ErrorType.FIREBASE_AUTH_ERROR, "メールアドレス、またはパスワードが正しくありません。");
    }

    return new AppError(error.code, ErrorType.FIREBASE_AUTH_ERROR, error.message);
}
