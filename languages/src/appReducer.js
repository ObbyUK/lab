import { isEmpty, pipe, assoc, identity, T, cond, propEq } from 'ramda';

// Lib & Constants
import isActionType from './lib/isActionType';
import isFullArray from './lib/isFullArray';
import isValidEmail from './lib/isValidEmail';
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

const viewingClassOptionsReducer = cond([
  [isActionType(appActions.CHOOSE_DATE), chooseDate],
  [T, identity]
]);

const viewingClassSummaryReducer = cond([
  [isActionType(appActions.BOOK_YOUR_SPOT), bookYourSpot],
  [T, identity]
]);

const checkingOutReducer = cond([
  [isActionType(appActions.TYPE_FIRST_NAME), typeName],
  [isActionType(appActions.TYPE_LAST_NAME), typeLastName],
  [isActionType(appActions.TYPE_EMAIL), typeEmail],
  [isActionType(appActions.TYPE_PHONE_NUMBER), typePhoneNumber],
  [isActionType(appActions.SUBMIT_PAID_SUBSCRIPTION), submitPaidSubscription],
  [T, identity]
]);

const submittingReducer = cond([
  [isActionType(appActions.SUBMIT_PAID_SUBSCRIPTION_COMPLETE), paidSubscriptionSubmitted],
  [T, identity]
]);

export default (state = new AppState(), action) =>
  cond([
    [isActionType(appActions.VIEW_PAGE), viewAnyPage],
    
    [isActionType(appActions.VIEW_LANDING_PAGE), viewLandingPage],
    [isActionType(appActions.VIEW_READY_TO_LEARN_PAGE), viewReadyToLearnPage],
    [isActionType(appActions.VIEW_CHOOSE_DATE_PAGE), viewChooseDatePage],
    [isActionType(appActions.VIEW_CLASS_SUMMARY_PAGE), viewClassSummaryPage],
    [isActionType(appActions.VIEW_CHECKOUT_PAGE), viewCheckoutPage],

    [propEq('status', appStatuses.VIEWING), viewingReducer],
    [propEq('status', appStatuses.ANWSERING_QUESTIONS), anwseringQuestionsReducer],
    [propEq('status', appStatuses.VIEWING_CLASS_OPTIONS), viewingClassOptionsReducer],
    [propEq('status', appStatuses.VIEWING_CLASS_SUMMARY), viewingClassSummaryReducer],
    [propEq('status', appStatuses.CHECKING_OUT), checkingOutReducer],
    [propEq('status', appStatuses.SUBMITTING), submittingReducer],

    [T, viewingReducer]
  ])(state, action);


// VIEW PAGES
function viewAnyPage(state, { payload }) {
  var language = payload.language||state.language;
  console.log(payload)
  var pathNameToStatus = {
    "": appStatuses.VIEWING,
    learn: appStatuses.ANWSERING_QUESTIONS,
    choose: appStatuses.VIEWING_CLASS_OPTIONS,
    summary: appStatuses.VIEWING_CLASS_SUMMARY,
    checkout: appStatuses.CHECKING_OUT
  }
  return pipe(
    assoc('status', pathNameToStatus[payload.pathName]),
    assoc('flow', flows[language]),
    assoc('selectedLanguage', language),
    assoc('skillLevel', payload.skillLevel||state.skillLevel),
    assoc('time', payload.time || state.time),
    assoc('locations', payload.locations || state.locations),
    assoc('region', payload.region||state.region),
    assoc('address', payload.address||state.address),
    assoc('date', payload.date||state.date),
    assoc('startTime', payload.startTime||state.startTime),
    assoc('endTime', payload.endTime||state.endTime),
  )(state);
}

function viewLandingPage(state) {
  return assoc(
    'status',
    appStatuses.VIEWING,
    state
  );
}

function viewReadyToLearnPage(state, { payload }) {
   return pipe(
      assoc('status', appStatuses.ANWSERING_QUESTIONS),
      assoc('selectedLanguage', payload.language),
      assoc('flow', flows[payload.language]),
      assoc('skillLevel', payload.skillLevel || null),
      assoc('time', payload.time || []),
      assoc('locations', payload.locations || []),
  )(state);
}

