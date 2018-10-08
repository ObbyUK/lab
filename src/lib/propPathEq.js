import { pipe, curry, equals } from 'ramda';
import propPath from './propPath';

export default curry((path, value, object) =>
  pipe(
    propPath(path),
    equals(value)
  )(object)
);
