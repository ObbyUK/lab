import React from 'react';
import './image-text-list-banner.less';

import BulletPointSalesBox from './BulletPointSalesBox.jsx';

export default (props) => (
  <div className="image-text-list-banner">
    <div className={`
      image-text-list-banner__body
      ${props.reverse && 'image-text-list-banner__body--reverse'}
    `}>
      
      {/* IMAGE */}
      <div className={`
        image-text-list-banner__image-wrap
        ${props.natrualImageSize ? 'image-text-list-banner__image-wrap--natrual' : ''}
      `}>
        <img 
          className={`
            image-text-list-banner__image
            ${props.natrualImageSize ? 'image-text-list-banner__image--natrual' : ''}
          `}
          alt={props.title} 
          src={props.image}
        />
      </div>

      {/* BULLET POINTS */}
      <div className="image-text-list-banner__text">
        <BulletPointSalesBox 
          title={props.title}
          description={props.description}
          points={props.points}
        />
      </div>
  </div>

  </div>
);
