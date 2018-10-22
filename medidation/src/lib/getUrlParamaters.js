import { pipe, split, map, fromPairs } from 'ramda';

export default () => 
  pipe(
    split('&'),
    map(split('=')),
    fromPairs,
  )(decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?')+1)));