const actions = {
  VIEW_LANDING_PAGE: 'landingPageHasBeenViewed',
  CHOOSE_LANGUAGE: 'userSelectsLanguageToLearn',
};

export const viewLandingPageAction = () => ({
  type: actions.VIEW_LANDING_PAGE
});

export const chooseLanguageAction = (language) => ({
  type: actions.CHOOSE_LANGUAGE,
  payload: {
    language
  }
});

export default actions;
