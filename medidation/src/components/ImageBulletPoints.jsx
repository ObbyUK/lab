import React from 'react';

import Icon from './Icon.jsx';

import './image-bullet-points.less';

export default (props) => (
  <div className="image-bullet-points">
    {props.points.map((point, index) => (
      <div 
        key={index} 
        className={`
          image-bullet-points__point
          image-bullet-points__point--${props.size||'large'}
        `}
      > 
        {point.image &&
          <img 
            alt={point.text} 
            src={point.image} 
            className="image-bullet-points__point-image"
          />
        }
        {point.icon &&
          <span className="image-bullet-points__point-icon">
            <Icon icon={point.icon} height={25} />
          </span>
        }
        <div className="image-bullet-points__point-text">{point.text}</div>
      </div>
    ))}
  </div>
);
