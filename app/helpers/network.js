import { APIs } from '@config/apis';

class NetworkHelper {
  static async fetch(url) {
    let config = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };

    let response = await fetch(url, config);
    let json = {};

    if (response.status == 200 || response.status == 201) {
      json.isSuccess = true;
      json.message = await response.json();
    } else {
      json.isSuccess = false;
      json.message = null;
    }

    return json;
  }
}

export default NetworkHelper;
