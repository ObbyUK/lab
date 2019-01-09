import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

// Constants & Actions
import { courseTypeFlows } from './../constants/flows';
import { languageNames } from '../constants/languages';
import {
  bookOneToOneAction
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ImageBulletPoints from './../components/ImageBulletPoints.jsx';
import ReviewsBanner from './../components/ReviewsBanner.jsx';
import ImageTextListBanner from './../components/ImageTextListBanner.jsx';
import PriceBoxes from '../components/PriceBoxes.jsx';
import RatingSpotlight from '../components/RatingSpotlight.jsx';

import './one-to-one-summary-container.less';

const mapStateToProps = (state) => ({
  pageFlow: courseTypeFlows[state.app.courseType].summaryPage,
  selectedLanguageName: languageNames[state.app.selectedLanguage],
  selectedLanguage: state.app.selectedLanguage
});

const mapDispatchToProps = (dispatch, state) => ({
  bookOneToOne: (courseType) => dispatch(bookOneToOneAction(courseType))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    
  }
]);

class OneToOneSummaryContainer extends React.Component {

  componentDidMount() {
  }

  render () {
    return (
      <div className="one-to-one-summary-container">
        <div className="container">

          {/* HEADER */}
          <div className="one-to-one-summary-container__header">
            <div className="one-to-one-summary-container__title-wrap">
              <h2 className="one-to-one-summary-container__title">
                1 to 1 lessons
              </h2>
              <h2 className="one-to-one-summary-container__title">
                Ready to learn {this.props.selectedLanguageName}
              </h2>
            </div>
            <img 
              className="one-to-one-summary-container__header-image"
              src={`/icons/${this.props.selectedLanguage}.svg`}
            />
          </div>

          {/* PRICES & SUMMARY */}
          <div className="one-to-one-summary-container__card-wrap">
            <BlankCard className="one-to-one-summary-container__card">
              
              <PriceBoxes 
                boxes={this.props.pageFlow.priceBoxes}
                onClick={(box) => this.props.bookOneToOne(box.value)}
              />

              <div className="one-to-one-summary-container__bullet-point-section">
                <ImageBulletPoints 
                  points={this.props.pageFlow.points}
                />
              </div>
            </BlankCard>
          </div>

          {/* RECOMENDATIONS */}
          <div className="one-to-one-summary-container__card-wrap">
            <BlankCard className="one-to-one-summary-container__card">
              {/* TEACHERS SPOTLIGHT */}
              <RatingSpotlight
                image="images/teachers-circles.png"
                rating={10}
                title="Our teachers are trusted worldwide."
                text="We believe you should only learn from the best. That is why we go through the effort of finding the best language teachers with relevant qualifications and years of teaching experience. We think our teachers are great and think you will too - so much so that if you aren’t satisfied we will give you your money back with no questions asked!"
              />
              {/* REVIEWS */}
              <ReviewsBanner />
              {/* PERSONALISED CURRICULUM */}
              <ImageTextListBanner
                reverse={true}
                natrualImageSize={true}
                imageClassName="one-to-one-summary-container__image-text-list-banner-image"                
                title="Personalised curricullum"
                description="Our teachers will assess your language level and build a personalised curricullum just for you."
                image="/icons/personalised.svg"
              />
            </BlankCard>
          </div>

          {/* PRICES & SUMMARY */}
          <div className="one-to-one-summary-container__card-wrap">
            <BlankCard className="one-to-one-summary-container__card">

              {/* MONEY BACK SECTION */}
              <div className="one-to-one-summary-container__money-back-section">
                <h2 className="one-to-one-summary-container__card-title">
                  100% Moneyback guarantee
                </h2>
                <p className="one-to-one-summary-container__card-description">
                  We promise all of our learners a great experience. If you’re unhappy after your first class, we’ll refund you in full.
                </p>
                <div className="one-to-one-summary-container__card-section">
                  <ImageBulletPoints
                    points={[
                      {
                        image: "/icons/tick.svg",
                        title: "Full refund",
                      },
                      {
                        image: "/icons/tick.svg",
                        title: "No hard feelings",
                      },
                    ]}
                  />
                </div>
              </div>
              {/* PRICE BOXES */}
              <PriceBoxes 
                boxes={this.props.pageFlow.priceBoxes}
                onClick={(box) => this.props.bookOneToOne(box.value)}
              />
            </BlankCard>
          </div>
        </div>

      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(OneToOneSummaryContainer);