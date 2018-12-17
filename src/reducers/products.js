import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT
} from '../constants/ProductActionTypes';

const initState = {
  products: [
    {
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      name: "CHECK PRINT SHIRT",
      price: 110
    }
  ]
}

export default function products(state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS: 
      state = {
        ...state, products: action.products
      };
      return state.products;
    default: 
      return state.products
  }
}