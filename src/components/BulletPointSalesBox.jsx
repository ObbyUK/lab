import React from 'react';

import isFullArray from './../lib/isFullArray';

import './bullet-point-sales-box.less';

export default (props) => (
  <div className="bullet-point-sales-box">

    <div className="bullet-point-sales-box__title">{props.title}</div>
    <div className="bullet-point-sales-box__description">{props.description}</div>
    
    {isFullArray(props.points) &&
      <div className="bullet-point-sales-box__list">
        {props.points.map((point, index) => (
          <div 
            key={index} 
            className="bullet-point-sales-box__point"
          >
            <img 
              alt={point.text} 
              src={point.image} 
              className="bullet-point-sales-box__point-image"
            ></img>
            <div className="bullet-point-sales-box__point-text">{point.text}</div>
          </div>
        ))}
      </div>
    }
  </div>
);
