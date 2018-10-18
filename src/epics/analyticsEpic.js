import { __, contains, pipe, prop, cond, propEq } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs';
import batchPromises from 'batch-promises';

// Actions & Lib
import Event__AnalyticsPromise from './../lib/Event__AnalyticsPromise';
import EventFactoryArray__TypeAndAppState__EventObjectsArray from './../lib/EventFactoryArray__TypeAndAppState__EventObjectsArray';
import actions, { analyticsTrackedAction } from './../appActions';
// Analytics Events
import startFormEventFactory from '../analyticsEvents/startFormEventFactory';
import completeFormEventFactory from '../analyticsEvents/completeFormEventFactory';
import conversionEventFactory from '../analyticsEvents/conversionEventFactory';

const trackedActions = [
  actions.VIEW_READY_TO_LEARN_PAGE,
  actions.SUBMIT_QUESTIONS,
  actions.SUBMIT,
];

export default (action$, store) => {
  return action$
    .filter(pipe(prop('type'), contains(__, trackedActions)))
    .map((action) => ({ type: action.type, state: store.value.app}))
    .map(cond([
      [
        propEq('type', actions.VIEW_READY_TO_LEARN_PAGE), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([startFormEventFactory])
      ],
      [
        propEq('type', actions.SUBMIT_QUESTIONS), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([completeFormEventFactory])
      ],
      [
        propEq('type', actions.SUBMIT), 
        EventFactoryArray__TypeAndAppState__EventObjectsArray([conversionEventFactory])
      ],
    ]))
    .mergeMap((eventObjectsArray) =>
      Observable
        .fromPromise(batchPromises(2, eventObjectsArray, Event__AnalyticsPromise))
    )
    .map(analyticsTrackedAction);
};