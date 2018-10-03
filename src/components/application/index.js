import React from 'react';
import { Router, Switch, Route } from 'react-router';
import Home from 'components/home';
import Order from 'components/order';
import callApi from 'api';
import Bill from 'components/bill';
import history from 'utils/history';
import PropTypes from 'prop-types';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userId   : 'f3729640-bfe1-11e8-9f74-bdb1f4431500',
      userId   : props.userId,
      articles : [],
    };
  }

  componentDidMount() {
    const userId = this.state.userId;
    callApi({
      method : 'GET',
      route  : `/order/${userId}`,
    }).then(({ articles }) => {
      this.setState({ articles });
      return Promise.resolve(articles);
    });
  }

  render() {
    const { userId, articles } = this.state;
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home userId={userId} articles={articles} />}
          />
          <Route
            path="/order"
            render={() => (
              <Order
                userId={this.state.userId}
                articles={this.state.articles}
              />
            )}
          />
          <Route
            path="/bill"
            render={() => (
              <Bill userId={this.state.userId} articles={this.state.articles} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

Application.propTypes = {
  userId   : PropTypes.string,
  articles : PropTypes.array,
};

export default Application;
