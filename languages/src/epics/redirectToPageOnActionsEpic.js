import { pipe, __, contains, always, prop } from 'ramda';
import queryString from 'query-string';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import appActions from '../appActions';

var eventToUrlName = {}

var pageChangingActions = [
  appActions.CHOOSE_LANGUAGE,
  appActions.SUBMIT_QUESTIONS,
  appActions.CHOOSE_DATE,
  appActions.BOOK_YOUR_SPOT,
];

export default (action$, store) =>
  action$
    .filter(pipe(prop('type'), contains(__, pageChangingActions)))
    .map(({ type }) => {
      
      if (type === appActions.CHOOSE_LANGUAGE) {
        var urlString = queryString.stringify({
          language: store.value.app.selectedLanguage,
        });
        window.location.href = "/learn?"+urlString;
      }

      if (type === appActions.SUBMIT_QUESTIONS) {
        var urlString = queryString.stringify({
          language: store.value.app.selectedLanguage,
          skillLevel: store.value.app.skillLevel,
          time: store.value.app.time,
          locations: store.value.app.locations,
        });
        window.location.href = "/choose?"+urlString;
      }

      if (type === appActions.CHOOSE_DATE) {
        var urlString = queryString.stringify({
          language: store.value.app.selectedLanguage,
          skillLevel: store.value.app.skillLevel,
          region: store.value.app.region,
          address: store.value.app.address,
          date: store.value.app.date,
          startTime: store.value.app.startTime,
          endTime: store.value.app.endTime
        });
        window.location.href = "/summary?"+urlString;
      }
      
      if (type === appActions.BOOK_YOUR_SPOT) {
        var urlString = queryString.stringify({
          language: store.value.app.selectedLanguage,
          skillLevel: store.value.app.skillLevel,
          region: store.value.app.region,
          address: store.value.app.address,
          date: store.value.app.date,
          startTime: store.value.app.startTime,
          endTime: store.value.app.endTime
        });
        window.location.href = "/checkout?"+urlString;
      }

    })
    .map(always({ type: 'DUD' }));