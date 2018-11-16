import React from 'react';
import { splitAt } from 'ramda';

import './tick-list.less';

const List__ColumnsList = (list) => splitAt(Math.floor(list.length/2), list);

export default (props) => (
  <div className="tick-list">
   
    {List__ColumnsList(props.list).map((column, index) => (
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
