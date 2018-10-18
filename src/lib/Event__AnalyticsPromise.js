import { cond, propEq } from 'ramda';
import { track, page } from './analytics';

export default cond([
  [propEq('type', 'track'), (event) => track(event.payload)],
  [propEq('type', 'page'), (event) => page(event.payload)]
]);