import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addToCart} from '../actions';
import { bindActionCreators } from 'redux';
import Cart from '../components/Cart';

class CartContainer extends Component {

  countItem = cart => {
    let itemNumber = 0;
    cart.map(item => {
      itemNumber += item.qty;
    })
    return itemNumber;
  } 

  render() {
    return (
      <div className="cart-container">
        <a className="nav-link shopping-cart" href="#">
          <i className="fas fa-shopping-basket">
            <span className="shop-item-count">{this.countItem(this.props.cart)}</span>
          </i>
        </a>
        <Cart cart={this.props.cart}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
 
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)