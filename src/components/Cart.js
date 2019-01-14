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
    <div className="cart-info row">
      <ol className="cart-list col-sm-8">
        {cartItems}
      </ol>
      <div className="checkout-info col-sm-4">
        <div className="cart-total">
          <h2 className="title">Order Summary</h2>
          <button className="btn checkout-secure col-sm-12">Secure Checkout</button>
          <div className="devider col-sm-12">
            <span>Or</span>
          </div>
          <button className="btn checkout-paypal col-sm-12">PayPal Checkout</button>
          <hr></hr>
          <table className="table-total">
            <tbody>
              <tr>
                <td>Subtotal:</td>
                <td>${totalAmount}</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td>${totalAmount * 10 / 100}</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td>$7</td>
              </tr>
            </tbody>
          </table>
          <hr></hr>
          <div className="total">
            <strong className="row">
              <span className="col-sm-8">Total:</span>
              <span className="text-right col-sm-4">${Math.round((totalAmount + (totalAmount * 10 / 100) + 7) * 1000) / 1000}</span>
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart