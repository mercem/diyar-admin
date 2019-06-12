import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { setInterceptors } from './config/axios-instance';
import App from './App';
import './index.css';
import {autoLogin} from './store/actions';
import configureStore from './store/configureStore';
import 'semantic-ui-css/semantic.min.css'

const store = configureStore();
store.dispatch(autoLogin());
setInterceptors(store);

const app = (
  <Router>
    <Provider store={store} >
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </Provider>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
