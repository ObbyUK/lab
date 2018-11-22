import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Page
import AppWrap from './../components/AppWrap.jsx';
import LandingPage from './../pages/LandingPage.jsx';
import ReadyToLearnPage from './../pages/ReadyToLearnPage.jsx';
import ChooseDatesPage from './../pages/ChooseDatesPage.jsx';
import ClassSummaryPage from '../pages/ClassSummaryPage.jsx';
import CheckoutPage from '../pages/CheckoutPage.jsx';

export default (
  <AppWrap>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/learn" component={ReadyToLearnPage} />
      <Route exact path="/choose" component={ChooseDatesPage} />
      <Route exact path="/summary" component={ClassSummaryPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
    </Switch>
  </AppWrap>
);
