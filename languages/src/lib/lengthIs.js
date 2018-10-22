import { curry, pipe, length } from 'ramda';

export default curry((operator, item) => pipe(length, operator)(item));
