import {ActionTypes} from './actionTypeController'

export const reload = () => ({
  type: ActionTypes.APP_RELOAD,
  payload: {},
});

export const modalOpen = () => ({
  type: ActionTypes.MODAL_OPEN,
  payload: {},
});
export const modalClose = () => ({
  type: ActionTypes.MODAL_CLOSE,
  payload: {},
});

export const burgerMenuOpen = () => ({
  type: ActionTypes.HANDLE_OPEN_BURGER_MENU,
  payload: {},
});

export const handleCurrentPage = page => ({
  type: ActionTypes.HANDLE_URL_PAGE,
  payload : page
});

export const handleTotalPage = value => ({
  type: ActionTypes.HANDLE_TOTAL_PAGE,
  payload: value,
})
