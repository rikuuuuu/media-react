import {combineReducers,
    //  Reducer
    } from "redux";
import {connectRouter} from 'connected-react-router';
import history from '../../history';
import adminUserReducer from './adminuser_reducer';
import articleActionReducer from './article_reducer'
import articlesActionReducer from './articles_reducer'

// : Reducer<any> <any>
const appReducer = combineReducers({
    articlesActionReducer,
    articleActionReducer,
    adminUserReducer,
    router: connectRouter(history),
});

export default appReducer;
