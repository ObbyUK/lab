import React from 'react';
import isFullArray from './../lib/isFullArray';

import './three-point-sales-banner.less';

export default (props) => (
  <div className={`three-point-sales-banner three-point-sales-banner--${props.color||'white'}`}>
    <div className="three-point-sales-banner__section">

      {props.title &&
        <h2 className="three-point-sales-banner__title">
          {props.title}
        </h2>
      }

      {isFullArray(props.points) &&
        <div className="three-point-sales-banner__points">
          {props.points.map((point, index) => (
            <div key={index} className="three-point-sales-banner__item">
              <div className="three-point-sales-banner__item-image">
                <img alt={point.title} src={point.image}/>
              </div>
              <div className="three-point-sales-banner__item-title">{point.title}</div>
              <div className="three-point-sales-banner__item-description">{point.description}</div>
            </div>
          ))}
        </div>
      }

      {isFullArray(props.smallPoints) &&
        <div className="three-point-sales-banner__small-points-wrap">
          <div className="three-point-sales-banner__small-points-title">+More:</div>
          <div className="three-point-sales-banner__small-points">
            {props.smallPoints.map((point, index) => [
              <div key={index} className="three-point-sales-banner__small-point">{point}</div>,
              <div key={`${index}_dot`} className="three-point-sales-banner__small-points-dot">•</div>
            ])}
          </div>
        </div>
      }


    </div>
  </div>
);
