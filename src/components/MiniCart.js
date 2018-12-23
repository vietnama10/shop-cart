import React from 'react';
import MiniCartItem from './MiniCartItem';
import {Link} from 'react-router-dom';

const Cart = ({cart, onRemoveCartItem}) => {
  let totalAmount = 0;
  const cartItems = cart.length > 0 ? (cart.map(cartItem => {
    totalAmount += Math.round(cartItem.price * cartItem.qty * 1000) / 1000;
    return (
      <MiniCartItem 
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
          <Link to="/cart" exact="true" className="col col-sm-4 btn-checkout">CHECK OUT</Link>
      </div>
    </div>
  )
}

export default Cart