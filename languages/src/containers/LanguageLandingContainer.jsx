import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './language-landing-container.less';
// Actions
import { 
  viewLanguageLandingPageAction,
  selectCourseTypeAction,
  openEmailPopupAction
} from '../appActions.js';
// Constants
import reviews from '../constants/reviews';
import courseTypes, { courseNames } from './../constants/courseTypes';
import { languageNames } from '../constants/languages';
// Components
import SubmitEmailPopupContainer from './SubmitEmailPopupContainer.jsx';
import ThreePointSalesBanner from '../components/ThreePointSalesBanner.jsx';
import ImageTextListBanner from '../components/ImageTextListBanner.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import CycleComponentsBanner from '../components/CycleComponentsBanner.jsx';
import Header from '../components/Header.jsx';
import TextBanner from '../components/TextBanner.jsx';
import PricingBox from '../components/PricingBox.jsx';
import CenterIconBanner from '../components/CenterIconBanner.jsx';

const mapStateToProps = (state) => ({
  selectedLanguage: state.app.selectedLanguage,
  selectedLanguageName: languageNames[state.app.selectedLanguage]
});

const mapDispatchToProps = (dispatch, state) => ({
  viewLanguageLandingPage: () => dispatch(viewLanguageLandingPageAction()),
  selectCourseType: (details) => dispatch(selectCourseTypeAction(details)),
  openEmailPopup: (text) => dispatch(openEmailPopupAction(text)),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    selectCourseType: ({ type, location }) => {
      // if (type === courseTypes.ONE_TO_ONE) {
      //   dispatchProps.openEmailPopup({
      //     title: "It's on the way",
      //     description: `We’re still defining our ${type} curriculum, but give us your details and we’ll reach out when we’re ready.`,
      //     submittedTitle: "Thank you",
      //     submittedDescription: `We will be in touch shortly!`,
      //     emailText: `User is interested in ${type} courses`
      //   });
      // }
      dispatchProps.selectCourseType({
        type,
        location,
        language: stateProps.selectedLanguage
      });
    }
  }
]);

class LanguageLandingContainer extends React.Component {

  componentDidMount() {
    this.props.viewLanguageLandingPage();
  }

  renderCourseTypeButtons(location) {

    const selectCourseType = (type) => this.props.selectCourseType({ type, location});

    return (
      <div>
        <div 
          className="language-landing-container__header-button"
          onClick={() => selectCourseType(courseTypes.WEEKLY)}
        >
          {courseNames[courseTypes.WEEKLY]}
        </div>

        <div 
          className="language-landing-container__header-button"
          onClick={() => selectCourseType(courseTypes.INTENSIVE)}
        >
          {courseNames[courseTypes.INTENSIVE]}
        </div>

        <div 
          className="language-landing-container__header-button"
          onClick={() => selectCourseType(courseTypes.ONE_TO_ONE)}
        >
          {courseNames[courseTypes.ONE_TO_ONE]}
        </div>
      </div>
    );
  }

