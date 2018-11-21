import { combineEpics } from 'redux-observable';

import redirectOnChooseLanguageEpic from './epics/redirectOnChooseLanguageEpic';
import submitUserInformationOnSubmitEpic from './epics/submitUserInformationOnSubmitEpic';
import scrollToTopOnViewChangeEpic from './epics/scrollToTopOnViewChangeEpic';
import submitPaidSubscriptionOnSubmitPaidSubscriptionEpic from './epics/submitPaidSubscriptionOnSubmitPaidSubscriptionEpic';
import updateUrlParamsOnActionsEpic from './epics/updateUrlParamsOnActionsEpic';
import analyticsEpic from './epics/analyticsEpic';

export default combineEpics(
  analyticsEpic,
  redirectOnChooseLanguageEpic,
  submitUserInformationOnSubmitEpic,
  submitPaidSubscriptionOnSubmitPaidSubscriptionEpic,
  scrollToTopOnViewChangeEpic,
  updateUrlParamsOnActionsEpic
);
