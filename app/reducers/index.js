import session from './session';
import errors from './errors';
import entities from './entities';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  errors,
  session
});

export default rootReducer;
