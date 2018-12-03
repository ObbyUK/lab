import React from 'react';

import Icon from './Icon.jsx';

import './image-bullet-points.less';

const shouldCenterPoint = (point, props) =>
  (point.title && (!point.text||props.hideMobileText)) || 
  (!point.title && point.text);

export default (props) => (
  <div className="image-bullet-points">
    {props.points.map((point, index) => (
      <div 
        key={index} 
        className={`
          image-bullet-points__point
          image-bullet-points__point--${props.size||'large'}
          image-bullet-points__point--${shouldCenterPoint(point, props) ? 'center' : 'start'}
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
        <div className="image-bullet-points__point-text-wrap">
          {point.title && 
            <div className="image-bullet-points__point-title">{point.title}</div>
          }
          {point.text && 
            <div 
              className={`
                image-bullet-points__point-text 
                ${(props.hideMobileText ? 'image-bullet-points__point-text--hide-mobile' : '')}
              `}
            >{point.text}</div>
          }
        </div>
      </div>
    ))}
  </div>
);
