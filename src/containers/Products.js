import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ProductActions from '../actions';
import { bindActionCreators } from 'redux';
import ProductList from '../components/ProductList';

class ProductsContainer extends Component {
  componentDidMount() {
    console.log("didmount");
  }
  render() {
    return <ProductList />
  }
}
const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ProductActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsContainer)