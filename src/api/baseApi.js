import axios from 'axios';

export async function sendGet(url, params = {}) {
  return axios
    .get(url, {
      ...params,
    })
    .then((response) => response.data);
}
