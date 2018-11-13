import { isEmpty, pipe, assoc, identity, T, cond, propEq } from 'ramda';

// Lib & Constants
import isActionType from './lib/isActionType';
import isFullArray from './lib/isFullArray';
import isValidEmail from './lib/isValidEmail';
// Actions & State
import AppState, { appStatuses } from './AppState';
import appActions from './appActions';


const viewingReducer = cond([
  [isActionType(appActions.SEE_CLASS_OPTIONS), seeClassOptions],
  [T, identity]
]);

const enteringContactInformationReducer = cond([
  [isActionType(appActions.CHOOSE_DATE), chooseDate],
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
    [isActionType(appActions.VIEW_LANDING_PAGE), viewLandingPage],
    [propEq('status', appStatuses.VIEWING), viewingReducer],
    [propEq('status', appStatuses.ENTERING_CONTACT_INFORMATION), enteringContactInformationReducer],
    [propEq('status', appStatuses.CHECKING_OUT), checkingOutReducer],
    [propEq('status', appStatuses.SUBMITTING), submittingReducer],
    [T, viewingReducer]
  ])(state, action);


function viewLandingPage(state) {
  return assoc(
    'status',
    appStatuses.VIEWING,
    state
  );
}

function chooseDate(state, { payload }) {
  return pipe(
    assoc('status', appStatuses.CHECKING_OUT),
    assoc('chosenLocation', payload.location),
    assoc('chosenSession', payload.session),
    assoc('date', payload.date),
  )(state);
}

function seeClassOptions(state, action) {
  return pipe(
    assoc('status', appStatuses.ENTERING_CONTACT_INFORMATION),
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