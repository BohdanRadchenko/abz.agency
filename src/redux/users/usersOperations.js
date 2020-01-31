import axios from 'axios';
// import {URL} from '../../services/users-api'
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
} from './usersActions';

import {handleTotalPage} from '../controller/controllerActions'

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