import { combineEpics } from 'redux-observable';

import analyticsEpic from './epics/analyticsEpic';

export default combineEpics(
  analyticsEpic
);
