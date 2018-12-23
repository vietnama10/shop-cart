import React, { Component, Fragment } from 'react';
import Header from '../components/layout/Header';
import Content from '../components/layout/Content';
import Footer from '../components/layout/Footer';
import '../assets/styles/styles.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
