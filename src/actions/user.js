import * as types from '../constants/UserActionTypes';
import { request } from '../utils/apiCaller';
import {requestToken as loginApiUrl, currentUser as getCurrentUserApiUrl} from '../constants/apiURL';

export const requestToken = (userName, passWord,fnc) => {
  return () => {
    return request(loginApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic Y2xpZW50OjEyMzQ1Ng=='
      },
      body: "username=" + userName + "&password=" + passWord + "&grant_type=password"
    }
    ).then(res => {
      localStorage.setItem('oauth', JSON.stringify(res));
      fnc();
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
      localStorage.setItem('user', JSON.stringify(res));
      dispatch (userLogedIn(res));
    })
  }
}

export const userLogedIn = (user) => ({
  type: types.USER_LOGIN, user
})
