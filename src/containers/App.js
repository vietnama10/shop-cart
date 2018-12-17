import React, { Component, Fragment } from 'react';
import ProductsContainer from './Products';
import '../assets/styles/styles.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
          <ProductsContainer />
      </Fragment>
    );
  }
}

export default App;
