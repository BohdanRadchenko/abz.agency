import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import usersReducers from './users/usersReducers';
import controllerReducers from "./controller/controllerReducers";

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  users: usersReducers,
  controllers : controllerReducers,
  // session :

});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;