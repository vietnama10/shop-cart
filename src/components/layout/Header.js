import React from 'react'
import { Link } from 'react-router-dom';
import MiniCartContainer from '../../containers/MiniCart';
import UserLinksContainer from '../../containers/UserLinks';
import MegaMenuContainer from '../../containers/MegaMenu';
import MobileMenuContainer from '../../containers/MobileMenu';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavMobile" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/" className="navbar-brand">
        <img className="logo" src="https://www.lancome.vn/wp-content/themes/lancome2018/images/logo.png" alt="Logo" />
      </Link>
      <div className="nav-links-mobile">
        <UserLinksContainer />
        <MiniCartContainer />
      </div>
      <div className="collapse navbar-collapse " id="navbarNav">
        <MegaMenuContainer />
        <UserLinksContainer />
        <MiniCartContainer />
      </div>
      <div className="collapse navbar-collapse mobile" id="navbarNavMobile">
        <MobileMenuContainer />
      </div>
    </nav>
  )
}

export default Header
