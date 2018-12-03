import { pipe, __, contains, always, prop } from 'ramda';
import queryString from 'query-string';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import appActions from '../appActions';
import courseTypes from '../constants/courseTypes';

var eventToUrlName = {}

var pageChangingActions = [
  appActions.CHOOSE_LANGUAGE,
  appActions.SELECT_COURSE_TYPE,
  appActions.SUBMIT_QUESTIONS,
  appActions.CHOOSE_DATE,
  appActions.BOOK_YOUR_SPOT,
];

export default (action$, store) =>
  action$
    .filter(pipe(prop('type'), contains(__, pageChangingActions)))
    .map(({ type, payload }) => {
      
      if (type === appActions.SELECT_COURSE_TYPE && payload.type === courseTypes.WEEKLY) {
        var urlData = {
          language: store.value.app.selectedLanguage,
        };
        var urlString = queryString.stringify(urlData);
        window.history.pushState(urlData, 'learn', "/learn?"+urlString);
      }

      if (type === appActions.SUBMIT_QUESTIONS) {
        var urlData = {
          language: store.value.app.selectedLanguage,
          skillLevel: store.value.app.skillLevel,
          time: store.value.app.time,
          locations: store.value.app.locations,
        };
        var urlString = queryString.stringify(urlData);
        window.history.pushState(urlData, 'choose', "/choose?"+urlString);
      }

      if (type === appActions.CHOOSE_DATE) {
        var urlData = {
          language: store.value.app.selectedLanguage,
          skillLevel: store.value.app.skillLevel,
          region: store.value.app.region,
          address: store.value.app.address,
          date: store.value.app.date,
          startTime: store.value.app.startTime,
          endTime: store.value.app.endTime
        };
        var urlString = queryString.stringify(urlData);
        window.history.pushState(urlData, 'summary', "/summary?"+urlString);
      }
      
      if (type === appActions.BOOK_YOUR_SPOT) {
        var urlData = {
          language: store.value.app.selectedLanguage,
          skillLevel: store.value.app.skillLevel,
          region: store.value.app.region,
          address: store.value.app.address,
          date: store.value.app.date,
          startTime: store.value.app.startTime,
          endTime: store.value.app.endTime
        };
        var urlString = queryString.stringify(urlData);
        window.history.pushState(urlData, 'checkout', "/checkout?"+urlString);
      }

    })
    .map(always({ type: 'DUD' }));