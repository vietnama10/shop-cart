import { combineReducers } from 'redux'
import products from './products';
import cart from './cart';
import user from './user';
import mega_menu from './mega_menu';

const rootReducer = combineReducers({
  cart, products, user, mega_menu
})

export default rootReducer
