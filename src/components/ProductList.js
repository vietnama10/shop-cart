import React, { Fragment } from 'react';
import ProductItem from './Product';

const ProductList = ({products, actions}) => {
  const productList = products.map((product, i) => {
    return (
        <ProductItem product={product} key={i} />
    )
  })

  return (
    <Fragment>
      <div className="row product-list">
        {productList}
      </div>
    </Fragment>
  )
}

export default ProductList; 
