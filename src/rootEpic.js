import { combineEpics } from 'redux-observable';

import consoleLogOnPageViewEpic from './epics/consoleLogOnPageViewEpic';

export default combineEpics(consoleLogOnPageViewEpic);
