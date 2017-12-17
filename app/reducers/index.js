import session from './session';
import errors from './errors';
import entities from './entities';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(Object.assign(
  errors,
  session,
  entities
));

export default rootReducer;
