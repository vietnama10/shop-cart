import React, { Component, Fragment } from 'react';
import ProductsContainer from './Products';
import Header from '../components/layout/Header';
import '../assets/styles/styles.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container products-container">
          <ProductsContainer />
        </div>      
      </Fragment>
    );
  }
}

export default App;
