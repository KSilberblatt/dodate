// Code inspire by
// Jon Lebensold
// https://www.youtube.com/watch?v=WrDwSRu8oz8&list=PLk083BmAphjtGWyZUuo1BiCS_ZAgps6j5&index=3
      // 'X-Mashape-Key': 'qJUsbP6zFGmsh60qUu4Swdr6H4Lvp1xJ8djsns0FkN4OP57g', //TODO change before publish

class Api {
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
