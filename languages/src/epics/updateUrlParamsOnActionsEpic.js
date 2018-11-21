import { pipe, __, contains, always, prop } from 'ramda';
import queryString from 'query-string';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import appActions from '../appActions';

var pageChangingActions = [
  appActions.SELECT_SKILL_LEVEL,
  appActions.SELECT_TIME,
  appActions.TOGGLE_LOCATION,
  appActions.CHOOSE_DATE,
];

export default (action$, store) =>
  action$
    .filter(pipe(prop('type'), contains(__, pageChangingActions)))
    .map(prop('payload'))
    .map(() => {

      var urlData = {
        skillLevel: store.value.app.skillLevel,
        time: store.value.app.time,
        locations: store.value.app.locations,
      };
      var urlString = queryString.stringify(urlData);

      window.history.pushState(urlData,'', `${window.location.pathname}?${urlString}`);

    })
    .map(always({ type: 'DUD' }));