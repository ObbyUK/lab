import { remove } from 'ramda';

export default (value, array) => {
  var valueIndex = array.indexOf(value);
  if (valueIndex === -1) {
    return array.concat(value);
  }
  return remove(valueIndex, 1, array);
}