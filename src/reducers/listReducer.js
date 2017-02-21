import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash';

export function listReducer(state = initialState.lists, action) {
  switch(action.type) {
    case types.LOAD_LISTS_SUCCESS:
      const list = Object.assign([], state);
      return list.concat(_.uniqBy(action.response.categories, 'name'));
    default:
      return state;
  }
}

