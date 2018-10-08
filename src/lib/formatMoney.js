import accounting from 'accounting';

export default (cost) => {
  let formated = accounting.formatMoney(cost / 100, '£', 2, ',', '.');
  if (formated.substring(formated.length - 3) === '.00') {
    return formated.substring(0, formated.length - 3);
  }
  return formated;
};
