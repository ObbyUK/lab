import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './landing-page.less';
// Components
import Menu from './../components/Menu.jsx';
import ThreePointSalesBanner from './../components/ThreePointSalesBanner.jsx';
import BulletPointSalesBox from '../components/BulletPointSalesBox.jsx';
import ImageTextListBanner from '../components/ImageTextListBanner.jsx';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, state) => ({

});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    
  }
]);

class LandingPageContainer extends React.Component {
  render () {
    return (
      <div className="landing-page">
        <Menu/>
        <ThreePointSalesBanner
          title="What you get"
          points={[
            { 
              image: "/icons/university-hat.svg", 
              title: "Top rated instructors", 
              description: "We vet all our teachers personally, to ensure the highest quality teaching - so you don't have to worry."
            },
            { 
              image: "/icons/person.svg",
              title: "Small class size", 
              description: "Our students are given the attention they need. That’s why we only have a maximum of 10 students per class"
            },
            { 
              image: "/icons/thumbs-up.svg", 
              title: "Money back guarantee", 
              description: "If your class doesn't reach your expectations, we'll give your money back."
            }
          ]}
        />
        {/* <div className="landing-page__image-text-section">
          <div className="landing-page__image-text-section-text">
            <BulletPointSalesBox 
              title="Money back guarantee!"
              description="We ensure quality. If your class doesn't reach your expectations, we'll give your money back."
              points={[
                { image: "/icons/tick.svg", text: "Cancel at any time" },
                { image: "/icons/tick.svg", text: "Full-refund" },
                { image: "/icons/tick.svg", text: "We will help you find an alternative teacher that better suits your needs" },
              ]}
            />
          </div>
          <div className="landing-page__image-text-section-image">
            <img className="landing-page__image" src="/images/money-back.png"/>
          </div>
        </div> */}
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
              description: "You can choose from a large variety of options, from single day classes to montly subsctiptions"
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
          
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LandingPageContainer);