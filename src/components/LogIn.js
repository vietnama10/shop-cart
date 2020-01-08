import React, { Fragment, Component } from 'react';
class Login extends Component {
  onSubmitLogIn = () => {
    let { userLogIn, currentUser, history } = this.props;
    userLogIn(this.refs.userName.value, this.refs.passWord.value, () => {
      currentUser(JSON.parse(localStorage.getItem('_lancome_shop_oauth')).access_token);
      history.push("/");
    });
  }

  render() {
    return (
      <Fragment>
        <div className="row login-page">
          <div className="col-sm-5 login-form">
            <h2>Log In</h2>
            <div className="form-group">
              <label htmlFor="usr">Username</label>
              <input ref="userName" type="text" className="form-control" name="loginusername" id="loginUserName" aria-describedby="helpId" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <input ref="passWord" type="password" className="form-control" name="loginpassword" id="loginPassword" placeholder="Password" />
            </div>
            <div className="form-group">
              <input name="submit" id="submitLogIn" onClick={() => this.onSubmitLogIn()} className="btn btn-primary" type="button" value="Login" />
            </div>
          </div>
          <div className="col-sm-2 split-form-line">
            <span>Or</span>
          </div>
          <div className="col-sm-5 signin-form">
            <h2>Sign In</h2>
            <div className="form-group">
              <label htmlFor="usr">Username</label>
              <input type="text" className="form-control" name="signinusername" id="signinUserName" aria-describedby="helpId" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <input type="password" className="form-control" name="signinpassword" id="signinPassword" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Confirm Password</label>
              <input type="password" className="form-control" name="confirmpassword" id="confirmPassword" placeholder="Confirm Password" />
            </div>
            <div className="form-group">
              <input name="submit" id="submitSignIn" className="btn btn-primary" type="button" value="Signin" />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Login;