import 'whatwg-fetch';
import config from 'config';

class ListApi {
  static getAllLists() {
    return fetch(
      config.API_PATH.list + 'main.json',
      {
        headers: {
          'Origin': 'localhost',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }
}

export default ListApi;
