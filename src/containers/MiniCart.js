import React, { Component } from 'react'
import { connect } from 'react-redux';
import MiniCart from '../components/MiniCart';
import {removeCartItem} from '../actions';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

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
      <div className="mini-cart-container">
        <Link to="/cart" className="nav-link shopping-cart">
          <i className="fas fa-shopping-basket">
            <span className="shop-item-count">{this.countItem(this.props.cart)}</span>
          </i>
        </Link>
        <MiniCart cart={this.props.cart} onRemoveCartItem={this.props.onRemoveCartItem}/>
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