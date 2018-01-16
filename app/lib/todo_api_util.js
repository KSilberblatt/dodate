export const fetchTodos = (userId) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://dodateweb.herokuapp.com/api/users/${userId}/todos`);
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
