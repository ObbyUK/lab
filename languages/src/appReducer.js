import { pipe, assoc, identity, T, cond, propEq } from 'ramda';

// Lib & Constants
import isActionType from './lib/isActionType';
import toggleValueFromCheckboxArray from './lib/toggleValueFromCheckboxArray';
import flows from './constants/flows';
// Actions & State
import AppState, { appStatuses } from './AppState';
import appActions from './appActions';


const viewingReducer = cond([
  [isActionType(appActions.CHOOSE_LANGUAGE), chooseLanguage],
  [T, identity]
]);

const anwseringQuestionsReducer = cond([
  [isActionType(appActions.SELECT_SKILL_LEVEL), selectSkillLevel],
  [isActionType(appActions.SELECT_TIME), toggleTime],
  [isActionType(appActions.TOGGLE_LOCATION), toggleLocation],
  [isActionType(appActions.SUBMIT_QUESTIONS), submitQuestions],
  [T, identity]
]);

const enteringContactInformationReducer = cond([
  [isActionType(appActions.TYPE_NAME), typeName],
  [isActionType(appActions.TYPE_EMAIL), typeEmail],
  [isActionType(appActions.CHOOSE_DATE), chooseDate],
  [isActionType(appActions.SUBMIT_PAID_SUBSCRIPTION_COMPLETE), submitedPaidSubscription],
  [isActionType(appActions.SUBMIT), submit],
  [T, identity]
]);

export default (state = new AppState(), action) =>
  cond([
    [isActionType(appActions.VIEW_LANDING_PAGE), viewLandingPage],
    [isActionType(appActions.VIEW_READY_TO_LEARN_PAGE), viewReadyToLearnPage],

    [propEq('status', appStatuses.VIEWING), viewingReducer],
    [propEq('status', appStatuses.ANWSERING_QUESTIONS), anwseringQuestionsReducer],
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

function viewReadyToLearnPage(state, { payload }) {
  return pipe(
    assoc('selectedLanguage', payload.language),
    assoc('flow', flows[payload.language]),
    assoc('status', appStatuses.ANWSERING_QUESTIONS)
  )(state);
}

function chooseLanguage(state, { payload }) {
  return pipe(
    assoc('selectedLanguage', payload.language),
    assoc('flow', flows[payload.language]),
    assoc('status', appStatuses.ANWSERING_QUESTIONS)
  )(state);
}

function selectSkillLevel(state, { payload }) {
  return assoc('skillLevel', payload.skillLevel, state);
}

function toggleTime(state, { payload }) {
  return assoc(
    'time', 
    toggleValueFromCheckboxArray(payload.time, state.time),
    state
  );
}

function toggleLocation(state, { payload }) {
  return assoc(
    'locations', 
    toggleValueFromCheckboxArray(payload.location, state.locations), 
    state
  );
}

function submitQuestions(state) {
  return assoc(
    'status', 
    appStatuses.ENTERING_CONTACT_INFORMATION, 
    state
  );
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

function chooseDate(state, { payload }) {
  return assoc(
    'date',
    payload.date,
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

function submitedPaidSubscription(state) {
  return assoc(
    'status',
    appStatuses.SUBMITTED,
    state
  );
}
