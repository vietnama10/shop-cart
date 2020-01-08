import {
  ADD_TO_CART,
  REMOVE_CART_ITEM
} from '../constants/CartActionTypes';

let localCart = JSON.parse(localStorage.getItem('_lancome_shop_cart'));
const initState = localCart ? {...localCart} : {items:[]};

const cart = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    {
      let items = handleAddToCart(action.item, action.qty, [...state.items]);
      let nextState = {...state, items}
      localStorage.setItem('_lancome_shop_cart', JSON.stringify(nextState));
      return nextState;
    }
    case REMOVE_CART_ITEM:
    {
      let items = handleRemoveCartItem(action.itemId, [...state.items]);
      let nextState = {...state, items}
      localStorage.setItem('_lancome_shop_cart', JSON.stringify(nextState));
      return nextState;
    }
    default:
      return {...state};
  }
}

const handleAddToCart = (addItem, qty, items) => {
  let exitsItemIndex = null;
  items.forEach((item, i) => {
    if(item.id === addItem.id) {
      exitsItemIndex = i;
    }
  })
  if(exitsItemIndex !== null) {
    items[exitsItemIndex].qty += qty;
    return items;
  } else {
    addItem["qty"] = qty;
    items.push(addItem);
    return items;
  }
}

const handleRemoveCartItem = (itemId, items) => {
  items.forEach((item, i) => {
    if(item.id === itemId) {
      items.splice(i, 1);
      return false
    }
  })
  return items;
}

export default cart