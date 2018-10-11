import { pipe, assoc, identity, T, cond, propEq } from 'ramda';


// Lib & Constants
import isActionType from './lib/isActionType';
import flows from './constants/flows';
// Actions & State
import AppState, { appStatuses } from './AppState';
import appActions from './appActions';

const viewingReducer = cond([
  [isActionType(appActions.VIEW_LANDING_PAGE), viewLandingPage],
  [isActionType(appActions.CHOOSE_LANGUAGE), chooseLanguage],
  [T, identity]
]);

export default (state = new AppState(), action) =>
  cond([
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

function chooseLanguage(state, { payload }) {
  return pipe(
    assoc('selectedLanguage', payload.language),
    assoc('flow', flows[payload.language]),
    assoc('status', appStatuses.ANWSERING_QUESTIONS)
  )(state);
}