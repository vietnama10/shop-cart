import React from 'react';
import HomePage from '../../pages/Home';
import CartPage from '../../pages/Cart';
import LoginPage from '../../pages/LogIn';
import {Route} from 'react-router-dom';
import history from './../common/history';

const Content = () => {
    return (
        <main className="container" id="main-content">
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/login" exact component={LoginPage} history={history} />
        </main>
    )
}

export default Content;