import { propEq, always, prop } from 'ramda';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import appActions from '../appActions';

export default (action$, store) =>
  action$
    .filter(propEq('type', appActions.CHOOSE_LANGUAGE))
    .map(prop('payload'))
    .map(({ language }) => window.location.href = `/learn?language=${language}` )
    .map(always({ type: 'DUD' }));