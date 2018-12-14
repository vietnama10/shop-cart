import React, { Component, Fragment } from 'react';
import ProductList from './components/ProductList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  render() {
    return (
      <Fragment>
        <ProductList />
      </Fragment>
    );
  }
}

export default App;
