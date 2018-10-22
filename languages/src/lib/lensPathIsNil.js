import { curry, pipe, view, lensPath, isNil } from 'ramda';

export default curry((path, object) =>
  pipe(
    view(lensPath(path)),
    isNil
  )(object)
);
