import * as types from '../constants/ActionTypes';
import { request } from '../utils/apiCaller';
import {products as productsApiUrl} from '../constants/apiURL';

export const fetchProducts_Request = () => {
  return dispatch => {
    return request(productsApiUrl, {method: 'GET'}).then(res => {
      dispatch (fetchProducts(res));
    })
  }
}

export const fetchProducts = products => ({
  type: types.FETCH_PRODUCTS, products
})

export const addProduct = product => ({
  type: types.ADD_PRODUCT, product
})

export const deleteProducts = ids => ({
  type: types.DELETE_PRODUCTS, ids
})

export const editProduct = (id, product) => ({
  type: types.EDIT_PRODUCT, id, product
})

export const addToCart = (item, qty) => ({
  type: types.ADD_TO_CART, item, qty
})

export const removeCartItem = itemId => ({
  type: types.REMOVE_CART_ITEM, itemId
})
