import listApi from '../api/listApi';
import * as types from './actionTypes';

export function loadList(path) {
  return function(dispatch) {
    return listApi.getAllLists(path).then(response => {
      dispatch(loadListSuccess(response));
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
