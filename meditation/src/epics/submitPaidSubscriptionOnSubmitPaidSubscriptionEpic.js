import { propEq, prop } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

import wrappedFetch from './../lib/wrappedFetch';
import appActions, { submitPaidSubscriptionCompleteAction } from '../appActions';

export default (action$, store) =>
  action$
    .filter(propEq('type', appActions.SUBMIT_PAID_SUBSCRIPTION))
    .map(prop('payload'))
    .mergeMap((payload) =>
      Observable.from(
        wrappedFetch({
          url: '/api/submit-paid-subscription',
          method: 'POST',
          body: payload
        })
      )
    )
    .map(submitPaidSubscriptionCompleteAction);