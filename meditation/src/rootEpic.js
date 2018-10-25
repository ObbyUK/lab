import { combineEpics } from 'redux-observable';

import analyticsEpic from './epics/analyticsEpic';
import submitUserInformationOnSubmitEpic from './epics/submitUserInformationOnSubmitEpic';

export default combineEpics(
  analyticsEpic,
  submitUserInformationOnSubmitEpic
);
