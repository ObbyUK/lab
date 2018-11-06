const actions = {
  VIEW_LANDING_PAGE: 'landingPageHasBeenViewed',
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

export const chooseDateAction = (date) => ({
  type: actions.CHOOSE_DATE,
  payload: {
    date
  }
});

export const typeNameAction = (name) => ({
  type: actions.TYPE_NAME,
  payload: {
    name
  }
});

export const typeEmailAction = (email) => ({
  type: actions.TYPE_EMAIL,
  payload: {
    email
  }
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

export const submitPaidSubscriptionCompleteAction = () => ({
  type: actions.SUBMIT_PAID_SUBSCRIPTION_COMPLETE,
});

export const analyticsTrackedAction = (details) => ({
  type: actions.ANALYTICS_TRACKED,
  payload: details
});

export default actions;
