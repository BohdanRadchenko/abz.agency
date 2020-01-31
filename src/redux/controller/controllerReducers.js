import { combineReducers } from 'redux';
import { ActionTypes } from './actionTypeController';

const totalPage = (state = 1, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_TOTAL_PAGE:
      return payload;
     default:
      return state;
  }
};

const currentPage = (state = 1, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_URL_PAGE:
      return payload;
    default:
      return state;
  }
};

const modalOpen = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.MODAL_OPEN:
      return true;
    case ActionTypes.MODAL_CLOSE:
      return false;

    default:
      return state;
  }
};


const burgerMenuOpen = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_OPEN_BURGER_MENU:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({
  modalOpen,
  burgerMenuOpen,
  currentPage,
  totalPage,
});