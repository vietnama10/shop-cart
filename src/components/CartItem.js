import React from 'react';


const CartItem = ({cartItem, onRemoveCartItem}) => {
  return(
    <li className="cart-item row">
      <span className="col col-sm-3 item-image">
        <img className="col col-sm-12" src={cartItem.imgUrl} alt={cartItem.name}/>
      </span>
      <span className="col col-sm-8 item-name">
        {cartItem.name}<br/>
        <small>{cartItem.qty} x ${cartItem.price}</small>
      </span>
      <a 
        className="col col-sm-1 item-action" 
        onClick={() => onRemoveCartItem.removeCartItem(cartItem.id)}
        href="#a"
      >
        <i className="far fa-trash-alt"></i>
      </a>
    </li>
  )
}

export default CartItem