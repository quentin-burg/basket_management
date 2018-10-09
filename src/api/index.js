import _ from 'lodash';
import config from 'config';

const environment = process.env.ENV || 'dev';
const host = `http://${config[environment].SERVER}:${
  config[environment].PORT_SERVER
}`;

// example route = /order (without host name)
export default function callApi({ method, route, body }) {
  const headers = new Headers({
    'Content-Type' : 'application/json',
  });
  const opts = {
    method,
    body : JSON.stringify(body),
    headers,
  };
  return fetch(host + route, opts)
    .then(response => response.json())
    .then(resJson => {
      if (!resJson.success) {
        throw new Error(resJson.msg);
      }
      return _.omit(resJson, ['success', 'msg']);
    })
    .catch(err => console.error(err));
}
