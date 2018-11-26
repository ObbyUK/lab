import { combineEpics } from 'redux-observable';

import submitUserInformationOnSubmitEpic from './epics/submitUserInformationOnSubmitEpic';
import scrollToTopOnViewChangeEpic from './epics/scrollToTopOnViewChangeEpic';
import submitChargeOnSubmitPaymentEpic from './epics/submitChargeOnSubmitPaymentEpic';
import redirectToPageOnActionsEpic from './epics/redirectToPageOnActionsEpic';
import updateStateOnRouteChange from './epics/updateStateOnRouteChange';
import analyticsEpic from './epics/analyticsEpic';

export default combineEpics(
  analyticsEpic,
  redirectToPageOnActionsEpic,
  submitUserInformationOnSubmitEpic,
  submitChargeOnSubmitPaymentEpic,
  scrollToTopOnViewChangeEpic,
  updateStateOnRouteChange
);
