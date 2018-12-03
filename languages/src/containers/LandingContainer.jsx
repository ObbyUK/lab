import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './landing-container.less';
// Actions
import { 
  chooseLanguageAction,
  viewLandingPageAction
} from './../appActions.js';
// Constants
import reviews from './../constants/reviews';
import { languageNames, languagesValueAndName } from './../constants/languages';
// Components
import ThreePointSalesBanner from './../components/ThreePointSalesBanner.jsx';
import ImageTextListBanner from '../components/ImageTextListBanner.jsx';
import LanguageButton from '../components/LanguageButton.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import CycleComponentsBanner from '../components/CycleComponentsBanner.jsx';
import Header from '../components/Header.jsx';
import TextBanner from '../components/TextBanner.jsx';
import PricingBox from '../components/PricingBox.jsx';

const mapStateToProps = (state) => ({
  selectedLanguageName: languageNames[state.app.selectedLanguage]
});

const mapDispatchToProps = (dispatch, state) => ({
  chooseLanguage: (language) => dispatch(chooseLanguageAction(language)),
  viewLandingPage: () => dispatch(viewLandingPageAction())
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {}
]);

class LandingContainer extends React.Component {

  componentDidMount() {
    this.props.viewLandingPage();
  }

  render () {
    return (
      <div>
        <Header
          image="/images/header-image.jpg"
          title={["The most personal", `${this.props.selectedLanguageName} course`, "ever.", ]}
          description={`Obby's ${this.props.selectedLanguageName} courses are designed to create the best learning experience for you. In-person learning, flexible locations, and ongoing support via our online platform & community.`}
        >
          <div className="landing-container__header-button">
            Weekly classes 
          </div>
          <div className="landing-container__header-button">
            Intensive courses
          </div>
          <div className="landing-container__header-button">
            1-to-1 lessons
          </div>
        </Header>
        <div className="landing-container__section container">
          
          <div className="landing-container__title">
            What type of learning works best for you?
          </div>

          <div className="landing-container__pricing-boxes">
            {/* WEEKLY CLASSES */}
            <div className="landing-container__pricing-box">
              <PricingBox
                color="cruise"
                title="Weekly classes"
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
                onClick={console.log}
                buttonNote="Payable in weekly instalments"
              />
            </div>
            {/* INTENSIVE COURSES */}
            <div className="landing-container__pricing-box">
              <PricingBox
                color="humming-bird"
                title="Intensive courses"
                description="Go from zero to hero in a week. 6 hours per day, for a full week"
                pricing="5-full days = £500"
                list={[
                  "Daytime, Evenings & Weekends",
                  "Small class sizes (10 people max)",
                  "Locations all across London",
                  "Money back guarantee",
                  "Lifetime access to our online portal",
                ]}
                buttonText="Find out more"
                onClick={console.log}
              />
            </div>
            {/* ONE TO ONE */}
            <div className="landing-container__pricing-box">
              <PricingBox
                color="astra"
                title="1-to-1 lessons"
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
                onClick={console.log}
              />
            </div>
          </div>

        </div>
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
          title="100% Moneyback guarantee"
          description="We promise all of our learners a great experience. If you’re unhappy after your first class, we’ll refund you in full."
          image="/images/money-back.png"
          reverse={true}
          points={[
            { image: "/icons/tick.svg", text: "Full-refund" },
            { image: "/icons/tick.svg", text: "No hard feelings" },
          ]}
        />
        <ThreePointSalesBanner
          color="cruise"
          title="How it works"
          points={[
            { 
              image: "/icons/1.svg", 
              title: "Tell us more about you", 
              description: "We need to know things like your location, skill level and availability in order to match you with the right teachers"
            },
            { 
              image: "/icons/2.svg",
              title: "Choose your options", 
              description: "You can choose from a large variety of options, from single day classes to monthly subscriptions"
            },
            { 
              image: "/icons/3.svg", 
              title: "Start learning", 
              description: "Start learning from London’s best language teachers with no commitments. Cancel at any time"
            }
          ]}
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
        <div className="landing-container__here-to-learn">
          <h2 className="landing-container__sub-title">What are you here to learn?</h2>
          {languagesValueAndName.map(({ value, name }) => (
            <LanguageButton 
              key={value}
              onClick={() => this.props.chooseLanguage(value)}
              language={value}
              text={name}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LandingContainer);