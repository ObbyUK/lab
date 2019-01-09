import React from 'react';

import './rating-spotlight.less';
// Components
import RatingStars from './RatingStars.jsx';

export default (props) => (
  <div className="rating-spotlight">
    <div className="rating-spotlight__image-wrap">
      <img 
        className="rating-spotlight__image"
        src={props.image} 
      />
    </div>
    <div className="rating-spotlight__rating">
      <RatingStars 
        rating={props.rating||10}
        size="huge"
        color={'sun'}
      />
    </div>
    <div className="rating-spotlight__text-wrap">
      <h1 className="rating-spotlight__title">
        {props.title}
      </h1>
      <p className="rating-spotlight__text">
        {props.text}
      </p>
    </div>
  </div>
);
