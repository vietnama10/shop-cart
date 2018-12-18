import {
  ADD_TO_CART
} from '../constants/ActionTypes';

const initState = []
const cart = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.push(action.item);
      return state;
    default:
      return state;
  }
}

export default cart