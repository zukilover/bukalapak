import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function listReducer(state = initialState.lists, action) {
  switch(action.type) {
    case types.LOAD_LISTS_SUCCESS:
      const list = Object.assign([], state);
      return list.concat(action.categories);
    default:
      return state;
  }
}
