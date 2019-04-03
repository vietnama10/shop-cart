import fetch from 'cross-fetch';

export const request = (url, data) => {
    return fetch(url, data)
      .then(response => response.json())
      .catch(error => {console.log(error); return false;});
}