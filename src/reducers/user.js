import {
  USER_LOGIN
} from '../constants/UserActionTypes';

let localUser = JSON.parse(localStorage.getItem('user'));
const initState = localUser ? {...localUser} : {};


const user = (state = initState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      let user = action.user;
      state = user;
      return state;
    default: 
      return state;
  }
}

export default user