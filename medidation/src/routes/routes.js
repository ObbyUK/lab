import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import AppWrap from './../components/AppWrap.jsx';
import LandingPage from './../pages/LandingPage.jsx';

export default (
  <AppWrap>
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </AppWrap>
);
