import { curry } from 'ramda';
import UserId__UserId from './../lib/UserId__UserId';

export default curry(( pageName, { type, state }) => {
  return {
    type: 'page',
    payload: {
      userId: UserId__UserId(),
      name: pageName,
      properties: {
        path: window.location.pathname || "",
        referrer: document.referrer || "",
        title: document.title || "",
        url: window.location.href
      },
		}
  }
});
