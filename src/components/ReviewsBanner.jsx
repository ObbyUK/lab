import React from 'react';

import './reviews-banner.less';
// Component
import ReviewCard from './ReviewCard.jsx';
import Icon from './Icon.jsx';
import { ArrowLeft, ArrowRight } from './Icons.jsx';

export default class extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      onReviewIndex: 0,
      reviews: props.reviews
    };
  }

  nextReview() {
    this.setState({
      onReviewIndex: (
        this.state.onReviewIndex === this.state.reviews.length-1 ?
          0 : 
          this.state.onReviewIndex+1
      )
    });
  }

  previousReview() {
    this.setState({
      onReviewIndex: (
        this.state.onReviewIndex === 0 ?
          this.state.reviews.length-1 :
          this.state.onReviewIndex-1
      )
    });
  }

  render () {
    return (
      <div className="reviews-banner">
        <div className="reviews-banner__title">Loved by everyone</div>
        <div className="reviews-banner__description">Our classes are rated 5⭐️ by people all across London. </div>

        <div className="reviews-banner__review-wrap container">
          <div 
            className="reviews-banner__review-button"
            onClick={this.previousReview.bind(this)}
          >
            <Icon icon={ArrowLeft} height={38}/>
          </div>
          <div className="reviews-banner__review">
            <ReviewCard
              image={this.state.reviews[this.state.onReviewIndex].image}
              name={this.state.reviews[this.state.onReviewIndex].name}
              language={this.state.reviews[this.state.onReviewIndex].language}
              languageName={this.state.reviews[this.state.onReviewIndex].languageName}
              text={this.state.reviews[this.state.onReviewIndex].text}
            />
          </div>
          <div 
            className="reviews-banner__review-button"
            onClick={this.nextReview.bind(this)}
          >
            <Icon icon={ArrowRight} height={38}/>
          </div>
        </div>
      </div>
    );
  }
}
