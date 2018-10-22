import { curry, view, lensPath, pipe } from 'ramda';

export default curry((path, assertionCallback, object) =>
  pipe(
    view(lensPath(path)),
    assertionCallback
  )(object)
);
