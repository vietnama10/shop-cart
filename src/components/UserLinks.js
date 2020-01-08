import React from 'react'
import {Link} from 'react-router-dom';

const UserLinks = ({currentUser, logOut}) => {
  if(currentUser.name !== undefined) { 
    return (
      <div className="dropdown user-links">
        <div className="nav-link" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
          <span>Wellcome, {currentUser.name}! </span>
          <i className="fas fa-user"></i>
        </div>
        <div className="dropdown-menu dropdown-menu-right links" aria-labelledby="dropdownMenuButton">
          <Link to="/profile" className="dropdown-item">
            <i className="fas fa-id-card"></i>
            &nbsp;
            <span>My Profile</span>
          </Link>
          <Link to="/history" className="dropdown-item">
            <i className="fas fa-history"></i>
            &nbsp;
            <span>Shopping History</span>
          </Link>
          <span className="dropdown-item" onClick={() => logOut()}>
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Login Out</span>
          </span>
        </div>
      </div>
    )
  } else {
    return (
      <div className="dropdown user-links">
        <Link to="/login" className="nav-link" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user"></i>
        </Link>
      </div>
    )
  }
  
}

export default UserLinks