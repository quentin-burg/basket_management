import React from 'react';
// import { Router, Route, Switch } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'components/home';
import Order from 'components/order';
import Bill from 'components/bill';
// import createBrowserHistory from 'history/createBrowserHistory';

// const history = createBrowserHistory();

const Application = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/bill" component={Bill} />
    </Switch>
  </BrowserRouter>
);

export default Application;
