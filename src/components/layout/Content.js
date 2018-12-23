import React from 'react';
import ProductsContainer from '../../containers/Products';
import CartContainer from '../../containers/Cart';
import {Route} from 'react-router-dom';

const Content = () => {
    return (
        <main className="container" id="main-content">
          <Route path="/" exact component={ProductsContainer} />
          <Route path="/cart" exact component={CartContainer} />
        </main>
    )
}

export default Content;