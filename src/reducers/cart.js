import {
  ADD_TO_CART,
  REMOVE_CART_ITEM
} from '../constants/ActionTypes';

const initState = [];
const cart = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      handleAddToCart(action.item, action.qty, state);
      return [...state];
    case REMOVE_CART_ITEM:
      handleRemoveCartItem(action.itemId, state);
      return [...state];
    default:
      return state;
  }
}

const handleAddToCart = (addItem, qty, state) => {
  let exitsItemIndex = null;
  state.map((item, i) => {
    if(item.id === addItem.id) {
      exitsItemIndex = i;
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
  state.map((item, i) => {
    if(item.id === itemId) {
      state.splice(i, 1);
    }
  })
  return state;
}

export default cart