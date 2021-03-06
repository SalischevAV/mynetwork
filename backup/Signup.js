import React, { useCallback, useState } from "react";
import {useDispatch} from 'react-redux';
import { withRouter } from "react-router";
import { showAlert } from '../src/redux/actions/actionApp';
import { Link } from 'react-router-dom';
import app from "../src/auth/base";

const SignUp = ({ history }) => {
  const [user, setUser]=useState({});

  const dispatch = useDispatch();

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, displayName } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
      await app
        .auth()
        .currentUser.updateProfile({
          displayName: displayName.value,
          //uid: app.auth().currentUser.uid,          
        })
    } catch (error) {
      dispatch(showAlert(error.message));
      console.log(error.message)
    }
  }, [history]);

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center">
      <div className="row bg-light border border-primary">
        <div className="col mt-5 col-xs-12 col-md-12 col-lg-12">
          <h5 style={{ "textAlign": "center" }}>Sign up</h5>
          <form onSubmit={handleSignUp}>

            <div className="form-group">
              <input type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                placeholder="email"
                required="required"
                onChange={(e) => setUser(e.target.value)}
              />
              <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div className="form-group">
              <input type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="password"
                required="required"
                value={user.password}
                onChange={(e) => setUser(e.target.value)}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                id="displayName"
                name="displayName"
                placeholder="display name"
                required="required"
                value={user.displayName}
                onChange={(e) => setUser(e.target.value)}
              />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            <div className="form-group">
            </div>
            <div className="form-row">
              <div className="col">
                <button type="submit" className="btn btn-warning btn-block">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col col-xs-12 col-md-12 col-lg-12 mt-1 mb-5">
          <Link to='/login' className="btn btn-primary btn-block">Log In</Link>
        </div>
      </div>
    </div>

  );
};

export default withRouter(SignUp);