import { not, __, contains, pipe, prop, cond, propEq, map } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';

// Actions & Lib
import sendAnalyticsEventToSegment from '../lib/sendAnalyticsEventToSegment';
import EventFactoryArray__TypeAndAppState__EventObjectsArray from './../lib/EventFactoryArray__TypeAndAppState__EventObjectsArray';
import actions, { analyticsTrackedAction } from './../appActions';
// Analytics Events
import pageViewedEventFactory from '../analyticsEvents/pageViewedEventFactory';
import conversionEventFactory from '../analyticsEvents/conversionEventFactory';
import bookNowEventFactory from '../analyticsEvents/bookNowEventFactory';
import signUpForFreeEventFactory from '../analyticsEvents/signUpForFreeEventFactory';

const trackedActions = [
  actions.VIEW_LANDING_PAGE,
  actions.CHOOSE_CLASS,
  actions.SUBMIT,
  actions.CHOOSE_DATE,
  actions.SEE_CLASS_OPTIONS,
  actions.SUBMIT_PAID_SUBSCRIPTION_COMPLETE,
];

export default (action$, store) => {
  return action$
    .filter(pipe(propEq('error', true), not))
    .filter(pipe(prop('type'), contains(__, trackedActions)))
    .map((action) => ({ type: action.type, state: store.value.app}))
    .map(cond([
      [
        propEq('type', actions.VIEW_LANDING_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          pageViewedEventFactory('Meditation Test LP'),
        ])
      ],
      [
        propEq('type', actions.SEE_CLASS_OPTIONS), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          signUpForFreeEventFactory
        ])
      ],
      [
        propEq('type', actions.CHOOSE_DATE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          bookNowEventFactory
        ])
      ],
      [
        propEq('type', actions.SUBMIT_PAID_SUBSCRIPTION_COMPLETE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          conversionEventFactory,
        ])
      ],
    ]))
    .mergeMap(map(sendAnalyticsEventToSegment))
    .map(analyticsTrackedAction);
};