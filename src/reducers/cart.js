import {
  ADD_TO_CART,
  REMOVE_CART_ITEM
} from '../constants/ActionTypes';

const initState = [
  {
    "id": 5,
    "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    "name": "'70s RETRO GLAM KEFIAH",
    "price": 20,
    "qty": 1
  }
]
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
    return state;
  } else {
    addItem["qty"] = qty;
    state.push(addItem);
    return state;
  }
}

const handleRemoveCartItem = (itemId, state) => {
  let exitsItemIndex = null;
  state.map((item, i) => {
    if(item.id === itemId) {
      state.splice(i);
    }
  })
  return state;
}

export default cart