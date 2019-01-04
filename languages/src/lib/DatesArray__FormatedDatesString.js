import moment from 'moment';

export default (dates, format, readFormat) => 
  dates
    .map((date) => moment(date, readFormat||'DD/MM/YYYY').format(format))
    .join(" & ")
;