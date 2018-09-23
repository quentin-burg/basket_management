import React from 'react';
import _ from 'lodash';

export default function withFetch(Component, { method, route, body }) {
  class Fetch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        response : null,
      };
    }
    componentDidMount() {
      this.callApi()
        .then(res => this.setState({ response : res }))
        .catch(err => console.log(err));
    }

    callApi() {
      const headers = new Headers({
        'Content-Type' : 'application/json',
      });
      const opts = {
        method,
        body,
        headers,
      };
      return fetch(route, opts)
        .then(response => response.json())
        .then(resJson => {
          if (!resJson.success) {
            throw new Error(resJson.msg);
          }
          return resJson;
        });
    }

    render() {
      const properties = _.omit(this.state.response, ['success', 'msg']);
      return <Component {...properties} {...this.props} />;
    }
  }
  return Fetch;
}
