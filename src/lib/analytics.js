import Analytics from 'analytics-node';
import { analytics } from './../../settings';

const segment = new Analytics(analytics.apiKey);

export const page = (event) => {
  return new Promise((resolve, reject) => {
    segment.page(event, (error) => {
      if (error) {
        reject({ ok: false, error: error });
      } else {
        resolve({ ok: true });
      }
    });
  });
};

export const track = (event) => {
  return new Promise((resolve, reject) => {
    segment.track(event, (error) => {
      if (error) {
        reject({ ok: false, error: error });
      } else {
        resolve({ ok: true });
      }
    });
  });
};

export const identify = () => {};
