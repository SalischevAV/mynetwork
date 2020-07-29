import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {Link} from 'react-router-dom';
import app from "../src/auth/base";
import { AuthContext } from "../src/auth/Auth";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className='card' style={{'width':'200px'}}>
            <h5>Log in</h5>
            <form onSubmit={handleLogin}>
                <div className='form-group'>
                    <label htmlFor='email'> Email</label>
                    <input name="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password </label>
                    <input name="password"
                        type="password"
                        placeholder="Password"
                    />

                </div>
                <button className='btn btn-outline-success' type="submit">Log in</button>
            </form>
            <Link to='/signup' className='btn btn-outline-secondary'>SignUp</Link>
        </div>
    );
};

export default withRouter(Login);