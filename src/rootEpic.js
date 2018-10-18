import { combineEpics } from 'redux-observable';

import redirectOnChooseLanguageEpic from './epics/redirectOnChooseLanguageEpic';
import submitUserInformationOnSubmitEpic from './epics/submitUserInformationOnSubmitEpic';
import scrollToTopOnViewChangeEpic from './epics/scrollToTopOnViewChangeEpic';
import analyticsEpic from './epics/analyticsEpic';

export default combineEpics(
  analyticsEpic,
  redirectOnChooseLanguageEpic,
  submitUserInformationOnSubmitEpic,
  scrollToTopOnViewChangeEpic
);
