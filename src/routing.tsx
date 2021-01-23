import * as React from "react";
import {
    // Redirect, 
    Route, 
    RouteComponentProps, 
    Switch, 
    withRouter
} from 'react-router-dom';
import {connect} from "react-redux";
import ArticleTop from "./presentation/container/articles_container"
import App from './App';
import AdminLogin from './presentation/container/admin_login_container';
import ArticleCreate from './presentation/container/article_create_container';
// import Sample from './presentation/container/sample_container';
import ArticleContent from './presentation/container/article_container';
import ArticleUpdate from './presentation/container/article_update_container';
import AdminUserContent from './presentation/container/admin_user_container';

interface IProps extends RouteComponentProps<{}>{

}

interface IState {

}

export class Routing extends React.Component<IProps, IState> {
    // constructor(props: IProps) {
    //     super(props);
    //     this.state = {
    //         isInit: true,
    //     };
    // }

    public render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={ArticleTop} />
                    <Route path='/app' component={App} />
                    {/* <Route path='/article' component={ArticleTop} /> */}
                    <Route path='/admin/login' component={AdminLogin} />
                    <Route path='/admin/update' component={AdminUserContent} />
                    <Route path='/article/create' component={ArticleCreate} />
                    <Route path='/article_update/:articleId' component={ArticleUpdate} />
                    <Route path='/article/:articleId' component={ArticleContent} />
                </Switch>
            </React.Fragment>
        )
    }
}

// const mapStateToProps = () => {
//     return {
//     };
// };

// const mapDispatchToProps = () => {
//     return {
//     };
// };

export default (withRouter(connect()(Routing)));