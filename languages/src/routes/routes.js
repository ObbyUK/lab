import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import AppWrap from './../components/AppWrap.jsx';
import AppContainer from './../containers/AppContainer.jsx';

export default (
  <AppWrap>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Route exact path="/learn" component={AppContainer} />
      <Route exact path="/choose" component={AppContainer} />
      <Route exact path="/summary" component={AppContainer} />
      <Route exact path="/checkout" component={AppContainer} />
    </Switch>
  </AppWrap>
);
