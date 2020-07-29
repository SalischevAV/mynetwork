import React, { useCallback, useState } from "react";
import {useDispatch} from 'react-redux';
import { withRouter } from "react-router";
import { showAlert } from '../../redux/actions/actionApp';
import { Link } from 'react-router-dom';
import app from "../../auth/base";

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      dispatch(showAlert(error.message));
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
                value={email}
                placeholder="email"
                required="required"
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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