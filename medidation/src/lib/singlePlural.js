import { curry } from 'ramda';

export default curry((count, single, plural) => count === 1 ? single : plural);
