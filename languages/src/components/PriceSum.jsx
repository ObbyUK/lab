import React from 'react';

import './price-sum.less';

export default (props) => (
  <div 
    className={`
      price-sum
      price-sum--${props.size||'normal'}
    `}
  >
    <span className="price-sum__calculation">
      {props.calculation} =
    </span>
    <span className="price-sum__total price-sum__total--line-through">
      <span className="price-sum__previous-total">
        {props.previousTotal}
      </span>
    </span>
    <span className="price-sum__total">
      {props.total}
    </span>
  </div>
);
