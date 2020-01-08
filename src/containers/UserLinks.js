import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user';
import UserLinksComponent from '../components/UserLinks';
import {USER_INFO} from '../constants/LocalStorageName';

class UserLinks extends Component {

  logOut = () => {
    localStorage.removeItem(USER_INFO);
    this.props.actions.userLogedOut();
  }

  render() {
    return (
      <UserLinksComponent currentUser={this.props.user} logOut={this.logOut} /> 
    )
  }
  
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UserActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLinks)