const actions = {
  VIEW_LANDING_PAGE: 'landingPageHasBeenViewed',
  TYPE_FIRST_NAME: 'userTypesFirstName',
  TYPE_LAST_NAME: 'userTypesLastName',
  TYPE_PHONE_NUMBER: 'userTypesPhoneNumber',
  TYPE_EMAIL: 'userTypesEmail',
  CHOOSE_CLASS: 'userSelectsClass',
  CHOOSE_DATE: 'userSelectsDate',
  SEE_CLASS_OPTIONS: 'userWishesToSeeClassOptions',
  TYPE_NAME: 'userTypesName',
  TYPE_EMAIL: 'userTypesEmail',
  SUBMIT: 'userSubmitsEmailAndInformation',
  SUBMIT_COMPLETE: 'userSubmissionComplete',
  SUBMIT_PAID_SUBSCRIPTION: 'userSubmitsPaidSubscription',
  SUBMIT_PAID_SUBSCRIPTION_COMPLETE: 'userSubmitsPaidSubscriptionComplete',
  ANALYTICS_TRACKED: 'analyticsHasBeenTracked',
};

export const viewLandingPageAction = () => ({
  type: actions.VIEW_LANDING_PAGE
});

export const chooseClassAction = (chosenClass) => ({
  type: actions.CHOOSE_CLASS,
  payload: {
    chosenClass
  }
});

export const chooseDateAction = (details) => ({
  type: actions.CHOOSE_DATE,
  payload: details
});

export const submitAction = (details) => ({
  type: actions.SUBMIT,
  payload: details
});

export const submitCompleteAction = () => ({
  type: actions.SUBMIT_COMPLETE
});

export const seeClassOptionsAction = () => ({
  type: actions.SEE_CLASS_OPTIONS
});

export const submitPaidSubscriptionAction = (details) => ({
  type: actions.SUBMIT_PAID_SUBSCRIPTION,
  payload: details
});

export const submitPaidSubscriptionCompleteAction = (details) => ({
  type: actions.SUBMIT_PAID_SUBSCRIPTION_COMPLETE,
  payload: details,
  error: !!details.type
});

export const analyticsTrackedAction = (details) => ({
  type: actions.ANALYTICS_TRACKED,
  payload: details
});

export const typeNameAction = (name) => ({
  type: actions.TYPE_FIRST_NAME,
  payload: {
    name
  }
});

export const typeLastNameAction = (lastName) => ({
  type: actions.TYPE_LAST_NAME,
  payload: {
    lastName
  }
});

export const typePhoneNumberAction = (phoneNumber) => ({
  type: actions.TYPE_PHONE_NUMBER,
  payload: {
    phoneNumber
  }
});

export const typeEmailAction = (email) => ({
  type: actions.TYPE_EMAIL,
  payload: {
    email
  }
});

export default actions;
