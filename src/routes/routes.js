import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import ReadyToLearnPage from './../pages/ReadyToLearnPage.jsx';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={ReadyToLearnPage} />
    </Switch>
  </div>
);
