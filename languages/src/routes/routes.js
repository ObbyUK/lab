import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import AppWrap from './../components/AppWrap.jsx';
import AppPage from './../pages/AppPage.jsx';

export default (
  <AppWrap>
    <Switch>
      
      {/* LANDING PAGES */}
      <Route exact path="/" component={AppPage} />
      <Route exact path="/french" component={AppPage} />
      <Route exact path="/spanish" component={AppPage} />
      <Route exact path="/german" component={AppPage} />
      <Route exact path="/italian" component={AppPage} />

      {/* FLOW PAGES */}
      <Route exact path="/learn" component={AppPage} />
      <Route exact path="/choose" component={AppPage} />
      <Route exact path="/summary" component={AppPage} />
      <Route exact path="/checkout" component={AppPage} />
    </Switch>
  </AppWrap>
);
