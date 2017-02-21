import listApi from '../api/listApi';
import * as types from './actionTypes';

export function loadList({path, name}) {
  return function(dispatch) {
    return listApi.getAllLists(path).then(response => {
      dispatch(loadListSuccess(response));
      dispatch(setActive({
        path: path,
        name: name
      }));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadListSuccess(response) {
  return function (dispatch) {
    dispatch({
      type: types.LOAD_LISTS_SUCCESS,
      response
    })
  }
}

export function setReferrer(response) {
  return function (dispatch) {
    dispatch({
      type: types.SET_REFERRER,
      response
    })
  }
}

export function setActive(response) {
  return function (dispatch) {
    dispatch({
      type: types.SET_ACTIVE,
      response
    })
  }
}

export function setCategoryDown() {
  return function (dispatch) {
    dispatch({
      type: types.CATEGORY_GO_DOWN
    })
  }
}

export function setCategoryUp() {
  return function (dispatch) {
    dispatch({
      type: types.CATEGORY_GO_UP
    })
  }
}
