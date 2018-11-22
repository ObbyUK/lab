import { merge, propEq, always, prop } from 'ramda';
import queryString from 'query-string';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { viewAnyPageAction } from '../appActions';

export default (action$, store) =>
  action$
    .filter(propEq('type', "@@router/LOCATION_CHANGE"))
    .map(prop('payload'))
    .map((payload) => 
      merge(
        queryString.parse(payload.search),
        { pathName: payload.pathname.slice(1) }
      )
    )
    .map(viewAnyPageAction);