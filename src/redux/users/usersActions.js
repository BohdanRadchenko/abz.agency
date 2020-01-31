import {ActionTypes} from './actionTypeUsers'

//FETCH USERS BY ID
// export const fetchFilmsByIdRequest = () => ({
//   type: ActionType.FETCH_FILMS__BY_ID_REQUEST,
// });
//
// export const fetchFilmsByIdSuccess = films => ({
//   type: ActionType.FETCH_FILMS__BY_ID_SUCCESS,
//   payload : {
//     films,
//   }
// });
//
// export const fetchFilmsByIdError = error => ({
//   type: ActionType.FETCH_FILMS__BY_ID_ERROR,
//   payload : {
//     error,
//   }
// });

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
// export const addFilmRequest = () => ({
//   type: ActionType.ADD_FILM_REQUEST,
// });
//
// export const addFilmSuccess = film => ({
//   type: ActionType.ADD_FILM_SUCCESS,
//   payload: {
//     film,
//   },
// });
//
// export const addFilmError = error => ({
//   type: ActionType.ADD_FILM_ERROR,
//   payload: {
//     error,
//   },
// });
