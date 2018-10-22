const actions = {
  VIEW_LANDING_PAGE: 'landingPageHasBeenViewed',
  ANALYTICS_TRACKED: 'analyticsHasBeenTracked',
};

export const viewLandingPageAction = () => ({
  type: actions.VIEW_LANDING_PAGE
});

export const analyticsTrackedAction = (details) => ({
  type: actions.ANALYTICS_TRACKED,
  payload: details
});

export default actions;
