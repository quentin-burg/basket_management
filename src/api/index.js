import _ from 'lodash';
import config from 'config';

const environment = process.env.ENV || 'dev';
const host = `${config[environment].SERVER}:${config[environment].PORT_SERVER}`;
console.log('hsot', host);

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
  console.log('ROUTE', host + route);
  return fetch(host + route, opts)
    .then(response => response.json())
    .then(resJson => {
      if (!resJson.success) {
        throw new Error(resJson.msg);
      }
      console.log(resJson);
      return _.omit(resJson, ['success', 'msg']);
    })
    .catch(err => console.error(err));
}
