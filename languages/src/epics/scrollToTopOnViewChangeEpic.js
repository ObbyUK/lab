import { pipe, __, contains, always, prop } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import appActions from '../appActions';

var pageChangingActions = [
  appActions.CHOOSE_LANGUAGE,
  appActions.SELECT_COURSE_TYPE,
  appActions.SUBMIT_QUESTIONS,
  appActions.CHOOSE_DATE,
  appActions.SUBMIT_PAYMENT_COMPLETE,
  appActions.BOOK_ONE_TO_ONE,
  appActions.SUBMIT,
];

export default (action$, store) =>
  action$
    .filter(pipe(prop('type'), contains(__, pageChangingActions)))
    .map(prop('payload'))
    .map(() => window.scrollTo(0, 0))
    .map(always({ type: 'scrolledToTheTopComplete' }));