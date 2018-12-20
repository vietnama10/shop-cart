import React from 'react';
import CartItem from './CartItem';

const Cart = ({cart, onRemoveCartItem}) => {
  let totalAmount = 0;
  const cartItems = cart.length > 0 ? (cart.map(cartItem => {
    totalAmount += Math.round(cartItem.price * cartItem.qty * 1000) / 1000;
    return (
      <CartItem 
        cartItem={cartItem} 
        onRemoveCartItem={onRemoveCartItem} 
        key={cartItem.id}
      />
    )
  })) : <p className="cart-empty">This cart is empty!</p>
  return(
    <div className="cart-info">
      <i className="fas fa-caret-up"></i>
      <ol className="cart-list container">
        {cartItems}
      </ol>
      <div className="cart-total row container">
          <strong className="col col-sm-8">Subtotal: ${totalAmount}</strong>
          <button className="col col-sm-4 btn-checkout">CHECK OUT</button>
      </div>
    </div>
  )
}

export default Cart