function viewChooseDatePage(state, { payload }) {
   return pipe(
      assoc('status', appStatuses.VIEWING_CLASS_OPTIONS),
      assoc('selectedLanguage', payload.language),
      assoc('flow', flows[payload.language]),
      assoc('skillLevel', payload.skillLevel || null),
      assoc('time', payload.time || []),
      assoc('locations', payload.locations || []),
  )(state);
}

function viewClassSummaryPage(state, { payload }) {
   return pipe(
      assoc('status', appStatuses.VIEWING_CLASS_SUMMARY),
      assoc('selectedLanguage', payload.language),
      assoc('flow', flows[payload.language]),
      assoc('skillLevel', payload.skillLevel),
      assoc('region', payload.region),
      assoc('address', payload.address),
      assoc('date', payload.date),
      assoc('startTime', payload.startTime),
      assoc('endTime', payload.endTime),
  )(state);
}

function viewCheckoutPage(state, { payload }) {
   return pipe(
      assoc('status', appStatuses.CHECKING_OUT),
      assoc('selectedLanguage', payload.language),
      assoc('flow', flows[payload.language]),
      assoc('skillLevel', payload.skillLevel),
      assoc('region', payload.region),
      assoc('address', payload.address),
      assoc('date', payload.date),
      assoc('startTime', payload.startTime),
      assoc('endTime', payload.endTime),
  )(state);
}

// INTERACRTIONS
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
    appStatuses.VIEWING_CLASS_OPTIONS, 
    state
  );
}

function chooseDate(state, { payload }) {
  return pipe(
    assoc('status', appStatuses.VIEWING_CLASS_SUMMARY),
    assoc('date', payload.date ),
    assoc('region', payload.region ),
    assoc('address', payload.address ),
    assoc('startTime', payload.startTime ),
    assoc('endTime', payload.endTime ),

    assoc('chosenSession', payload.session),
    assoc('chosenLocation', payload.location),
  )(state);
}

function bookYourSpot(state) {
  return pipe(
    assoc('status', appStatuses.CHECKING_OUT),
  )(state);
}

function typeName(state, { payload }) {
  return assoc(
    'name', 
    payload.name, 
    state
  );
}

function typeLastName(state, { payload }) {
  return assoc(
    'lastName', 
    payload.lastName, 
    state
  );
}

function typePhoneNumber(state, { payload }) {
  return assoc(
    'phoneNumber', 
    payload.phoneNumber, 
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

function StateUserDetails__FormErrorObject(state) {
  if (!isFullArray(state.name)) {
    return {
      message: "Please enter your first name.",
      type: "validation_error"
    }
  }
  if (!isFullArray(state.lastName)) {
    return {
      message: "Please enter your last name",
      type: "validation_error"
    }
  }
  if (!isValidEmail(state.email)) {
    return {
      message: "Please enter a valid email.",
      type: "validation_error"
    }
  }
  if (!isFullArray(state.phoneNumber)) {
    return {
      message: "Please enter your phone number.",
      type: "validation_error"
    }
  }
  return {};
}

function submitPaidSubscription(state, { payload }) {

  var userDetailsFormError = StateUserDetails__FormErrorObject(state);

  if (!isEmpty(userDetailsFormError)) {
    return pipe(
      assoc('status', appStatuses.SUBMITTING),
      assoc('formError', userDetailsFormError)
    )(state);
  }

  if (payload.token.error) {
    return pipe(
      assoc('status', appStatuses.SUBMITTING),
      assoc('formError', payload.token.error)
    )(state);
  }

  return pipe(
    assoc('status', appStatuses.SUBMITTING),
    assoc('formError', {})
  )(state);

}

function paidSubscriptionSubmitted(state, action) {
  return pipe(
    assoc('status', ( action.error ? appStatuses.CHECKING_OUT : appStatuses.TRANSACTION_COMPLETE )),
    assoc('formError', ( action.error ? action.payload : {})),
  )(state);
}
