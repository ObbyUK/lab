import { assoc, identity, T, cond, propEq } from 'ramda';

// Lib & Constants
import isActionType from './lib/isActionType';
// Actions & State
import AppState, { appStatuses } from './AppState';
import appActions from './appActions';


const viewingReducer = cond([
  [T, identity]
]);

export default (state = new AppState(), action) =>
  cond([
    [isActionType(appActions.VIEW_LANDING_PAGE), viewLandingPage],
    [propEq('status', appStatuses.VIEWING), viewingReducer],
    [T, viewingReducer]
  ])(state, action);


function viewLandingPage(state) {
  return assoc(
    'status',
    appStatuses.VIEWING,
    state
  );
}

