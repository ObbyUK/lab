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
import startFormEventFactory from '../analyticsEvents/startFormEventFactory';
import completeFormEventFactory from '../analyticsEvents/completeFormEventFactory';
import conversionEventFactory from '../analyticsEvents/conversionEventFactory';
import bookNowEventFactory from '../analyticsEvents/bookNowEventFactory';
import choseDateEventFactory from '../analyticsEvents/choseDateEventFactory';
import chooseLanguageEventFactory from '../analyticsEvents/chooseLanguageEventFactory';
import chooseOneToOneCourse from '../analyticsEvents/chooseOneToOneCourse';

const trackedActions = [
  actions.VIEW_LANDING_PAGE,
  actions.VIEW_LANGUAGE_LANDING_PAGE,
  actions.CHOOSE_LANGUAGE,
  actions.SELECT_COURSE_TYPE,
  actions.VIEW_READY_TO_LEARN_PAGE,
  actions.VIEW_CHOOSE_DATE_PAGE,
  actions.VIEW_CLASS_SUMMARY_PAGE,
  actions.VIEW_ONE_TO_ONE_SUMMARY_PAGE,
  actions.VIEW_CHECKOUT_PAGE,
  actions.SUBMIT_PAYMENT_COMPLETE,
];

export default (action$, store) => {
  return action$
    .filter(pipe(propEq('error', true), not))
    .filter(pipe(prop('type'), contains(__, trackedActions)))
    .map((action) => ({ type: action.type, payload: action.payload, state: store.value.app}))
    .map(cond([
      [
        propEq('type', actions.VIEW_LANDING_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          pageViewedEventFactory('Languages Test LP'),
        ])
      ],
      [
        propEq('type', actions.CHOOSE_LANGUAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          chooseLanguageEventFactory
        ])
      ],
      [
        propEq('type', actions.VIEW_LANGUAGE_LANDING_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          pageViewedEventFactory('Languages Test Specific Language LP'),
        ])
      ],
      [
        propEq('type', actions.SELECT_COURSE_TYPE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          startFormEventFactory
        ])
      ],
      [
        propEq('type', actions.VIEW_READY_TO_LEARN_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          pageViewedEventFactory('Languages Test Form'),
        ])
      ],
      [
        propEq('type', actions.VIEW_CHOOSE_DATE_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          completeFormEventFactory
        ])
      ],
      [
        propEq('type', actions.VIEW_CLASS_SUMMARY_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          choseDateEventFactory
        ])
      ],
      [
        propEq('type', actions.VIEW_ONE_TO_ONE_SUMMARY_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          chooseOneToOneCourse
        ])
      ],
      [
        propEq('type', actions.VIEW_CHECKOUT_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([
          bookNowEventFactory
        ])
      ],
      [
        propEq('type', actions.SUBMIT_PAYMENT_COMPLETE), 
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