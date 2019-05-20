import {
  ADD_TO_CART,
  REMOVE_CART_ITEM
} from '../constants/ActionTypes';

let localCart = JSON.parse(localStorage.getItem('_lancome_shop_cart'));
const initState = localCart ? [...localCart] : [];

const cart = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      handleAddToCart(action.item, action.qty, state);
      localStorage.setItem('_lancome_shop_cart', JSON.stringify(state));
      return [...state];
    case REMOVE_CART_ITEM:
      handleRemoveCartItem(action.itemId, state);
      localStorage.setItem('_lancome_shop_cart', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}

const handleAddToCart = (addItem, qty, state, e) => {
  let exitsItemIndex = null;
  state.forEach((item, i) => {
    if(item.id === addItem.id) {
      exitsItemIndex = i;
      return false;
    }
  })
  if(exitsItemIndex !== null) {
    state[exitsItemIndex].qty += qty;
    return [...state];
  } else {
    addItem["qty"] = qty;
    state.push(addItem);
    return state;
  }
  
}

const handleRemoveCartItem = (itemId, state) => {
  state.forEach((item, i) => {
    if(item.id === itemId) {
      state.splice(i, 1);
      return false
    }
  })
  return state;
}

export default cart