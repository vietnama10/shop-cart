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
        <a className="nav-link shopping-cart" href="#a">
          <i className="fas fa-shopping-basket">
            <span className="shop-item-count">{this.countItem(this.props.cart)}</span>
          </i>
        </a>
        <Cart cart={this.props.cart} onRemoveCartItem={this.props.onRemoveCartItem}/>
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