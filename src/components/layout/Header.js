import React from 'react'
import MiniCartContainer from '../../containers/MiniCart';
import UserContainer from '../../containers/UserLinks';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link to="/" className="navbar-brand">
        <img className="logo" src="https://www.lancome.vn/wp-content/themes/lancome2018/images/logo.png" alt="Logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#a">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#a">Pricing</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#a">New Arrival</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#a">Fashion</a>
          </li>
        </ul>
        <UserContainer />
        <MiniCartContainer />
      </div>
    </nav>
  )
}

export default Header
