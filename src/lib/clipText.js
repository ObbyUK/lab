import { always, pipe, curry, ifElse, slice, append, join, gt, __, identity } from 'ramda';
import lengthIs from './lengthIs';

export default curry((clipBy, text) => {
  return ifElse(
    lengthIs(gt(__, clipBy + 3)),
    pipe(
      slice(0, clipBy),
      append('...'),
      join('')
    ),
    identity
  )(text);
});
