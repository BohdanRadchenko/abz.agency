import axios from 'axios';
import {
  fetchPositionsRequest,
  fetchPositionsSuccess,
  fetchPositionsError,
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  fetchTokenRequest,
  fetchTokenSuccess,
  fetchTokenError,
  addUserRequest,
  addUserSuccess,
  addUserError,
} from './usersActions';

import {handleTotalPage} from '../controller/controllerActions'


// FETCH USERS
export const fetchUsers = (page) => dispatch => {
  const screenWidth = document.documentElement.clientWidth;
  let count = 5;
  if(screenWidth < 768) {
    count = 3
  } else {
    count = 6
  }
  const URL  = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`;

  dispatch(fetchUsersRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(handleTotalPage(response.data.total_pages));
      dispatch(fetchUsersSuccess(response.data.users));
    })
    .catch(error => {
      dispatch(fetchUsersError(error));
    });
};


// FETCH TOKEN
export const fetchToken = () => dispatch => {
  const URL  = `https://frontend-test-assignment-api.abz.agency/api/v1/token`;
  dispatch(fetchTokenRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(fetchTokenSuccess(response.data.token));
    })
    .catch(error => {
      dispatch(fetchTokenError(error));
    });
};


//FETCH POSITIONS
export const fetchPositions = () => dispatch => {
  const URL  = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
  dispatch(fetchPositionsRequest());
  axios
    .get(URL)
    .then(response => {
      dispatch(fetchPositionsSuccess(response.data.positions));
    })
    .catch(error => {
      dispatch(fetchPositionsError(error));
    });
};

// POST USERS
  export const fetchPostUser = (data , token) => dispatch => {
    const URL  = "https://frontend-test-assignment-api.abz.agency/api/v1/users";
    dispatch(addUserRequest());
    axios
      .post(URL, data, {headers : {'Token': token}})
      .then(response => {
        dispatch(addUserSuccess(response.data.message));
      })
      .catch(function(error) {
        dispatch(addUserError(error));
      });
  };