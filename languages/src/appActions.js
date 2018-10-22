const actions = {
  VIEW_LANDING_PAGE: 'landingPageHasBeenViewed',
  VIEW_READY_TO_LEARN_PAGE: 'readyToLearnPageHasBeenViewed',
  CHOOSE_LANGUAGE: 'userSelectsLanguageToLearn',
  SELECT_SKILL_LEVEL: 'userSelectsSkillLevel',
  SELECT_TIME: 'userSelectsTime',
  TOGGLE_LOCATION: 'userTogglesLocation',
  SUBMIT_QUESTIONS: 'userSubmitsClassPereference',
  TYPE_NAME: 'userTypesName',
  TYPE_EMAIL: 'userTypesEmail',
  SUBMIT: 'userSubmitsEmailAndInformation',
  SUBMIT_COMPLETE: 'userSubmissionComplete',
  ANALYTICS_TRACKED: 'analyticsHasBeenTracked',
};

export const viewLandingPageAction = () => ({
  type: actions.VIEW_LANDING_PAGE
});

export const viewReadyToLearnPageAction = (urlParamaters) => ({
  type: actions.VIEW_READY_TO_LEARN_PAGE,
  payload: urlParamaters
});

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
