import { propEq, prop, isEmpty } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

import wrappedFetch from '../lib/wrappedFetch';
import appActions, { submitPaidSubscriptionCompleteAction } from '../appActions';

export default (action$, store) =>
  action$
    .filter(propEq('type', appActions.SUBMIT_PAID_SUBSCRIPTION))
    .map(prop('payload'))
    .mergeMap((payload) => {
      if (isEmpty(store.value.app.formError)) {
        return Observable.from(
          wrappedFetch({
            url: '/api/submit-charge',
            method: 'POST',
            body: payload
          })
        );
      }
      return [store.value.app.formError];
    })
    .map(submitPaidSubscriptionCompleteAction);