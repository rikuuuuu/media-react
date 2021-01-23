// import * as React from 'react'

import {
    createStore, 
    applyMiddleware, 
    Store, 
    // GenericStoreEnhancer
} from "redux";
import createSagaMiddleware from 'redux-saga';
// import * as Sentry from '@sentry/browser';
// import createSentryMiddleware from "redux-sentry-middleware";

import appReducer from "../reducer/app_reducer";
import { AppState } from './app_state';
import rootHandler from "../handler/app_handler";

import history from '../../history';
import {routerMiddleware} from 'connected-react-router';

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// import {frontEndConfig} from '../../config/config';

// Sentry.init({
//     dsn: frontEndConfig.sentryDsn,
//     environment: process.env.REACT_APP_LIBERA_ENV,
// });
// Sentry.setTag("app", "liberawroks-web");

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
// const sentryMiddleware = createSentryMiddleware(Sentry, {
//     breadcrumbDataFromAction: (action: any) => {
//         if (action.item) {
//             return { payload: action.item };
//         }
//         return undefined;

//     },
//     filterBreadcrumbActions: (action: any) => {
//         const filterList: string[] = [
//             "@@redux-form/CHANGE"
//         ];
//         return !filterList.includes(action.type);
//     }
// });

middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);
// middlewares.push(sentryMiddleware);

const middleware = composeWithDevTools(applyMiddleware(...middlewares));

const createStoreWithMiddleware = middleware(createStore);

const createAppStore = (): Store<AppState> => {
    // <AppState>
    const store: Store = createStoreWithMiddleware(appReducer);
    sagaMiddleware.run(rootHandler);
    return store;
};

export default createAppStore;
