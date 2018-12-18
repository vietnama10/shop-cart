import {
  FETCH_PRODUCTS
} from '../constants/ActionTypes';

const initState = []


const products = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: 
      return [...state, ...action.products];
    default: 
      return state;
  }
}

export default products