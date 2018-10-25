import { combineEpics } from 'redux-observable';

import analyticsEpic from './epics/analyticsEpic';
import submitUserInformationOnSubmitEpic from './epics/submitUserInformationOnSubmitEpic';
import scrollToTopOnViewChangeEpic from './epics/scrollToTopOnViewChangeEpic';

export default combineEpics(
  analyticsEpic,
  submitUserInformationOnSubmitEpic,
  scrollToTopOnViewChangeEpic
);
