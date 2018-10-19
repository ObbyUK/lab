import { cond, propEq } from 'ramda';
import { track, page, identify } from './analytics';

export default cond([
  [propEq('type', 'identify'), (event) => identify(event.payload)],
  [propEq('type', 'page'), (event) => page(event.payload)],
  [propEq('type', 'track'), (event) => track(event.payload)],
]);