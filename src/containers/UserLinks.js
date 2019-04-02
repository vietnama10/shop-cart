import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class UserLinks extends Component {

  render() {
    return (
      <div className="dropdown user-links">
        <Link to="/login" className="nav-link" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user"></i>
        </Link>
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
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLinks)