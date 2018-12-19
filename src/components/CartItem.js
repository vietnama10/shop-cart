import React from 'react';
import {removeCartItem} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const CartItem = ({cartItem, onRemoveCartItem}) => {
  return(
    <li className="cart-item row">
      <span className="item-name col col-sm-6">{cartItem.name}</span>
      <span className="item-price col col-sm-2">${cartItem.price}</span>
      <span className="item-qty col col-sm-2">{cartItem.qty}</span>
      <button 
        className="item-qty col col-sm-2" 
        onClick={() => onRemoveCartItem.removeCartItem(cartItem.id)}
      >
      </button>
    </li>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  onRemoveCartItem: bindActionCreators({removeCartItem}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartItem)

// export default CartItem