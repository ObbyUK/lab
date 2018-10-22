import { isNil, isEmpty } from 'ramda';

export default (array) => ( !isNil(array) && !isEmpty(array) );