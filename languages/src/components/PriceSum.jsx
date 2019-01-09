import React from 'react';

import './price-sum.less';

// Lib
import Int__FormattedMoney from './../lib/Int__FormattedMoney';

const isThereADiscount = (props) => props.previousTotal !== props.total;

export default (props) => (
  <div 
    className={`
      price-sum
    `}
  > 
    {/* PREVIOUS PRICE */}
    {isThereADiscount(props) &&
      <div className="price-sum__top-row">
        <span className="price-sum__total price-sum__total--line-through">
          <span className="price-sum__previous-total">
            {Int__FormattedMoney(props.previousTotal)}
          </span>
        </span>
      </div>
    }
    {/* CALCULATION TEXT && TOTAL */}
    <div className="price-sum__middle-row">
      <span className="price-sum__calculation">
        {props.calculation}
      </span>
      <span className="price-sum__total">
        {Int__FormattedMoney(props.total)}
      </span>
    </div>
    {/* YOUVE SAVED TEXT */}
    {isThereADiscount(props) &&
      <div className="price-sum__bottom-row">
        <span className="price-sum__save-text">
          Save {Int__FormattedMoney(props.previousTotal - props.total)}
        </span>
      </div>
    }
  </div>
);
