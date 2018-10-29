import { compose, isEmpty, without } from 'ramda';

// set, subset > boolean
export default compose(isEmpty, without);