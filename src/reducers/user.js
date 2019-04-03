import {
  USER_LOGIN
} from '../constants/UserActionTypes';

const initState = {}


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