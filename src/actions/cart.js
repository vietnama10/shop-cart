import * as types from '../constants/CartActionTypes';

export const addToCart = (item, qty) => ({
  type: types.ADD_TO_CART, item, qty
})

export const removeCartItem = itemId => ({
  type: types.REMOVE_CART_ITEM, itemId
})