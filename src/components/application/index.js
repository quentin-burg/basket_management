import React from 'react';
import { Router, Switch, Route } from 'react-router';
import Home from 'components/home';
import Order from 'components/order';
import Bill from 'components/bill';
import history from 'utils/history';
import PropTypes from 'prop-types';

const Application = ({ userId = '35' }) => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" render={() => <Home userId={userId} />} />
      <Route path="/order" render={() => <Order userId={userId} />} />
      <Route path="/bill" render={() => <Bill userId={userId} />} />
    </Switch>
  </Router>
);

Application.propTypes = {
  userId : PropTypes.string,
};

export default Application;
