import _ from 'lodash';

export default function callApi({ method, route, body }) {
  const headers = new Headers({
    'Content-Type' : 'application/json',
  });
  const opts = {
    method,
    body : JSON.stringify(body),
    headers,
  };
  return fetch(route, opts)
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
