import React from 'react';
import './image-text-list-banner.less';

import BulletPointSalesBox from './BulletPointSalesBox.jsx';

export default (props) => (
  <div className={`
    image-text-list-banner
    image-text-list-banner--${props.color||'white'}
    ${props.reverse && 'image-text-list-banner--reverse'}
  `}>
    
    <div className="image-text-list-banner__image-wrap col-sm-12 col-md-6">
      <img 
        className={`
          image-text-list-banner__image
          ${props.imageClassName||''}
        `}
        alt={props.title} 
        src={props.image}
      />
    </div>

    <div className="image-text-list-banner__text col-sm-12 col-md-6">
      <BulletPointSalesBox 
        title={props.title}
        description={props.description}
        points={props.points}
        size={props.size}
      />
      {props.children &&
        <div className="image-text-list-banner__children">
          {props.children}
        </div>
      }
    </div>

  </div>
);
