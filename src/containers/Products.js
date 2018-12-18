import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as ProductActions from '../actions';
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
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ProductActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products)