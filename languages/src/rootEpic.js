import { combineEpics } from 'redux-observable';

import sendEmailOnSubmitEmailEpic from './epics/sendEmailOnSubmitEmailEpic';
import scrollToTopOnViewChangeEpic from './epics/scrollToTopOnViewChangeEpic';
import submitPaidSubscriptionOnSubmitPaymentEpic from './epics/submitPaidSubscriptionOnSubmitPaymentEpic';
import redirectToPageOnActionsEpic from './epics/redirectToPageOnActionsEpic';
import updateStateOnRouteChange from './epics/updateStateOnRouteChange';
import analyticsEpic from './epics/analyticsEpic';

export default combineEpics(
  analyticsEpic,
  redirectToPageOnActionsEpic,
  sendEmailOnSubmitEmailEpic,
  submitPaidSubscriptionOnSubmitPaymentEpic,
  scrollToTopOnViewChangeEpic,
  updateStateOnRouteChange
);
