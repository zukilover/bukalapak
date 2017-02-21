import { combineReducers } from 'redux';
import {
  listReducer as lists,
  referrerReducer as referrer,
  setCategoryLevelReducer as categoryLevel,
  setActiveReducer as active
} from './listReducer';

const rootReducer = combineReducers({
  lists,
  referrer,
  categoryLevel,
  active
});

export default rootReducer;
