import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import AppWrap from './../components/AppWrap.jsx';
import AppPage from './../pages/AppPage.jsx';

export default (
  <AppWrap>
    <Switch>
      <Route exact path="/" component={AppPage} />
      <Route exact path="/learn" component={AppPage} />
      <Route exact path="/choose" component={AppPage} />
      <Route exact path="/summary" component={AppPage} />
      <Route exact path="/checkout" component={AppPage} />
    </Switch>
  </AppWrap>
);
