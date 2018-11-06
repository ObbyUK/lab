import { combineEpics } from 'redux-observable';

import analyticsEpic from './epics/analyticsEpic';
import submitUserInformationOnSubmitEpic from './epics/submitUserInformationOnSubmitEpic';
import scrollToTopOnViewChangeEpic from './epics/scrollToTopOnViewChangeEpic';
import submitPaidSubscriptionOnSubmitPaidSubscriptionEpic from './epics/submitPaidSubscriptionOnSubmitPaidSubscriptionEpic';

export default combineEpics(
  analyticsEpic,
  submitUserInformationOnSubmitEpic,
  scrollToTopOnViewChangeEpic,
  submitPaidSubscriptionOnSubmitPaidSubscriptionEpic
);
