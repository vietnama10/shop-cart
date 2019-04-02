import React, { Fragment } from 'react';

const LoginPage = () => {
  return (
    <Fragment>
      <div className="row login-page">
        <div className="col-sm-5 login-form">
          <h2>LogIn</h2>
          <div className="form-group">
            <label htmlFor="usr">Username</label>
            <input type="text" className="form-control" name="username" id="userName" aria-describedby="helpId" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Password"/>
          </div>
          <div className="form-group">
            <input name="submit" id="submitLogIn" className="btn btn-primary" type="button" value="Login"/>
          </div>
        </div>
        <div className="col-sm-2 split-form-line">
          <span>Or</span>
        </div>
        <div className="col-sm-5 signin-form">
          <h2>SignIn</h2>
          <div className="form-group">
            <label htmlFor="usr">Username</label>
            <input type="text" className="form-control" name="username" id="userName" aria-describedby="helpId" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Re-type Password</label>
            <input type="password" className="form-control" name="retypepassword" id="reTypePassword" placeholder="Password"/>
          </div>
          <div className="form-group">
            <input name="submit" id="submitSignIn" className="btn btn-primary" type="button" value="Signin"/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default LoginPage;