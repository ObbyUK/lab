import { curry } from 'ramda';

export default curry((typeName, state, action) => typeName === action.type);
