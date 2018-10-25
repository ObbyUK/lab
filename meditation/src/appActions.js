const actions = {
  VIEW_LANDING_PAGE: 'landingPageHasBeenViewed',
  CHOOSE_CLASS: 'userSelectsClass',
  TYPE_NAME: 'userTypesName',
  TYPE_EMAIL: 'userTypesEmail',
  SUBMIT: 'userSubmitsEmailAndInformation',
  SUBMIT_COMPLETE: 'userSubmissionComplete',
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

export const analyticsTrackedAction = (details) => ({
  type: actions.ANALYTICS_TRACKED,
  payload: details
});

export default actions;
