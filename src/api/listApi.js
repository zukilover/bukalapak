import 'whatwg-fetch';
import config from 'config';

class ListApi {
  static getAllLists(path) {
    return fetch(
      config.API_PATH.list + path,
      {
        headers: {
          'Origin': 'localhost',
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        }
      }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ListApi;
