import { __, contains, pipe, prop, cond, propEq, map } from 'ramda';
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
import startFormEventFactory from '../analyticsEvents/startFormEventFactory';
import completeFormEventFactory from '../analyticsEvents/completeFormEventFactory';
import conversionEventFactory from '../analyticsEvents/conversionEventFactory';
import bookNowEvent from '../analyticsEvents/bookNowEvent';

const trackedActions = [
  actions.VIEW_LANDING_PAGE,
  actions.VIEW_READY_TO_LEARN_PAGE,
  actions.SUBMIT_QUESTIONS,
  actions.CHOOSE_DATE,
  actions.SUBMIT_PAID_SUBSCRIPTION_COMPLETE,
];

export default (action$, store) => {
  return action$
    .filter(pipe(prop('type'), contains(__, trackedActions)))
    .map((action) => ({ type: action.type, state: store.value.app}))
    .map(cond([
      [
        propEq('type', actions.VIEW_LANDING_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          pageViewedEventFactory('Languages Test LP'),
        ])
      ],
      [
        propEq('type', actions.VIEW_READY_TO_LEARN_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          pageViewedEventFactory('Languages Test Form'),
          startFormEventFactory
        ])
      ],
      [
        propEq('type', actions.SUBMIT_QUESTIONS), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          completeFormEventFactory
        ])
      ],
      [
        propEq('type', actions.CHOOSE_DATE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          bookNowEvent
        ])
      ],
      [
        propEq('type', actions.SUBMIT_PAID_SUBSCRIPTION_COMPLETE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          conversionEventFactory,
        ])
      ],
    ]))
    .mergeMap((array) => {
      return map(sendAnalyticsEventToSegment, array);
    })
    .map(analyticsTrackedAction);
};