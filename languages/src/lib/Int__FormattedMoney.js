import accounting from 'accounting';

export default (value) => {
  var initialFormat = accounting.formatMoney(value / 100, '£', 2, ',', '.');
  var splitFormat = initialFormat.split('.');
  if (splitFormat[1] === '00') {
    return splitFormat[0];
  }
  return initialFormat;  
}