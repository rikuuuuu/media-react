import React from 'react';
import ReactDOM from 'react-dom';
// import {
//   Route,
//   BrowserRouter as Router,
//   RouteComponentProps, 
//   Switch, 
//   withRouter
// } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {ConnectedRouter} from 'connected-react-router';
import Routing from './routing';
import history from './history';
import {Provider} from "react-redux";
// import createStore from './presentation/store/store';
import createAppStore from './presentation/store/app_store';
import firebase from 'firebase';
import {firebaseConfig} from '../src/config/config'
// import createAppStore from './presentation/store/app_store';

// const store = createStore(history);

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSender_Id
});

ReactDOM.render(
  // store={store}
    <Provider store={createAppStore()}>
      <ConnectedRouter history={history}>
        <Routing />
      </ConnectedRouter>
    </Provider>
  // <React.StrictMode>
  //       <Router>
  //         <Switch>
  //           <Route path='/app' component={App} />
  //           <Route path='/article' component={ArticleTop} />
  //         </Switch>
  //       </Router>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
