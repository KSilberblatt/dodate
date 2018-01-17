export function fetchTodos(userId) {
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
  };
}

export const fetchTodo = (userId, id) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://dodateweb.herokuapp.com/api/users/${userId}/todos/${id}`);
  xhr.onload = function() {
      if (xhr.status === 200) {
          alert('Todos: ' + xhr.responseText);
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
    let todos = xhr.responseText;
    return todos;
};
