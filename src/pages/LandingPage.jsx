import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './landing-page.less';
// Actions
import { 
  chooseLanguageAction,
  viewLandingPageAction 
} from './../appActions.js';
// Constants
import reviews from './../constants/reviews';
import { languagesValueAndName } from './../constants/languages';
// Components
import Menu from './../components/Menu.jsx';
import ThreePointSalesBanner from './../components/ThreePointSalesBanner.jsx';
import ImageTextListBanner from '../components/ImageTextListBanner.jsx';
import LanguageButton from '../components/LanguageButton.jsx';
import ReviewsBanner from '../components/ReviewsBanner.jsx';
import Footer from '../components/Footer.jsx';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, state) => ({
  viewLandingPage: () => dispatch(viewLandingPageAction()),
  chooseLanguage: (language) => dispatch(chooseLanguageAction(language))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    
  }
]);

class LandingPageContainer extends React.Component {

  componentDidMount() {
    this.props.viewLandingPage();
  }

  render () {
    return (
      <div className="landing-page">
        <Menu/>
        <div className="landing-page__header">
          <img 
            src="/images/header-image.jpg" 
            alt=""
            className="landing-page__header-image"
          />
          <div className="landing-page__header-text">
            <h1 className="landing-page__header-title">
              <span className="landing-page__header-title-part">
                ¡Holá!
              </span>
              <span className="landing-page__header-title-part">
                What are you
              </span>
              <span className="landing-page__header-title-part">
                here to learn?
              </span>
            </h1>
            <div className="landing-page__header-buttons">
              {languagesValueAndName.map(({ value, name }) => (
                <LanguageButton 
                  key={value}
                  onClick={() => this.props.chooseLanguage(value)}
                  language={value}
                  text={name}
                />
              ))}
            </div>
            <div className="landing-page__header-price">Starting from £20/class</div>
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
        <ReviewsBanner
          reviews={reviews}
        />
        <ImageTextListBanner
          title="Money back guarantee!"
          description="We ensure quality. If your class doesn't reach your expectations, we'll give your money back."
          image="/images/money-back.png"
          reverse={true}
          points={[
            { image: "/icons/tick.svg", text: "Cancel at any time" },
            { image: "/icons/tick.svg", text: "Full-refund" },
            { image: "/icons/tick.svg", text: "We will help you find an alternative teacher that better suits your needs" },
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
              description: "You can choose from a large variety of options, from single day classes to monthly subsctiptions"
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
        <div className="landing-page__here-to-learn">
          <h2 className="landing-page__sub-title">What are you here to learn?</h2>
          {languagesValueAndName.map(({ value, name }) => (
            <LanguageButton 
              key={value}
              onClick={() => this.props.chooseLanguage(value)}
              language={value}
              text={name}
            />
          ))}
        </div>
        <Footer/>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LandingPageContainer);