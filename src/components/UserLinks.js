import React from 'react'
import {Link} from 'react-router-dom';

const UserLinks = ({currentUser}) => {
  if(currentUser.msg !== undefined) { 
    return (
      <div className="dropdown user-links">
        <div className="nav-link" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
          <span>Wellcome, {currentUser.msg.name.split("@")[0]}! </span>
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
          <Link to="/logout" className="dropdown-item">
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Login Out</span>
          </Link>
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