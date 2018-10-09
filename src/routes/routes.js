import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import AppWrap from './../components/AppWrap.jsx';
import ReadyToLearnPage from './../pages/ReadyToLearnPage.jsx';

export default (
  <AppWrap>
    <Switch>
      <Route exact path="/" component={ReadyToLearnPage} />
    </Switch>
  </AppWrap>
);
