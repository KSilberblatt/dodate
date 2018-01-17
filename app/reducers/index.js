import session from './session';
import errors from './errors';
import entities from './entities';
import todos from './todos';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  errors,
  session,
  todos
});

export default rootReducer;
