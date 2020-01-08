import {
  FETCH_PRODUCTS
} from '../constants/ProductActionTypes';


const initState = {
  list: []
};

const products = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {...state, list: action.products};
    default: 
      return {...state};
  }
}

export default products