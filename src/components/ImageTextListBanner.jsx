import React from 'react';
import './image-text-list-banner.less';

import BulletPointSalesBox from './BulletPointSalesBox.jsx';

export default (props) => (
  <div className={`image-text-list-banner ${props.reverse && 'image-text-list-banner--reverse'}`}>
    
    <div className="image-text-list-banner__image-wrap">
      <img 
        className="image-text-list-banner__image" 
        alt={props.title} 
        src={props.image}
      />
    </div>

    <div className="image-text-list-banner__text">
      <BulletPointSalesBox 
        title={props.title}
        description={props.description}
        points={props.points}
      />
    </div>

  </div>
);
