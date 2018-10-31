import { curry } from 'ramda';

export default curry((pageName, { type, state }) => ({
  type: 'page',
  payload: [
    'Meditation Test App', 
    pageName,
    {
      path: window.location.pathname || "",
      referrer: document.referrer || "",
      title: document.title || "",
      url: window.location.href
    }
  ]
}));