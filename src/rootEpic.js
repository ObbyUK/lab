import { combineEpics } from 'redux-observable';

import redirectOnChooseLanguage from './epics/redirectOnChooseLanguage';
import submitUserInformationOnSubmitEpic from './epics/submitUserInformationOnSubmitEpic';
import scrollToTopOnViewChange from './epics/scrollToTopOnViewChange';

export default combineEpics(
  redirectOnChooseLanguage,
  submitUserInformationOnSubmitEpic,
  scrollToTopOnViewChange
);
