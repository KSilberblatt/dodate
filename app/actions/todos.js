
//example
import * as types from './types';
export function addTodo() {
  return {
    type: types.ADD_TODO,

  };
}

//searchWords == ingredients
export function fetchTodos(searchWords){
  return (dispatch, getState) => {
    console.log(getState());
    // make call to web service
    const params= [
      `ingredients=${encodeURIComponent(ingredients)}`,
      `fillIngredients=false`,
      `limitLicense=false`,
      `number=20`,
      `ranking1`,
    ].join('&');
    return Api.get()
  };
}
export function fetchUsers(){
  return (dispatch, getState) => {
    console.log(getState());
    // make call to web service
    const params = [
      ``
    ]
  };
}
