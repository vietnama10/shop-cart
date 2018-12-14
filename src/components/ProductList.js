import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products}) => {
  const productList = products.map((product, i) => {
    return (
        <ProductItem product={product} key={i} />
    )
  })


  return (
    <div className="row product-list">
      {productList}
    </div>
  )
}

export default ProductList;