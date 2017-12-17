
class Api {
  // Code inspire by
  // Jon Lebensold
  // https://www.youtube.com/watch?v=WrDwSRu8oz8&list=PLk083BmAphjtGWyZUuo1BiCS_ZAgps6j5&index=3
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
      'X-Requested-With': 'XMLHttpRequest',

    };
  }

  static get(route){
    return this.xhr(route, null, 'GET');
  }

  static put(route, params){
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params){
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params){
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb){
    const host = "https://dodateweb.herokuapp.com/api";
    const url = `${host}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
    options.headers = Api.headers();
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => { throw err;});
    });
  }

}

export const fetchUsers = () => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `https://dodateweb.herokuapp.com/api/users`);
  xhr.onload = function() {
      if (xhr.status === 200) {
          alert('Users: ' + xhr.responseText);
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
    let myU = xhr.responseText;
    return myU;
};

export const fetchUser = (id) => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `https://dodateweb.herokuapp.com/api/users/${id}`);
  xhr.onload = function() {
      if (xhr.status === 200) {
          alert('User\'s information: ' + xhr.responseText);
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
    let myU = xhr.responseText;
    return myU;
};

export const signup = (user) => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://dodateweb.herokuapp.com/api/users', true);
  xhr.setRequestHeader("Content-Type", 'application/json');
  xhr.onload = function() {
      if (xhr.status === 200) {
          alert('User has been signed up: ' + xhr.responseText);
      }
      else if (xhr.status !== 200) {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
  console.log({user}, xhr);
  let  myU = xhr.send(JSON.stringify({user}));
  return myU;
};

export const login = (user) => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://dodateweb.herokuapp.com/api/session', true);
  xhr.setRequestHeader("Content-Type", 'application/json');
  xhr.onload = function() {
      if (xhr.status === 200) {
          alert('Session has been created: ' + xhr.responseText);
      }
      else if (xhr.status !== 200) {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
  console.log({user}, xhr);
  let  myU = xhr.send(JSON.stringify({user}));
  return myU;
};



export const logout = () => {
  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', `https://dodateweb.herokuapp.com/api/session`);
  xhr.onload = function() {
      if (xhr.status === 200) {
          alert('User\'s has been logged out: ' + xhr.responseText);
      }
      else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
  };
    let myU = xhr.responseText;
    return myU;
};
