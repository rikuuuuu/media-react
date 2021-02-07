import {fork} from "redux-saga/effects";
import { handleCreateAdminUser, handleGetMe, handleLoginAdminUser, handleLogoutAdminUser, handleUpdateAdminUser } from "./adminuser_login_handler";
import {handleCreateArticle, handleDeleteArticle, handleGetAllArticle, handleGetArticle, handleUpdateArticle} from './articles_handler'

function* rootHandler() {
    yield fork(handleGetAllArticle);
    yield fork(handleGetArticle);
    yield fork(handleCreateArticle);
    yield fork(handleUpdateArticle);
    yield fork(handleDeleteArticle);
    yield fork(handleGetMe);
    yield fork(handleLoginAdminUser);
    yield fork(handleLogoutAdminUser);
    yield fork(handleCreateAdminUser);
    yield fork(handleUpdateAdminUser);
}

export default rootHandler;