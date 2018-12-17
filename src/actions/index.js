import * as types from '../constants/ProductActionTypes';
import { request } from './../api/productApi';
export const fetchProducts_Request = () => {
  return dispatch => {
    return request('http://localhost:3000/products').then(res => {
      dispatch (fetchProducts(res));
    })
  }
}

export const fetchProducts = (products) => ({
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