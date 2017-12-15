
//example
import * as types from './types';
import Api from '../lib/api';
export function addTodo() {
  return {
    type: types.ADD_TODO,

  };
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
