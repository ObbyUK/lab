import { propEq, always } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import appActions from '../appActions';

export default (action$, store) =>
  action$
    .filter(propEq('type', appActions.VIEW))
    .map(() => console.log('page was viewed and intercepted by an epic'))
    .map(always({ type: 'DUD' }));
