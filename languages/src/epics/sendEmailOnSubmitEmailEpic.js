import { propEq } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

import wrappedFetch from '../lib/wrappedFetch';
import appActions, { submitEmailCompleteAction } from '../appActions';

export default (action$, store) =>
  action$
    .filter(propEq('type', appActions.SUBMIT_EMAIL))
    .mergeMap((action) =>
      Observable.from(
        wrappedFetch({
          url: '/api/submit-lead',
          method: 'POST',
          body: action.payload
        })
      )
    )
    .map(submitEmailCompleteAction);