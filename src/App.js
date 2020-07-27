import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import Users from './components/users/Users';
import Albums from './components/albums/Albums';
import Posts from './components/posts/Posts'
import InformBar from './components/common/InformBar'



function App() {
  const disabledButtons = useSelector(state => state.app.disabled);
  useEffect(() => {
    const arrButton = document.getElementsByTagName("BUTTON");
    for (let btn of arrButton) {
      btn.disabled = disabledButtons
    }
  })


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

export default App;
