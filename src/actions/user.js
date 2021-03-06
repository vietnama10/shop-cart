import * as types from '../constants/UserActionTypes';
import { request } from '../utils/apiCaller';
import {requestToken as loginApiUrl, currentUser as getCurrentUserApiUrl} from '../apis/apiURL';

export const requestToken = (userName, passWord, functionSetCurrentUser) => {
  return () => {
    return request(loginApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic YnJvd3Nlcjo='
      },
      body: "username=" + userName + "&password=" + passWord + "&grant_type=password"
    }
    ).then(res => {
      if(res.error !== undefined) {
        alert('Login fail!')
      } else if(res.access_token !== undefined) {
        localStorage.setItem('_lancome_shop_oauth', JSON.stringify(res));
        functionSetCurrentUser();
      }
    })
  }
}

export const currentUser = (token) => {
  return dispatch => {
    return request(getCurrentUserApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    ).then(res => {
      localStorage.setItem('_lancome_shop_user', JSON.stringify(res));
      dispatch (userLogedIn(res));
    })
  }
}

export const userLogedOut = () => ({
  type: types.USER_LOGOUT
})

export const userLogedIn = (user) => ({
  type: types.USER_LOGIN, user
})
