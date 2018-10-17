import { propEq, always, prop } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

import wrappedFetch from './../lib/wrappedFetch';
import appActions, { submitCompleteAction } from '../appActions';

export default (action$, store) =>
  action$
    .filter(propEq('type', appActions.SUBMIT))
    // .map(prop('payload'))
    .mergeMap((action) =>
      Observable.from(
        wrappedFetch({
          url: '/api/submit',
          method: 'POST',
          body: {
            email: "yohoooo",
            name: "who what where",
          }
        })
      )
    )
    .map(submitCompleteAction);