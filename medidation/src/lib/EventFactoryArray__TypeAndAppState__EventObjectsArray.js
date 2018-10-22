import { curry } from 'ramda';

export default curry((eventFactoriesArray, typeAndAppState) =>
  eventFactoriesArray
    .map((factory) => factory(typeAndAppState))
);