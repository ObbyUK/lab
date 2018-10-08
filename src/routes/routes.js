import React from 'react';
import { Route, Switch } from 'react-router-dom';

const who = () => <div>Who you</div>;

export default (
  <div>
    <Switch>
      <Route exact path="/" component={who} />
    </Switch>
  </div>
);
