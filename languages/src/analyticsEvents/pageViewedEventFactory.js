import { curry } from 'ramda';

export default curry(( pageName, { type, state }) => {
  return {
    type: 'page',
    payload: [
      'Languages App',
      pageName,
      {
        path: window.location.pathname || "",
        referrer: document.referrer || "",
        title: document.title || "",
        url: window.location.href
      },
    ]
  }
});
