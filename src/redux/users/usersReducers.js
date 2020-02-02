import { combineReducers } from 'redux';
import {ActionTypes} from './actionTypeUsers'

const positionReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_POSITIONS_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const tokenReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_TOKEN_SUCCESS:
      return payload.token;

    default:
      return state;
  }
};


const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_USERS_SUCCESS:
      return [...state, ...payload.users.sort((a,b) =>  a.registration_timestamp > b.registration_timestamp)];

    case ActionTypes.FETCH_USER_BY_ID_SUCCESS:
    return state;

    case ActionTypes.ADD_USER_SUCCESS:
      return payload.user;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_USERS_REQUEST:
    case ActionTypes.FETCH_POSITIONS_REQUEST:
    case ActionTypes.FETCH_TOKEN_REQUEST:
    case ActionTypes.FETCH_USER_BY_ID_REQUEST:
    case ActionTypes.ADD_USER_REQUEST:
      return true;

    case ActionTypes.FETCH_POSITIONS_SUCCESS:
    case ActionTypes.FETCH_POSITIONS_ERROR:
    case ActionTypes.FETCH_TOKEN_SUCCESS:
    case ActionTypes.FETCH_TOKEN_ERROR:
    case ActionTypes.FETCH_USERS_SUCCESS:
    case ActionTypes.FETCH_USERS_ERROR:
    case ActionTypes.FETCH_USER_BY_ID_SUCCESS:
    case ActionTypes.FETCH_USER_BY_ID_ERROR:
    case ActionTypes.ADD_USER_SUCCESS:
    case ActionTypes.ADD_USER_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_POSITIONS_REQUEST:
    case ActionTypes.FETCH_TOKEN_REQUEST:
    case ActionTypes.FETCH_USERS_REQUEST:
    case ActionTypes.FETCH_USER_BY_ID_REQUEST:
    case ActionTypes.ADD_USER_REQUEST:
      return null;

    case ActionTypes.FETCH_POSITIONS_ERROR:
    case ActionTypes.FETCH_TOKEN_ERROR:
    case ActionTypes.FETCH_USERS_ERROR:
    case ActionTypes.FETCH_USER_BY_ID_ERROR:
    case ActionTypes.ADD_USER_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  positions : positionReducer,
  token : tokenReducer,
  items: itemsReducer,
  loading: loadingReducer,
  error: errorReducer,
});