import React from 'react';
import './css/App.css';
import {Switch, Route} from 'react-router-dom';

import Main from './pages/index.js';
// the above links the index page to this app.js where it can be given a route(url path) in our react app
import Login from './pages/Login.js';
// the above links the Login page to this app.js where it can be given a route(url path) in our react app
import ChoosePlan from './pages/ChoosePlan.js'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      {/*the above specifies the url path on the browser and the component file to be display there*/}
      <Route path="/login" component={Login} />
      {/*the above specifies the url path on the browser and the component file to be display there*/}
      <Route path="/choose-plan" component={ChoosePlan} />
    </Switch>
  );
}

export default App;
