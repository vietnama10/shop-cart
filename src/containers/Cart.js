import React, { Component } from 'react'
import { connect } from 'react-redux';
import {removeCartItem} from '../actions';
import { bindActionCreators } from 'redux';

class Cart extends Component {

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
        <h1>Your cart is having {this.countItem(this.props.cart)} for now!</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)