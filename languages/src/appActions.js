const actions = {
  VIEW_PAGE: 'userViewsAnyPage',
  VIEW_LANDING_PAGE: 'landingPageHasBeenViewed',
  VIEW_LANGUAGE_LANDING_PAGE: 'languageLandingPageHasBeenViewed',
  VIEW_READY_TO_LEARN_PAGE: 'readyToLearnPageHasBeenViewed',
  VIEW_CHOOSE_DATE_PAGE: 'chooseDatePageHasBeenViewed',
  VIEW_CLASS_SUMMARY_PAGE: 'classSummaryPageHasBeenViewed',
  VIEW_CHECKOUT_PAGE: 'checkoutPageHasBeenViewed',

  // FORM COMMENCMENT ACTIONS
  CHOOSE_LANGUAGE: 'userSelectsLanguageToLearn',
  SELECT_COURSE_TYPE: 'userSelectsCourseType',

  // FORM ACTIONS
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
  
  
  SUBMIT_EMAIL: 'userSubmitsEmailAndInformation',
  SUBMIT_EMAIL_COMPLETE: 'userSubmissionComplete',

  SUBMIT_PAYMENT: 'userSubmitsPaidSubscription',
  SUBMIT_PAYMENT_COMPLETE: 'userSubmitsPaidSubscriptionComplete',

  // MISC
  OPEN_EMAIL_POPUP: 'userOpensEmailPopup',
  CLOSE_EMAIL_POPUP: 'userClosesEmailPopup',
  ANALYTICS_TRACKED: 'analyticsHasBeenTracked',
};

// VIEW PAGE
export const viewAnyPageAction = (urlParamaters) => ({
  type: actions.VIEW_PAGE,
  payload: urlParamaters
});

export const viewLandingPageAction = () => ({
  type: actions.VIEW_LANDING_PAGE
});

export const viewLanguageLandingPageAction = () => ({
  type: actions.VIEW_LANGUAGE_LANDING_PAGE
});

export const viewReadyToLearnPageAction = () => ({
  type: actions.VIEW_READY_TO_LEARN_PAGE,
});

export const viewChooseDatePageAction = () => ({
  type: actions.VIEW_CHOOSE_DATE_PAGE,
});

export const viewClassSummaryPageAction = () => ({
  type: actions.VIEW_CLASS_SUMMARY_PAGE,
});

export const viewCheckoutPageAction = () => ({
  type: actions.VIEW_CHECKOUT_PAGE,
});

// FORM COMMENCMENT ACTIONS

export const chooseLanguageAction = (language) => ({
  type: actions.CHOOSE_LANGUAGE,
  payload: {
    language
  }
});

export const selectCourseTypeAction = (details) => ({
  type: actions.SELECT_COURSE_TYPE,
  payload: details
});


// FORM ACTIONS

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

// SUBMIT EMAIL
export const submitEmailAction = (details) => ({
  type: actions.SUBMIT_EMAIL,
  payload: details
});

export const submitEmailCompleteAction = () => ({
  type: actions.SUBMIT_EMAIL_COMPLETE
});

// SUBMIT PAYMENT
export const submitPaymentAction = (details) => ({
  type: actions.SUBMIT_PAYMENT,
  payload: details
});

export const submitPaymentCompleteAction = (details) => ({
  type: actions.SUBMIT_PAYMENT_COMPLETE,
  payload: details,
  error: !!details.type
});

// MISC
export const openEmailPopupAction = (popupText) => ({
  type: actions.OPEN_EMAIL_POPUP,
  payload: popupText
});

export const closeEmailPopupAction = () => ({
  type: actions.CLOSE_EMAIL_POPUP
});

export const analyticsTrackedAction = (details) => ({
  type: actions.ANALYTICS_TRACKED,
  payload: details
});

export default actions;
