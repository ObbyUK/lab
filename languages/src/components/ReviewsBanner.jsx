import React from 'react';

import './reviews-banner.less';

import reviews from './../constants/reviews';
import CycleComponentsBanner from './CycleComponentsBanner.jsx';
import ReviewCard from './ReviewCard.jsx';

export default () => (
  <CycleComponentsBanner
    color="cruise"
    title="Loved by over 10,000 Londoners"
    description="Our classes are rated 5 ⭐️ by people all across London."
    list={reviews}
    viewComponent={(review) => (
      <ReviewCard
        image={review.image}
        name={review.name}
        language={review.language}
        languageName={review.languageName}
        text={review.text}
      />
    )}
  />
);

