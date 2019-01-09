import { combineEpics } from 'redux-observable';

import sendEmailOnSubmitEmailEpic from './epics/sendEmailOnSubmitEmailEpic';
import scrollToTopOnViewChangeEpic from './epics/scrollToTopOnViewChangeEpic';
import submitPaidSubscriptionOnSubmitPaymentEpic from './epics/submitPaidSubscriptionOnSubmitPaymentEpic';
import submitChargeOnSubmitPaymentEpic from './epics/submitChargeOnSubmitPaymentEpic';
import redirectToRouteEpic from './epics/redirectToRouteEpic';
import updateStateOnRouteChange from './epics/updateStateOnRouteChange';
import analyticsEpic from './epics/analyticsEpic';

export default combineEpics(
  analyticsEpic,
  redirectToRouteEpic,
  sendEmailOnSubmitEmailEpic,
  submitChargeOnSubmitPaymentEpic,
  scrollToTopOnViewChangeEpic,
  updateStateOnRouteChange
);
