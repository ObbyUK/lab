import { combineEpics } from 'redux-observable';

import submitUserInformationOnSubmitEpic from './epics/submitUserInformationOnSubmitEpic';
import scrollToTopOnViewChangeEpic from './epics/scrollToTopOnViewChangeEpic';
import submitPaidSubscriptionOnSubmitPaidSubscriptionEpic from './epics/submitPaidSubscriptionOnSubmitPaidSubscriptionEpic';
import updateUrlParamsOnActionsEpic from './epics/updateUrlParamsOnActionsEpic';
import redirectToPageOnActionsEpic from './epics/redirectToPageOnActionsEpic';
import updateStateOnRouteChange from './epics/updateStateOnRouteChange';
import analyticsEpic from './epics/analyticsEpic';

export default combineEpics(
  analyticsEpic,
  redirectToPageOnActionsEpic,
  submitUserInformationOnSubmitEpic,
  submitPaidSubscriptionOnSubmitPaidSubscriptionEpic,
  scrollToTopOnViewChangeEpic,
  updateStateOnRouteChange
);
