import React from 'react';
import CartItem from './CartItem';

const Cart = ({cart, onRemoveCartItem}) => {
  let totalAmount = 0;
  const cartItems = cart.map(cartItem => {
    totalAmount += Math.round(cartItem.price * cartItem.qty * 1000) / 1000;
    return (
      <CartItem cartItem={cartItem} onRemoveCartItem={onRemoveCartItem} key={cartItem.id}/>
    )
  })
  return(
    <div className="cart-info">
      <i className="fas fa-caret-up"></i>
      <ol className="cart-list container">
        <li className="cart-title row">
          <strong className="col col-sm-7">Name</strong>
          <strong className="col col-sm-3">Price</strong>
          <strong className="col col-sm-2">Qty</strong>
        </li>
        {cartItems}
      </ol>
      <div className="cart-total row container">
          <strong className="col col-sm-5">TotalAmount: </strong>
          <strong className="col col-sm-7 text-right">${totalAmount}</strong>
      </div>
    </div>
  )
}

export default Cart