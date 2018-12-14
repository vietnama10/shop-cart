import React, { Component, Fragment } from 'react';
import ProductList from './components/ProductList';
import './assets/styles/styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: []
    }
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({...this.state, products: result});
        }
      )
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <ProductList products={this.state.products} />
        </div>
      </Fragment>
    );
  }
}

export default App;
