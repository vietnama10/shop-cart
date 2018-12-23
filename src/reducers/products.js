import {
  FETCH_PRODUCTS
} from '../constants/ActionTypes';

const initState = []


const products = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      let products = action.products;
      state = products;
      return state;
    default: 
      return state;
  }
}

export default products