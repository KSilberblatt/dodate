import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  errors,
  session,
  entities
});

export default rootReducer;
