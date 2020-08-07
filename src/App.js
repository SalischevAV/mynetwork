import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import Main from './components/Main';
import Login from './components/authComponents/Login';
import Signup from './components/authComponents/Signup';
import { AuthProvider } from './components/authComponents/Auth';
import PrivateRoute from './components/authComponents/PrivateRoute';
import InformBar from './components/common/InformBar';
import Loader from './components/common/Loader';
import { Suspense } from 'react';



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
      <InformBar />    
      <Router>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path='/' component={Main} />
      </Router>
    </AuthProvider> 
  
  )
  
}

export default App;
