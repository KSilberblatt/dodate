import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import { combineReducers } from 'redux';
import {
  SELECT_USER,
  INVALIDATE_USER,
  REQUEST_TODOS,
  RECEIVE_TODOS
} from '../actions/todos';

function selectedUser(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_USER:
      return action.user;
    default:
      return state;
  }
}

function todos(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_USER:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.todos,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function todosByUser(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_USER:
    case RECEIVE_TODOS:
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        [action.user]: todos(state[action.user], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todosByUser,
  selectedUser
});

export default rootReducer;
