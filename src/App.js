import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import Main from './components/Main';
import Login from './components/authComponents/Login';
import Signup from './components/authComponents/Signup';
import { AuthProvider } from './auth/Auth';
import PrivateRoute from './auth/PrivateRoute';



function App() {

  const disabledButtons = useSelector(state => state.app.disabled);
  useEffect(() => {
    const arrButton = document.getElementsByTagName("BUTTON");
    for (let btn of arrButton) {
      btn.disabled = disabledButtons
    }
  })

  return (
    <AuthProvider>
      <Router>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path='/' component={Main} />
      </Router>
    </AuthProvider>
  )

}

export default App;
