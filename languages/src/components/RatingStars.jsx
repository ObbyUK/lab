import React from 'react';

import './rating-stars.less';
// Components
import Icon from './Icon.jsx';
import { Star } from './Icons.jsx';

const Rating__SingleRatingStar = (rating) => {
  if (rating >= 1 ) {
    return "full";
  }
  if (rating > 0 && rating < 1) {
    return "half";
  }
  if (rating <= 0 ) {
    return "empty";
  }
}

const Rating__RatingStarArray = (ratingStarArray, rating, iterations) => {
  
  if (iterations > 0 ) {
    
    ratingStarArray.push(Rating__SingleRatingStar(rating));
  	rating = rating - 1;
    iterations = iterations - 1;

  	return Rating__RatingStarArray(ratingStarArray, rating, iterations);
  }
  return ratingStarArray;
}

export default ({ rating, label, color, size }) => (
  <div className="rating-stars">
    {Rating__RatingStarArray([], rating/2, 5).map((starValue, index) => (
      <div
        key={index}
        className={`
          rating-stars__star 
          rating-stars__star--${color||'camelot'}
          rating-stars__star--${size||'large'}
        `}
      >
        {size === 'small' &&
          <Icon icon={Star} height={11} />
        }
        {(!size || size === 'large') &&
          <Icon icon={Star} height={15} />
        }
      </div>
    ))}
    {label &&
      <span className={`
        rating-stars__label 
        rating-stars__label--${color||'camelot'}
        rating-stars__label--${size||'large'}
      `}>
        {label}
      </span>
    }
  </div>
);
