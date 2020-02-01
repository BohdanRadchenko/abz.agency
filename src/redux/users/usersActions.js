import {ActionTypes} from './actionTypeUsers'

//FETCH POSITION
export const fetchPositionsRequest = () => ({
  type: ActionTypes.FETCH_POSITIONS_REQUEST,
});

export const fetchPositionsSuccess = (position) => ({
  type: ActionTypes.FETCH_POSITIONS_SUCCESS,
  payload : position
});

export const fetchPositionsError = error => ({
  type: ActionTypes.FETCH_POSITIONS_ERROR,
  payload : {
    error,
  }
});

// FETCH TOKEN
export const fetchTokenRequest = () => ({
  type: ActionTypes.FETCH_TOKEN_REQUEST,
});

export const fetchTokenSuccess = token => ({
  type: ActionTypes.FETCH_TOKEN_SUCCESS,
  payload : {
    token
  }
});

export const fetchTokenError = error => ({
  type: ActionTypes.FETCH_TOKEN_ERROR,
  payload : {
    error,
  }
});

// FETCH USERS
export const fetchUsersRequest = () => ({
  type: ActionTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = users => ({
  type: ActionTypes.FETCH_USERS_SUCCESS,
  payload : {
    users,
  }
});

export const fetchUsersError = error => ({
  type: ActionTypes.FETCH_USERS_ERROR,
  payload : {
    error,
  }
});

// ADD USERS
export const addUserRequest = () => ({
  type: ActionTypes.ADD_USER_REQUEST,
});

export const addUserSuccess = user => ({
  type: ActionTypes.ADD_USER_SUCCESS,
  payload: {
    user,
  },
});

export const addUserError = error => ({
  type: ActionTypes.ADD_USER_ERROR,
  payload: {
    error,
  },
});
