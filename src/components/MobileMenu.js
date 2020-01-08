import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const MobileMenu = ({menuData}) => {
    const handleClickExpandClose = (e) => {
      e.stopPropagation();
      let element = e.currentTarget;
      element.classList.contains("expaned") ? element.classList.remove("expaned") : element.classList.add("expaned");
    }
    const renderMenu = menuData.map(item => {
      let columns = item.content && item.content.listColumn ? item.content.listColumn : [];
      let menuItems = item.menuItems ? item.menuItems : [];
      return(
        <li 
        className={`nav-item${columns.length + menuItems.length > 0 ? ' dropdown' : ''}`} 
        key={item.id} 
        onClick={(e) => handleClickExpandClose(e)}>
          { columns.length > 0 ?
            <Fragment>
              <Link className="nav-link" to={item.link}>{item.label}</Link>
              <MobileMenu menuData={columns} />
            </Fragment> :
              menuItems.length > 0 ? 
              <Fragment>
                <Link className="nav-link" to={item.link}>{item.label}</Link>
                <MobileMenu menuData={menuItems} />
              </Fragment> :
              <Link className="nav-link" to={item.link}>{item.label}</Link>
          }
        </li>
      )
    });

    return (
      <ul className="navbar-nav nav-list">
        { renderMenu }
      </ul>
    )
  }

export default (MobileMenu)