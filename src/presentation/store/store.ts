import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware} from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { History } from 'history';
// import appReducer from '../reducer/app_reducer';
// import { compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from 'redux-saga';
import rootHandler from '../handler/app_handler';
import appReducer from '../reducer/app_reducer'
// import { AppState } from './app_state';

export default function createStore(history: History<any>) {

    // const middleware = composeWithDevTools(applyMiddleware(routerMiddleware(history)));
    
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [];
    middlewares.push(sagaMiddleware);
    middlewares.push(routerMiddleware(history))

    const middleware = composeWithDevTools(applyMiddleware(...middlewares));

    const Store = reduxCreateStore(
        combineReducers({
            reducer: appReducer,
            router: connectRouter(history),
        }),
        middleware,
    )
    sagaMiddleware.run(rootHandler);
    return Store
}