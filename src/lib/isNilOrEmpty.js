import { isNil, isEmpty, either } from 'ramda';

export default either(isNil, isEmpty);
