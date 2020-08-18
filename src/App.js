import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from './components/Main';
import Login from './components/authComponents/Login';
import { AuthProvider } from './components/authComponents/Auth';
import PrivateRoute from './components/authComponents/PrivateRoute';
import InformBar from './components/common/InformBar';


function App() {
  return (
    <AuthProvider>
      <InformBar />
      <Router>
        <Route exact path='/login' component={Login} />        
        <PrivateRoute path='/' component={Main} />
      </Router>
    </AuthProvider>
  )
}
export default App;