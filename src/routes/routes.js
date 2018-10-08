import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import HomePage from './../pages/HomePage.jsx';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);
