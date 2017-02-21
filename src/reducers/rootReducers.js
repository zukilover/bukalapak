import { combineReducers } from 'redux';
import {
  listReducer as lists
} from './listReducer';

const rootReducer = combineReducers({
  lists
});

export default rootReducer;
