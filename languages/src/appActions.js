const actions = {
  
  VIEW_LANDING_PAGE: 'landingPageHasBeenViewed',
  VIEW_READY_TO_LEARN_PAGE: 'readyToLearnPageHasBeenViewed',
  VIEW_CHOOSE_DATE_PAGE: 'chooseDatePageHasBeenViewed',
  VIEW_CLASS_SUMMARY_PAGE: 'classSummaryPageHasBeenViewed',
  VIEW_CHECKOUT_PAGE: 'checkoutPageHasBeenViewed',

  CHOOSE_LANGUAGE: 'userSelectsLanguageToLearn',
  SELECT_SKILL_LEVEL: 'userSelectsSkillLevel',
  SELECT_TIME: 'userSelectsTime',
  TOGGLE_LOCATION: 'userTogglesLocation',
  SUBMIT_QUESTIONS: 'userSubmitsClassPereference',
  TYPE_FIRST_NAME: 'userTypesFirstName',
  TYPE_LAST_NAME: 'userTypesLastName',
  TYPE_PHONE_NUMBER: 'userTypesPhoneNumber',
  TYPE_EMAIL: 'userTypesEmail',
  CHOOSE_DATE: 'userSelectsAClassDate',
  BOOK_YOUR_SPOT: 'userClicksBookYourSpot',
  SUBMIT: 'userSubmitsEmailAndInformation',
  SUBMIT_COMPLETE: 'userSubmissionComplete',
  SUBMIT_PAID_SUBSCRIPTION: 'userSubmitsPaidSubscription',
  SUBMIT_PAID_SUBSCRIPTION_COMPLETE: 'userSubmitsPaidSubscriptionComplete',
  ANALYTICS_TRACKED: 'analyticsHasBeenTracked',
};

// VIEW PAGE
export const viewLandingPageAction = () => ({
  type: actions.VIEW_LANDING_PAGE
});

export const viewReadyToLearnPageAction = (urlParamaters) => ({
  type: actions.VIEW_READY_TO_LEARN_PAGE,
  payload: urlParamaters
});

export const viewChooseDatePageAction = (urlParamaters) => ({
  type: actions.VIEW_CHOOSE_DATE_PAGE,
  payload: urlParamaters
});

export const viewClassSummaryPageAction = (urlParamaters) => ({
  type: actions.VIEW_CLASS_SUMMARY_PAGE,
  payload: urlParamaters
});

export const viewCheckoutPageAction = (urlParamaters) => ({
  type: actions.VIEW_CHECKOUT_PAGE,
  payload: urlParamaters
});

// INTERACTIONS
export const chooseLanguageAction = (language) => ({
  type: actions.CHOOSE_LANGUAGE,
  payload: {
    language
  }
});

export const selectSkillLevelAction = (skillLevel) => ({
  type: actions.SELECT_SKILL_LEVEL,
  payload: {
    skillLevel
  }
});

export const selectTimeAction = (time) => ({
  type: actions.SELECT_TIME,
  payload: {
    time
  }
});

export const toggleLocationAction = (location) => ({
  type: actions.TOGGLE_LOCATION,
  payload: {
    location
  }
});

export const submitQuestionsAction = () => ({
  type: actions.SUBMIT_QUESTIONS
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

export const chooseDateAction = (details) => ({
  type: actions.CHOOSE_DATE,
  payload: details
});

export const bookYourSpotAction = () => ({
  type: actions.BOOK_YOUR_SPOT,
});

export const submitAction = (details) => ({
  type: actions.SUBMIT,
  payload: details
});

export const submitCompleteAction = () => ({
  type: actions.SUBMIT_COMPLETE
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

export default actions;
