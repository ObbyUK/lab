import React from 'react';

import isFullArray from './../lib/isFullArray';

import './text-list.less';

export default (props) => (
  <div className="text-list">
    {isFullArray(props.list) && props.list.map((item, index) => (
      <div key={index} className="text-list__item">
        <h4 className="text-list__title">
          {props.isNumbered &&
            <span className="text-list__title-number">
              {index+1}.
            </span>
          }
          {item.title}
        </h4>
        <p className="text-list__text">{item.text}</p>
      </div>
    ))}
  </div>
);
