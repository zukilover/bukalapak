import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash';

export function listReducer(state = initialState.lists, action) {
  switch(action.type) {
    case types.LOAD_LISTS_SUCCESS:
      const list = Object.assign([], _.uniqBy(action.response.categories, 'name'));
      return list;
    default:
      return state;
  }
}

export function referrerReducer(state = initialState.referrer, action) {
  switch(action.type) {
    case types.SET_REFERRER:
      const referrer = Object.assign({}, state, action.response);
      return referrer;
    default:
      return state;
  }
}

export function setActiveReducer(state = initialState.active, action) {
  switch(action.type) {
    case types.SET_ACTIVE:
      const active = Object.assign({}, state, action.response);
      return active;
    default:
      return state;
  }
}

export function setCategoryLevelReducer(state = initialState.categoryLevel, action) {
  switch(action.type) {
    case types.CATEGORY_GO_DOWN:
      return state + 1;
    case types.CATEGORY_GO_UP:
      return state - 1;
    default:
      return state;
  }
}

