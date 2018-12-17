import fetch from 'cross-fetch';
export const request=(url)=> {
    return fetch(url)
      .then(response => response.json())
      .catch(error => {console.log(error); return false;});
}
