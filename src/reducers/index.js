import { combineReducers } from 'redux'
import products from './products';
import cart from './cart';
import user from './user';

const rootReducer = combineReducers({
  cart, products, user
  
})

export default rootReducer
