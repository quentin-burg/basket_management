import React from 'react';
import { Router, RouteProps, Switch } from 'react-router';
import Home from 'components/home';
import Order from 'components/order';
import Bill from 'components/bill';
import history from 'utils/history';
import PropTypes from 'prop-types';

const Application = ({ userId }) => (
  <Router history={history}>
    <Switch>
      <RouteProps exact path="/" component={Home} userId={userId} />
      <RouteProps path="/order" component={Order} userId={userId} />
      <RouteProps path="/bill" component={Bill} userId={userId} />
    </Switch>
  </Router>
);

Application.propTypes = {
  userId : PropTypes.string.isRequired,
};

export default Application;
