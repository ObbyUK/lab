import React from 'react';

import './reviews-banner.less';
// Component
import ReviewCard from './ReviewCard.jsx';
import Icon from './Icon.jsx';
import { ArrowLeft, ArrowRight } from './Icons.jsx';

export default class extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="reviews-banner">
        <div className="reviews-banner__title">Loved by everyone</div>
        <div className="reviews-banner__description">Our classes are rated 5⭐️ by people all across London. </div>

        <div className="reviews-banner__review-wrap">
          <div className="reviews-banner__review-button">
            <Icon icon={ArrowLeft} height={38}/>
          </div>
          <div className="reviews-banner__review">
            <ReviewCard
              image="/images/astrid-avatar.jpg"
              name="Astrid"
              language="Italian"
              text="The company I work for just opened an office in Italy, and it felt natural to learn a bit of italian to better communicate with my italian colleagues. Doing this on Obby felt natural, and Vicenzo is definitely one of the nicest and most patient teachers ever. I would recommend this to anyone!"
            />
          </div>
          <div className="reviews-banner__review-button">
            <Icon icon={ArrowRight} height={38}/>
          </div>
        </div>
      </div>
    );
  }
}