  render () {
    return (
      <div>
        <Header
          image="/images/header-image.jpg"
          title={["The most personal", `${this.props.selectedLanguageName} course`, "ever.", ]}
          description={`Obby's ${this.props.selectedLanguageName} courses are designed to create the best learning experience for you. In-person learning, flexible locations, and ongoing support via our online platform & community.`}
        >
          {this.renderCourseTypeButtons("header")}
        </Header>

        <SubmitEmailPopupContainer />

        {/* COURSE TYPES */}
        <div className="language-landing-container__section container">
          
          <div className="language-landing-container__title">
            What type of learning works best for you?
          </div>

          <div className="language-landing-container__pricing-boxes">
            {/* WEEKLY CLASSES */}
            <div className="language-landing-container__pricing-box">
              <PricingBox
                color="cruise"
                title={courseNames[courseTypes.WEEKLY]}
                description="The perfect way to get started. One class per week, for 8 weeks"
                pricing="8 classes = £200"
                list={[
                  "Daytime, Evenings & Weekends",
                  "Small class sizes (10 people max)",
                  "Locations all across London",
                  "Money back guarantee",
                  "Catch-up online if you can’t make one week",
                ]}
                buttonText="Find your class"
                onClick={() => this.props.selectCourseType({
                  type: courseTypes.WEEKLY,
                  location: "pricing module",
                })}
              />
            </div>
            {/* INTENSIVE COURSES */}
            <div className="language-landing-container__pricing-box">
              <PricingBox
                color="humming-bird"
                title={courseNames[courseTypes.INTENSIVE]}
                description="Go from zero to hero in two full days. 6 hours per day."
                pricing="2-full days = £200"
                list={[
                  "Daytime, Evenings & Weekends",
                  "Small class sizes (10 people max)",
                  "Locations all across London",
                  "Money back guarantee",
                  "Lifetime access to our online portal",
                ]}
                buttonText="Find out more"
                onClick={() => this.props.selectCourseType({
                  type: courseTypes.INTENSIVE,
                  location: "pricing module",
                })}
              />
            </div>
            {/* ONE TO ONE */}
            <div className="language-landing-container__pricing-box">
              <PricingBox
                color="astra"
                title={courseNames[courseTypes.ONE_TO_ONE]}
                description="Keep it flexible, or top-up. At your home, or one of our locations"
                pricing="1 hour = £35"
                list={[
                  "Learn at your own pace",
                  "Locations all across London",
                  "Hand-selected, native teachers",
                  "Money back guarantee",
                  "Lifetime access to our online portal",
                ]}
                buttonText="Find out more"
                onClick={() => this.props.selectCourseType({
                  type: courseTypes.ONE_TO_ONE,
                  location: "pricing module",
                })}
              />
            </div>
          </div>

        </div>

        <CenterIconBanner
          image="/icons/tick.svg"
          title="100% Moneyback guarantee!"
          description="We promise all of our learners a great experience. If you’re unhappy after your first class, we’ll refund you in full."
        />

        <ThreePointSalesBanner
          title="What you get"
          points={[
            { 
              image: "/icons/university-hat.svg", 
              title: "Top rated instructors", 
              description: "We vet all our teachers personally, to ensure the highest quality teaching - so you don't have to worry"
            },
            { 
              image: "/icons/person.svg",
              title: "Small class size", 
              description: "Our students are given the attention they need. That’s why we only have a maximum of 10 students per class"
            },
            { 
              image: "/icons/thumbs-up.svg", 
              title: "Money back guarantee", 
              description: "If your class doesn't reach your expectations, we'll give your money back"
            }
          ]}
        />
        <TextBanner
          title="Flexibility that works around your busy schedule"
          description="There’s no better way to learn a language than learning from another person. But sometimes things come up, we get it. If you can’t make a class one week you can mix & match or catch-up online."
          list={[
            "Mix & match",
            "Catch-up onlline"
          ]}
        />
        <CycleComponentsBanner
          color="azalea"
          title="Loved by over 10,000 Londoners"
          description="Our classes are rated 5 ⭐️ by people all across London."
          list={reviews}
          viewComponent={(review) => (
            <ReviewCard
              image={review.image}
              name={review.name}
              language={review.language}
              label={`Learning ${review.languageName}`}
              text={review.text}
            />
          )}
        />
        <ImageTextListBanner
          title="Learn with people on the same journey"
          description="We believe good, healthy learning happens in a social environment, so we focus on group classes instead of individual."
          image="/images/learn.png"
          points={[
            { image: "/icons/small-class-icon.svg", text: "Small class size" },
            { image: "/icons/study-groups.svg", text: "Study groups" },
            { image: "/icons/learning-community.svg", text: "Learning community" },
          ]}
        />
        <div className="language-landing-container__here-to-learn">
          <h2 className="language-landing-container__sub-title">The most personal {this.props.selectedLanguageName} course ever.</h2>
          {this.renderCourseTypeButtons("footer")}
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LanguageLandingContainer);