import React from 'react';

import './price-sum.less';

export default (props) => (
  <div className="price-sum">
    <span className="price-sum__calculation">
      {props.calculation} =
    </span>
    <span className="price-sum__total">
      {props.total}
    </span>
  </div>
);
