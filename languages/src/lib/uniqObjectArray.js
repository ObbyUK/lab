import { reduce, contains } from 'ramda';

export default (idName, objectArray) => 
  reduce(
    (sum, item) => {
      if (contains(item[idName], sum.ids)) {
        return sum;
      }
      return { 
        ids: sum.ids.concat(item[idName]), 
        final: sum.final.concat(item)
      };
    },
    { ids: [], final: [] }, 
    objectArray
  )
  .final;