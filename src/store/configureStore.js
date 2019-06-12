import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import modelsReducer from './reducers/models';

const rootReducer = combineReducers({
  auth: authReducer,
  models: modelsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));