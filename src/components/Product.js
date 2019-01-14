import React from 'react';


const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="card-container col-sm-3">
      <div className="card product-item">
        <img 
          className="card-img-top" 
          alt={product.name} 
          src={product.imgUrl}>
        </img>
        <img 
          className="img-animation-addtocart" 
          id={"addtocart-" + product.id} 
          width="0"
          alt={product.name} 
          src={product.imgUrl}>
        </img>
        <div className="card-body">
          <h6 className="card-title">{product.name}</h6>
          <p className="card-text">${product.price}</p>
          <button onClick={onAddToCart} className="btn btn-primary card-action">Add</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem;