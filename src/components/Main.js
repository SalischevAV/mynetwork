import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from './users/Users';
import Albums from './albums/Albums';
import Posts from './posts/Posts';
import Navigation from './common/Navigation';


export default  (props) => {   
return (
    <Router>
      <div className="container" id="root">     
        <Navigation />
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/albums' component={Albums} />
          <Route path='/' component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}