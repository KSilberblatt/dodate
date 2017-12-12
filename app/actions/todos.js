
//example
import * as types from './types';
export function addTodo() {
  return {
    type: types.ADD_TODO,
  };
}

export function fetchTodos(searchWords){
  return (dispatch, getState) => {
    console.log(getState());
  };
}
