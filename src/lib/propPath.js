import { curry, view, lensPath } from 'ramda';

export default curry((path, object) => view(lensPath(path), object));
