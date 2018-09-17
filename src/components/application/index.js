import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'components/home';
import Order from 'components/order';

const Application = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/order" component={Order} />
    </Switch>
  </BrowserRouter>
);

/*const Application = () => (
  <BrowserRouter>
      <Route path="/" component={Home} />
  </BrowserRouter>
);*/

export default Application;
