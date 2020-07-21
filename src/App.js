import React from 'react';
import Users from './components/users/Users';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="container" id="root">
        <Users />
      </div>
    </Router>
  );
}

export default App;
