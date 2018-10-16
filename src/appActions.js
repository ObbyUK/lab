const actions = {
  VIEW_LANDING_PAGE: 'landingPageHasBeenViewed',
  VIEW_READY_TO_LEARN_PAGE: 'readyToLearnPageHasBeenViewed',
  CHOOSE_LANGUAGE: 'userSelectsLanguageToLearn',
  SELECT_SKILL_LEVEL: 'userSelectsSkillLevel',
  SELECT_TIME: 'userSelectsTime',
  TOGGLE_LOCATION: 'userTogglesLocation',
  SUBMIT_QUESTIONS: 'userSubmitsClassPereference',
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

export default actions;
