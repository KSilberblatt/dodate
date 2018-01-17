
//example
import fetch from 'cross-fetch';
import * as types from './types';
import * as TodoAPIUtil from '../lib/todo_api_util';
import Api from '../lib/api';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REQUEST_TODOS = 'REQUEST_TODOS';

export function fetchTodos(userId) {
  return dispatch => {
    dispatch(requestTodos(userId));
    return fetch(`https://dodateweb.herokuapp.com/api/users/${userId}/todos`)
      .then(response => response.json())
      .then(json => receiveTodos(userId, json));
  };
}
export function fetchTodosIfNeeded(userId) {
  return (dispatch, getState) => {
    if (shouldFetchTodos(getState(), userId)) {
      return dispatch(fetchTodos(userId));
    }
  };
}
function shouldFetchTodos(state, userId) {
  const todos = state.todosbyUserId[userId];
  if (!todos) {
    return true;
  } else if (todos.isFetching) {
    return false;
  } else {
    return todos.didInvalidate;
  }
}
function receiveTodos(userId, json) {
  return {
    type: RECEIVE_TODOS,
    userId,
    todos: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}
function requestTodos(userId) {
  return {
    type: REQUEST_TODOS,
    userId
  };
}

export const fetchTodo = (userId, id) => dispatch => (
  TodoAPIUtil.fetchTodo(userId, id)
    .then(todo => (dispatch(receiveTodo(todo))))
);
export function addTodo() {
  return {
    type: types.ADD_TODO,

  };
}


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
    let xhr = new XMLHttpRequest();
    let user = { email:'k2@k2.com', password:'password' };
    xhr.open('POST', 'https://dodateweb.herokuapp.com/api/session', true);
    xhr.setRequestHeader("Content-Type", 'application/json');
    let  myU = xhr.send(JSON.stringify({user}));

    xhr.onload = function() {
        if (xhr.status === 200) {
          let myText = eval('(' + xhr.responseText + ')');
          return myText;
        }
        else if (xhr.status !== 200) {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };




    // return Api.get(`/users`).then(resp => { console.log(resp);
    // }).catch( (ex) => {
    //   console.log(ex);
    // });
  };
}
