import { pipe, __, contains, always, prop } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import appActions from '../appActions';

var pageChangingActions = [
  appActions.CHOOSE_CLASS,
  appActions.SEE_CLASS_OPTIONS,
  appActions.SUBMIT,
  appActions.SUBMIT_PAID_SUBSCRIPTION_COMPLETE,
];

export default (action$, store) =>
  action$
    .filter(pipe(prop('type'), contains(__, pageChangingActions)))
    .map(() => window.scrollTo(0, 0))
    .map(always({ type: 'DUD' }));