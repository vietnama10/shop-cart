import React, { Component } from 'react'
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import {removeCartItem} from '../actions';
import { bindActionCreators } from 'redux';

class CartContainer extends Component {

  countItem = cart => {
    let itemNumber = 0;
    cart.forEach(item => {
      itemNumber += item.qty;
    })
    return itemNumber;
  } 

  render() {
    return (
      <div className="cart-container">
        <h3>Your cart is having {this.countItem(this.props.cart)} for now!</h3>
        <Cart cart={this.props.cart} onRemoveCartItem={this.props.onRemoveCartItem} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  
})

const mapDispatchToProps = dispatch => ({
  onRemoveCartItem: bindActionCreators({removeCartItem}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)