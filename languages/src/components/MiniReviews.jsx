import React from 'react';

import './mini-reviews.less';
import RatingStars from './RatingStars.jsx';

export default (props) => (
  <div className="mini-reviews">
    {props.reviews.map((review, index) => (
      <div key={index} className="mini-reviews__review">
        <div className="mini-reviews__review-avatar">
          <img className="mini-reviews__review-avatar-image" src={review.image} alt={review.name} />
        </div>
        <div className="mini-reviews__review-body">
          <div className="mini-reviews__review-info">
            <div className="mini-reviews__reivew-name">{review.name}</div>
            <div className="mini-reviews__review-rating">
              <RatingStars
                rating={10}
                color={'robbins-egg-blue'}
                size="large"
              />
            </div>
          </div>
          <div className="mini-reviews__review-text">{review.text}</div>
        </div>
      </div>
    ))}
  </div>
);
