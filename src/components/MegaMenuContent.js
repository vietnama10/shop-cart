import React from 'react';
import { Link } from 'react-router-dom';

const MegaMenuContent = ({contentData}) => {
  const columns = contentData.listColumn.map(col => {
    return(
      <div className={"column col-" + col.columnWidth} key={col.id}>
        <h6 className="column-title">{col.label}</h6>
        <ul>
          { 
            col.menuItems.map(item => {
              return(
                <li className="column-item" key={item.id}>
                  <Link to={item.link} className="column-item-link">{item.label}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  })

  return (
    <div className="mega-menu-item content d-flex flex-column">
      {contentData.blockTop && 
        <div className="block-top-content row" dangerouslySetInnerHTML = {{ __html: contentData.blockTop }}>
        </div>
      }
      <div className="columns-content row">
        { columns }
      </div>
      {contentData.blockBottom && 
        <div className="block-bottom-content row" dangerouslySetInnerHTML = {{ __html: contentData.blockBottom }}>
        </div>
      }
    </div>
  )
}

export default MegaMenuContent