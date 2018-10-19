import { isNil } from 'ramda';
import cookie from 'js-cookie';
import getUUIDv4 from './getUUIDv4';

export default (userId) => {

  var anonymousUserIdCookieName = 'obbyLangaugesAnonymousUserId';
  var anonymousUserId = cookie.get(anonymousUserIdCookieName);

  if (isNil(userId) && isNil(anonymousUserId)) {
    var newAnonymousUserId = getUUIDv4();
    cookie.set(anonymousUserIdCookieName, newAnonymousUserId);
    return newAnonymousUserId;
  }
  if (!isNil(anonymousUserId)) {
    return anonymousUserId;
  }
  return userId;
}