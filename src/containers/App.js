import React, { Component, Fragment } from 'react';
import ProductsContainer from './Products';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {Route} from 'react-router-dom';
import '../assets/styles/styles.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container" id="main-content">
          <Route path="/" exact component={ProductsContainer} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
