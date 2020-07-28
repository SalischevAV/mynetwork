import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import Users from './users/Users';
import Albums from './albums/Albums';
import Posts from './posts/Posts';
import InformBar from './common/InformBar';


export default  () => {   
return (
    <Router>
      <div className="container" id="root">     
        <InformBar />
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/albums' component={Albums} />
          <Route path='/' component={Posts} />
        </Switch>
      </div>
    </Router>
  );
}