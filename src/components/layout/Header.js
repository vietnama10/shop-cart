import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img className="logo" src="https://www.lancome.vn/wp-content/themes/lancome2018/images/logo.png" alt="Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">New Arrival</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Fashion</a>
          </li>
        </ul>
        
        <a className="nav-link shopping-cart" href="#">
          <i className="fas fa-shopping-basket">
            <span className="shop-item-count">0</span>
          </i>
        </a>
        
      </div>
    </nav>
  )
}

export default Header
