import 'whatwg-fetch';
import config from 'config';

class ListApi {
  static getAllLists() {
    return fetch(
      config.API_PATH.list + 'main.json',
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
