import React from 'react';
import { Link } from 'react-router-dom';
import MegaMenuContent from './MegaMenuContent';

const MegaMenu = ({menuData}) => {
  const megaItems = menuData.map((item) => {
    return(
      <li className="nav-item" key={item.id}>
        <Link to={item.link} className="nav-link"><i className="fas fa-caret-up"></i>{item.label}</Link>
        <MegaMenuContent contentData={item.content}/>
      </li>
    )
  })
  return (
    <ul className="navbar-nav mr-auto">
    { megaItems }
    </ul>
  )
}

export default MegaMenu