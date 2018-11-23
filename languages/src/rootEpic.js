import { combineEpics } from 'redux-observable';

import submitUserInformationOnSubmitEpic from './epics/submitUserInformationOnSubmitEpic';
import scrollToTopOnViewChangeEpic from './epics/scrollToTopOnViewChangeEpic';
import submitChargeOnSubmitCharge from './epics/submitChargeOnSubmitCharge';
import redirectToPageOnActionsEpic from './epics/redirectToPageOnActionsEpic';
import updateStateOnRouteChange from './epics/updateStateOnRouteChange';
import analyticsEpic from './epics/analyticsEpic';

export default combineEpics(
  analyticsEpic,
  redirectToPageOnActionsEpic,
  submitUserInformationOnSubmitEpic,
  submitChargeOnSubmitCharge,
  scrollToTopOnViewChangeEpic,
  updateStateOnRouteChange
);
