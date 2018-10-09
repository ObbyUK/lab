import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './landing-page.less';
// Components
import Menu from './../components/Menu.jsx';
import ThreePointSalesBanner from './../components/ThreePointSalesBanner.jsx';

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
              image: "/images/university-hat.svg", 
              title: "Top rated instructors", 
              description: "We vet all our teachers personally, to ensure the highest quality teaching - so you don't have to worry."
            },
            { 
              image: "/images/person.svg",
              title: "Small class size", 
              description: "Our students are given the attention they need. That’s why we only have a maximum of 10 students per class"
            },
            { 
              image: "/images/thumbs-up.svg", 
              title: "Money back guarantee", 
              description: "If your class doesn't reach your expectations, we'll give your money back."
            }
          ]}
        />
        <ThreePointSalesBanner
          color="cruise"
          title="How it works"
          points={[
            { 
              image: "/images/1.svg", 
              title: "Tell us more about you", 
              description: "We need to know things like your location, skill level and availability in order to match you with the right teachers"
            },
            { 
              image: "/images/2.svg",
              title: "Choose your options", 
              description: "You can choose from a large variety of options, from single day classes to montly subsctiptions"
            },
            { 
              image: "/images/3.svg", 
              title: "Start learning", 
              description: "Start learning from London’s best language teachers with no commitments. Cancel at any time"
            }
          ]}
        />
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LandingPageContainer);