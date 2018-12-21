import React from 'react'
import CartContainer from '../../containers/Cart'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#a">
        <img className="logo" src="https://www.lancome.vn/wp-content/themes/lancome2018/images/logo.png" alt="Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#a">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#a">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#a">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#a">New Arrival</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#a">Fashion</a>
          </li>
        </ul>
        <CartContainer />
      </div>
    </nav>
  )
}

export default Header
