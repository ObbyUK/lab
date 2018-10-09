import React from 'react';

import './image-banner.less';

export default (props) => (
  <div className="image-banner">
    <img 
      className="image-banner__image" 
      src={props.src} 
      alt={props.title}
    />
    <div className="image-banner__text">
      {props.blurt &&
        <h1 className="image-banner__blurt">{props.blurt}</h1>
      }
      {props.title &&
        <h1 className="image-banner__title">{props.title}</h1>
      }
      {props.descirption &&
        <p className="image-banner__description">{props.descirption}</p>
      }
    </div>
  </div>
);
