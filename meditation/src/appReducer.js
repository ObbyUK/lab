import { pipe, assoc, identity, T, cond, propEq } from 'ramda';

// Lib & Constants
import isActionType from './lib/isActionType';
// Actions & State
import AppState, { appStatuses } from './AppState';
import appActions from './appActions';


const viewingReducer = cond([
  [isActionType(appActions.CHOOSE_CLASS), chooseClass],
  [T, identity]
]);

const enteringContactInformationReducer = cond([
  [isActionType(appActions.TYPE_NAME), typeName],
  [isActionType(appActions.TYPE_EMAIL), typeEmail],
  [isActionType(appActions.SUBMIT), submit],
  [T, identity]
]);

export default (state = new AppState(), action) =>
  cond([
    [isActionType(appActions.VIEW_LANDING_PAGE), viewLandingPage],
    [propEq('status', appStatuses.VIEWING), viewingReducer],
    [propEq('status', appStatuses.ENTERING_CONTACT_INFORMATION), enteringContactInformationReducer],
    [T, viewingReducer]
  ])(state, action);


function viewLandingPage(state) {
  return assoc(
    'status',
    appStatuses.VIEWING,
    state
  );
}

function chooseClass(state, action) {
  console.log('choose class');
  return pipe(
    assoc('status', appStatuses.ENTERING_CONTACT_INFORMATION),
    assoc('chosenClass', action.payload.chosenClass)
  )(state);
}

function typeName(state, { payload }) {
  return assoc(
    'name', 
    payload.name, 
    state
  );
}

function typeEmail(state, { payload }) {
  return assoc(
    'email',
    payload.email,
    state
  );
}

function submit(state) {
  return assoc(
    'status',
    appStatuses.SUBMITTED,
    state
  );
}
