import React from 'react';
import Users from './components/users/Users';
import Albums from './components/albums/Albums';
import Posts from './components/posts/Posts'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from './components/common/Navigation';


function App() {
  return (
    <Router>
      <div className="container" id="root">
        <Navigation/>
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/albums' component={Albums} />
          <Route path='/' component={Posts} />
            <Users />
           
            <Albums/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
