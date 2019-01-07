import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

// Constants & Actions
import { courseTypeFlows } from './../constants/flows';
import reviews from './../constants/reviews';
import { languageNames } from '../constants/languages';
import {
  viewOneToOneSummaryPageAction
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ImageBulletPoints from './../components/ImageBulletPoints.jsx';
import ReviewsBanner from './../components/ReviewsBanner.jsx';
import ImageTextListBanner from './../components/ImageTextListBanner.jsx';
import PriceBox from './../components/PriceBox.jsx';

import './one-to-one-summary-container.less';

const mapStateToProps = (state) => ({
  pageFlow: courseTypeFlows[state.app.courseType].summaryPage,
  selectedLanguageName: languageNames[state.app.selectedLanguage]
});

const mapDispatchToProps = (dispatch, state) => ({
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
              src="/images/german-sticker.png" alt=""
              className="one-to-one-summary-container__header-image"
            />
          </div>

          {/* PRICES & SUMMARY */}
          <div className="one-to-one-summary-container__card-wrap">
            <BlankCard className="one-to-one-summary-container__card">
              <PriceBox
                color="sun"
                title="10 hours"
                previousPrice="£350"
                price="£300"
                note="Save £50"
                buttonText="Select"
                onClick={console.log}
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
              
              <ReviewsBanner reviews={reviews} />
              
              <ImageTextListBanner
                reverse={true}
                natrualImageSize={true}
                title="Personalised curricullum"
                description="Our teachers will assess your language level and build a personalised curricullum just for you."
                image="/images/personalised.png"
              />
            </BlankCard>
          </div>

          {/* PRICES & SUMMARY */}
          <div className="one-to-one-summary-container__card-wrap">
            <BlankCard className="one-to-one-summary-container__card">
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