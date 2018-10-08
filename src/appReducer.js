import { identity, T, cond, propEq } from 'ramda';

// Actions & State
import AppState, { appStatuses } from './AppState';
import appActions from './appActions';
// Lib
import isActionType from './lib/isActionType';

const viewingReducer = cond([
  [isActionType(appActions.VIEW), viewApp],
  [T, identity]
]);

export default (state = new AppState(), action) =>
  cond([
    [propEq('status', appStatuses.VIEWING), viewingReducer],
    [T, viewingReducer]
  ])(state, action);

function viewApp(state) {
  console.log('was called');
  return state;
}
