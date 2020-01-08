import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchProducts_Request} from '../actions/products';
import { addToCart } from '../actions/cart';
import { bindActionCreators } from 'redux';
import ProductList from '../components/ProductList';

class Products extends Component {

  componentDidMount() {
    this.props.actions.fetchProducts_Request();
  }

  render() {
    return (
      <ProductList products={this.props.products} actions={this.props.actions}/>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.list
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchProducts_Request, addToCart }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products)