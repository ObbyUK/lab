import React from 'react';
import { connect } from 'react-redux';
import { mergeAll, propEq } from 'ramda';
import moment from 'moment';

import './class-summary-container.less';
// Constants & Actions & Lib
import { levelNames as skillLevelNames } from './../constants/skillLevels';
import { bookYourSpotAction } from './../appActions';
import String__UpperCaseFirstLetter from './../lib/String__UpperCaseFirstLetter';
// Component
import BlankCard from './../components/BlankCard.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import ThreePointSalesBanner from '../components/ThreePointSalesBanner.jsx';
import { Clock, Location, BarChart, Calendar} from '../components/Icons.jsx';
import IconLabel from '../components/IconLabel.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import RatingStars from '../components/RatingStars.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import CycleComponentsBanner from '../components/CycleComponentsBanner.jsx';
import TickList from '../components/TickList.jsx';

const mapStateToProps = (state) => ({
  skillLevel: state.app.skillLevel,
  address: state.app.chosenLocation.address,
  teacher: state.app.flow.teacher,
  chosenLanguage: state.app.selectedLanguage,
  chosenLanguageName: String__UpperCaseFirstLetter(state.app.selectedLanguage),
  skillLevelDescription: state.app.flow.skillLevelDescriptions[state.app.skillLevel],
  skillLevelContent: state.app.flow.levelOptions.find(propEq('value', state.app.skillLevel)).content,
  teachingMethodDescription: state.app.flow.teachingMethodDescription,
  feedbackSessionsDescription: state.app.flow.feedbackSessionsDescription,
  lessonDayAndTime: `${moment(state.app.chosenSession.starts, 'DD/MM/YYYY').format('dddd')}s, ${state.app.chosenSession.lessonsStart} - ${state.app.chosenSession.lessonsEnd}`,
  lessonDate: moment(state.app.chosenSession.starts, 'DD/MM/YYYY').format('Do MMM')
});

const mapDispatchToProps = (dispatch, state) => ({
  bookYourSpot: () => dispatch(bookYourSpotAction())
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
                  <div className="class-summary-container__icon-label">
                    <IconLabel icon={BarChart} text={skillLevelNames[this.props.skillLevel]}/>
                  </div>
                  <div className="class-summary-container__icon-label">
                    <IconLabel icon={Location} text={this.props.address}/>
                  </div>
                  <div className="class-summary-container__icon-label">
                    <IconLabel icon={Calendar} text={this.props.lessonDate}/>
                  </div>
                  <div className="class-summary-container__icon-label">
                    <IconLabel icon={Clock} text={this.props.lessonDayAndTime}/>
                  </div>
                </div>
              </div>
              <div className="class-summary-container__button">
                <PrimaryButton 
                  text="Book your spot"
                  size="huge"
                  onClick={this.props.bookYourSpot.bind(this)} 
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
              <div className="class-summary-container__teacher-avatar-wrap">
                <img src={this.props.teacher.avatar} alt={this.props.teacher.name} className="class-summary-container__teacher-avatar"/>
              </div>
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
            </div>
            
            <h2 className="class-summary-container__card-title">
              See what learners have to say about {this.props.teacher.name}
            </h2>

            <div className="class-summary-container__reviews">
              <CycleComponentsBanner
                size="small"
                color="white"
                list={this.props.teacher.reviews}
                viewComponent={(review) => (
                  <ReviewCard
                    image={review.image}
                    name={review.name}
                    language={this.props.chosenLanguage}
                    label={review.label}
                    text={review.text}
                  />
                )}
              />
            </div>

            <div className="class-summary-container__schedule">
              <h2 className="class-summary-container__card-title">
                What you'll learn
              </h2>
              
              <div className="class-summary-container__schedule-section">
                <h2 className="class-summary-container__schedule-section-title class-summary-container__schedule-section-title--robbins-egg-blue">
                  Learn the basics
                </h2>
                <div className="class-summary-container__schedule-section-text">
                  {this.props.skillLevelDescription}
                </div>
              </div>
              
              <div className="class-summary-container__schedule-section">
                <h2 className="class-summary-container__schedule-section-title class-summary-container__schedule-section-title--emerald">
                  Taught in {this.props.chosenLanguageName}
                </h2>
                <div className="class-summary-container__schedule-section-text">
                  {this.props.teachingMethodDescription}
                </div>
              </div>
              
              <div className="class-summary-container__schedule-section">
                <h2 className="class-summary-container__schedule-section-title class-summary-container__schedule-section-title--sun">
                  Feedback sessions & Online community
                </h2>
                <div className="class-summary-container__schedule-section-text">
                  {this.props.feedbackSessionsDescription}
                </div>
              </div>


            </div>

            <div className="class-summary-container__content">
              <h2 className="class-summary-container__card-title">
                Here is what is covered
              </h2>
              <TickList
                columns={2}
                list={this.props.skillLevelContent} 
              />
              <div className="class-summary-container__button-wrap">
                <div className="class-summary-container__button">
                  <PrimaryButton 
                    text="Book your spot"
                    size="huge"
                    onClick={this.props.bookYourSpot.bind(this)} 
                  />
                </div>
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
            <h2 className="class-summary-container__card-title class-summary-container__card-title--center">
              More about Obby
            </h2>
            <div className="class-summary-container__card-section class-summary-container__card-section--three-point-sales-banner">
              <ThreePointSalesBanner
                size="small"
                color="white"
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