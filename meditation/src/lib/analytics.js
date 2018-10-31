import { analytics } from './../../settings';

window.analytics.load(analytics.apiKey);

export const page = (eventArguments) => {
  window.analytics.page.apply(window.analytics, eventArguments);
  return eventArguments;
};

export const track = (eventArguments) => {
  window.analytics.track.apply(window.analytics, eventArguments);
  return eventArguments;
};

export const identify = (eventArguments) => {
  window.analytics.identify.apply(window.analytics, eventArguments);
  return eventArguments;
};
