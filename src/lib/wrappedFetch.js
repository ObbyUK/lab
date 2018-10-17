import { pipe, assoc, concat } from 'ramda';
// import settings from '~/settings';

const wrappedFetch = ({ url, method, headers = {}, body = null }) => {
  return fetch(
    'http://localhost:5000' + url,
    {
      method: method,
      headers: pipe(
        assoc('content-type', 'application/json')
      )(headers),
      body: body ? JSON.stringify(body) : null
    }
  )
    .then(response => {
      return response
        .json()
        .then(assoc('ok', response.ok));
    })
    .catch(error => ({
      code: 400,
      ok: false,
      message: '' + error
    }));
};

export default wrappedFetch;
