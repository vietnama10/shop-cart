import React from 'react';
import {addToCart} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ProductItem = ({product, onAddToCart}) => {
  return (
      <div className="card-container col-sm-3">
        <div className="card product-item">
          <img className="card-img-top" alt={product.name} src={product.imgUrl}></img>
          <div className="card-body">
            <h6 className="card-title">{product.name}</h6>
            <p className="card-text">{product.price}</p>
            <button onClick={() => onAddToCart.addToCart(product, 1)} className="btn btn-primary card-action">Add</button>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  onAddToCart: bindActionCreators({addToCart}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductItem)
// export default ProductItem;