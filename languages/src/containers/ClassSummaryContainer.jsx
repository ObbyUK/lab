import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';
import moment from 'moment';

import './class-summary-container.less';
// Constants
import { levelNames as skillLevelNames } from './../constants/skillLevels';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import ThreePointSalesBanner from '../components/ThreePointSalesBanner.jsx';
import { Clock, Location, BarChart} from '../components/Icons.jsx';
import IconLabel from '../components/IconLabel.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import RatingStars from '../components/RatingStars.jsx';

const mapStateToProps = (state) => ({
  skillLevel: state.app.skillLevel,
  address: state.app.chosenLocation.address,
  teacher: state.app.flow.teacher,
  lessonDayAndTime: `${moment(state.app.chosenSession.starts, 'DD/MM/YYYY').format('dddd')}s, ${state.app.chosenSession.lessonsStart} - ${state.app.chosenSession.lessonsEnd}`
});

const mapDispatchToProps = (dispatch, state) => ({

});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    
  }
]);

class ClassSummaryContainer extends React.Component {
  render () {
    return (
      <div className="class-summary-container__body container">

        <div className="class-summary-container__card class-summary-container__card--joined">
          <BlankCard>
            <div className="class-summary-container__previous-choice">
              <div className="class-summary-container__previous-choice-details">
                <h2 className="class-summary-container__card-title class-summary-container__card-title--tight">
                  You’ve selected
                </h2>
                <div className="class-summary-container__icon-labels">
                  <IconLabel icon={BarChart} text={skillLevelNames[this.props.skillLevel]}/>
                  <IconLabel icon={Location} text={this.props.address}/>
                  <IconLabel icon={Clock} text={this.props.lessonDayAndTime}/>
                </div>
              </div>
              <div className="class-summary-container__button">
                <PrimaryButton 
                  text="Book your spot"
                  size="huge"
                  onClick={console.log} 
                />
              </div>
            </div>
          </BlankCard>
        </div>
        <div className="class-summary-container__card">
          <BlankCard>
            <h2 className="class-summary-container__card-title class-summary-container__card-title--tight">
              Meet your teacher.
            </h2>
            <div className="class-summary-container__teacher">
              <div className="class-summary-container__teacher-details">
                <h2 className="class-summary-container__card-title class-summary-container__card-title--normal-weight class-summary-container__card-title--tight">
                  {this.props.teacher.name}
                </h2>
                <div className="class-summary-container__teacher-meta">
                  <div className="class-summary-container__teacher-nationality">
                    Nationality: {this.props.teacher.nationality}
                  </div>
                  <div className="class-summary-container__teacher-rating">
                    <RatingStars
                      rating={10}
                      color={'sun'}
                      label={this.props.teacher.reviews.length}
                    />
                  </div>
                </div>
                <p className="class-summary-container__teacher-description">
                  {this.props.teacher.description}
                </p>
              </div>
              <div className="class-summary-container__teacher-avatar-wrap">
                <img src={this.props.teacher.avatar} alt={this.props.teacher.name} className="class-summary-container__teacher-avatar"/>
              </div>
            </div>
          </BlankCard>
        </div>

        <div className="class-summary-container__card">
          <BlankCard>
            <h2 className="class-summary-container__card-title">
              Your first class is free. After that, if you like it, it's £24 per week for 7 weeks.
            </h2>
            <div className="class-summary-container__card-section">
              <ImageBulletPoints
                points={[
                  {
                    image: "/icons/pay_0.svg",
                    title: "Your first class is on us",
                    text: "Pay £0 today, see if you like it before committing",
                  },
                  {
                    image: "/icons/tick.svg",
                    title: "Money-back guarantee",
                    text: "We ensure quality. If the class doesn't reach your expectations, we'll give your money back.",
                  },
                  {
                    image: "/icons/installments.svg",
                    title: "Pay in instalments",
                    text: "Instead of paying the full amount up front, you'll pay in weekly installments",
                  }
                ]}
              />
            </div>
          </BlankCard>
        </div>

        <div className="class-summary-container__card">
          <BlankCard>
            <h2 className="class-summary-container__card-title">
              More about Obby
            </h2>
            <div className="class-summary-container__card-section ready-to-learn-page__card-section--three-point-sales-banner">
              <ThreePointSalesBanner
                color="white"
                size="small"
                points={[
                  { 
                    image: "/icons/trusted.svg", 
                    title: "Trusted teachers", 
                    description: "We vet all our teachers personally, to ensure the highest quality teaching so you don't have to worry."
                  },
                  { 
                    image: "/icons/loved.svg",
                    title: "Loved by 10,000 Londoners", 
                    description: "Consistent 5 ⭐️ reviews by our community"
                  },
                  { 
                    image: "/icons/small_class.svg", 
                    title: "Small class sizes", 
                    description: "Our students are given the attention they neeed. That's why we only have a maximum of 10 students per class"
                  }
                ]}
              />
            </div>
          </BlankCard>
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ClassSummaryContainer);