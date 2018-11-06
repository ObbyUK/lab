import React from 'react';

import './bullet-point-sales-box.less';

import isFullArray from './../lib/isFullArray';
import ImageBulletPoints from './ImageBulletPoints.jsx';

export default (props) => (
  <div className="bullet-point-sales-box">

    <div className={`bullet-point-sales-box__title bullet-point-sales-box__title--${props.size||'medium'} `}>{props.title}</div>
    <div className="bullet-point-sales-box__description">{props.description}</div>
    
    {isFullArray(props.points) &&
      <ImageBulletPoints points={props.points} />
    }
  </div>
);
