
//example
import * as types from './types';
import * as TodoAPIUtil from '../lib/todo_api_util';
import Api from '../lib/api';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const fetchTodos = (userId) => dispatch => (
  TodoAPIUtil.fetchTodos(userId)
    .then(todos => (dispatch(receiveTodos(todos))))
);

export const fetchTodo = (userId, id) => dispatch => (
  TodoAPIUtil.fetchTodo(userId, id)
    .then(todo => (dispatch(receiveTodo(todo))))
);
export function addTodo() {
  return {
    type: types.ADD_TODO,

  };
}
const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

// code inspired by https://www.thepolyglotdeveloper.com/2015/09/make-http-requests-in-ios-with-react-native/
export function postUser(user){
  fetch("https://dodateweb.herokuapp.com/api/session",
  {method: "POST", body: JSON.stringify({user})})
          .then((response) => response.json())
          .then((responseData) => {
              alert(
                "POST Response",
                "Response Body -> " + JSON.stringify(responseData.body)
              );
          })
          .done();
}

//searchWords == ingredients
export function fetchUsers(){
  return (dispatch, getState) => {
    // console.log(getState());
    // make call to web service
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://dodateweb.herokuapp.com/api/users');
    // xhr.onload = function() {
    //     if (xhr.status === 200) {
    //         alert('User\'s name is ' + xhr.responseText);
    //     }
    //     else {
    //         alert('Request failed.  Returned status of ' + xhr.status);
    //     }
    // };
    //   let myU = xhr.send();
    console.log("hi");
    let xhr = new XMLHttpRequest();
    let user = { email:'kevin@kevin.com', password:'password' };
    xhr.open('POST', 'https://dodateweb.herokuapp.com/api/session', true);
    xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Something went wrong.  Name is now ' + xhr.responseText);
        }
        else if (xhr.status !== 200) {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    console.log({user}, xhr);
  let  myU = xhr.send(JSON.stringify({user}));

  console.log(myU);

    // return Api.get(`/users`).then(resp => { console.log(resp);
    // }).catch( (ex) => {
    //   console.log(ex);
    // });
  };
}
