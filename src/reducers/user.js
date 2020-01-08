import {USER_LOGIN, USER_LOGOUT} from '../constants/UserActionTypes';
import {USER_AUTH_TOKEN} from '../constants/LocalStorageName';


let localUser = JSON.parse(localStorage.getItem(USER_AUTH_TOKEN));
const initState = localUser ? {...localUser} : {};


const user = (state = initState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      {
        let user = action.user;
        state = user;
        return state;
      }
    case USER_LOGOUT:
      {
        let user = {};
        state = user;
        return state;
      }
    default: 
      return state;
  }
}

export default user