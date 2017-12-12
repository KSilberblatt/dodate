import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedTodos = createReducer({},{

});

export const todoCount = createReducer(0, {
  [types.ADD_TODO](state, action) {
    return state + 1;
  }
});
