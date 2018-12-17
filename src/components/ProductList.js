
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './Product';
import { fetchProducts_Request } from './../actions/index'

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchAllProduct();
  }

  productList = () => {
    var { products } = this.props;
    return products.map((product, i) => {
      return (
        <ProductItem product={product} key={i} />
      )
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row product-list">
          {this.productList()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllProduct: () => dispatch(fetchProducts_Request())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
// export default ProductList;