import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user';
import UserLinksComponent from '../components/UserLinks';

class UserLinks extends Component {

  render() {
    return (
      <UserLinksComponent currentUser={this.props.user} /> 
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