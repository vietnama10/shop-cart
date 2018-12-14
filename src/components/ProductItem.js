import React from 'react';

const ProductItem = ({product}) => {
  return (
        <div className="card col-sm-3">
          <img className="card-img-top" alt={product.name} src={product.imgUrl}></img>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <a href="https://fb.com" className="btn btn-primary">Add</a>
          </div>
        </div>
  )
}

export default ProductItem;