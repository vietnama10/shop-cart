import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user';
import LogInComponent from '../components/LogIn';
import {Redirect} from 'react-router-dom';

class Oauth extends Component {

  componentDidMount = (history) => {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.props.actions.userLogedIn(user);
    }
  }

  userLogIn = (userName, passWord,fnc) => {
    this.props.actions.requestToken(userName, passWord, fnc);
  }

  currentUser = (token) => {
    this.props.actions.currentUser(token);
  }

  render() {
    if(this.props.user.length > 0) {
      return <Redirect to="/profile" />
    } else {
      return (
        <LogInComponent userLogIn={this.userLogIn} currentUser={this.currentUser} history={this.props.history}/> 
      )
    }
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
)(Oauth)