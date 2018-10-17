import { combineEpics } from 'redux-observable';

import redirectOnChooseLanguage from './epics/redirectOnChooseLanguage';
import submitUserInformationOnSubmitEpic from './epics/submitUserInformationOnSubmitEpic';

export default combineEpics(
  redirectOnChooseLanguage,
  submitUserInformationOnSubmitEpic
);
