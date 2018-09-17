import React from 'react';
import { Router, Route, Switch } from 'react-router';
import Home from 'components/home';
import Order from 'components/order';
import Bill from 'components/bill';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const Application = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/order" component={Order} />
      <Route path="/bill" component={Bill} />
    </Switch>
  </Router>
);

export default Application;
