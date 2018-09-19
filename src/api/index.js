import React from 'react';

export default function withFetch(Component, { route, body }) {
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
      return fetch(route, { body }).then(response => {
        const resJson = response.json();
        if (resJson.status !== 200) {
          throw new Error(resJson.message);
        }
        return resJson;
      });
    }

    render() {
      const properties = this.state.response;
      return <Component {...properties} />;
    }
  }
  return Fetch;
}
