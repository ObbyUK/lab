import React from 'react';
import splitEvery from 'ramda/src/splitEvery';

import './tick-list.less';

export default (props) => (
  <div className="tick-list">
   
    {splitEvery(Math.floor(props.list.length/props.columns), props.list)
      .map((column, index) => (
        <div key={index} className="tick-list__column">
          {column.map((item, itemIndex) => (
            <div key={itemIndex} className="tick-list__item">
              <img src="/icons/red-tick.svg" className="tick-list__item-icon" />
              <div className="tick-list__item-text">{item}</div>
            </div>
          ))}
        </div>
      ))}
  </div>
);
