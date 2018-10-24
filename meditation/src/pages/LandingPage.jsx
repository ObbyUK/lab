import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './landing-page.less';
// Actions
import { 
  viewLandingPageAction 
} from './../appActions.js';
import flow from './../constants/flow';
// Components
import Header from './../components/Header.jsx';
import Menu from './../components/Menu.jsx';
import Footer from './../components/Footer.jsx';
import PrimaryButton from './../components/PrimaryButton.jsx';
import ThreePointSalesBanner from './../components/ThreePointSalesBanner.jsx';
import ReviewsBanner from './../components/ReviewsBanner.jsx';
import ImageTextListBanner from './../components/ImageTextListBanner.jsx';
import QuestionsBanner from '../components/QuestionsBanner.jsx';
import StickyFollowWrap from '../components/StickyFollowWrap.jsx';
import ClassesByLocationsContainer from '../containers/ClassesByLocationsContainer.jsx';
import Schedule from '../components/Schedule.jsx';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, state) => ({
  viewLandingPage: () => dispatch(viewLandingPageAction()),
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
        
        <div id="start-of-page" style={{ height: '1px', width: '100%' }}></div>
        
        {/* <StickyFollowWrap
          className="landing-page__menu"
          followAfter="start-of-page"
          stickAt="end-of-footer"
          follows="body"
          offset={0}
        >
          <Menu mode="normal">
            <div className="landing-page__menu-link">About us</div>
            <div className="landing-page__menu-link">Reviews</div>
            <div className="landing-page__menu-link">What you need</div>
            <div className="landing-page__menu-link">Schedule</div>
            <div className="landing-page__menu-link">Teachers</div>
            <div className="landing-page__menu-link">Venues</div>
            <div className="landing-page__menu-button">
              <PrimaryButton 
                color="ebony-clay"
                text="Book a course"
              />
            </div>
          </Menu>
        </StickyFollowWrap> */}

        <div id="header">
          <Header
            image="/images/meditation-header.png"
            color="white"
            customBackgroundColor="rgb(33, 43, 62)"
            title={["The most personal", "meditation course", "ever"]}
            description="Master the skills to meditate on your own, with support from London's best teachers"
          >
            <div className="landing-page__button">
              <PrimaryButton
                size="huge"
                text="Book a course"
                color="gallery"
              />
            </div>
          </Header>
        </div>
        <div id="body">
          <ThreePointSalesBanner
            title="What makes us different?"
            points={[
              { 
                image: "/icons/in-person.svg", 
                title: "In-person meditation", 
                description: "You get to meditate in person with some of London’s most popular teachers, loved by more than 20,000 people. "
              },
              { 
                image: "/icons/locations.svg",
                title: "Great locations across London", 
                description: "We offer classes in some of the nicest venues in London, from East to West, North to South."
              },
              { 
                image: "/icons/community.svg", 
                title: "Online community", 
                description: "Once signing up to our courses you receive access to our learning journal where you can engage with other students and teachers."
              }
            ]}
          />
          <ReviewsBanner
            color="cruise"
            reviews={flow.reviews}
          />
          <ThreePointSalesBanner
            title="Get started, as easy as 1-2-3."
            points={[
              { 
                image: "/icons/1.svg", 
                title: "Wear anything you want", 
                description: "You don’t need to worry about what you’ll wear, but we recommend wearing light, casual clothing, to improve relaxation."
              },
              { 
                image: "/icons/2.svg",
                title: "Don’t need to bring anything", 
                description: "You don’t need to bring anything with you. We’re equipped with cushions, mats, soft drinks and good mood."
              },
              { 
                image: "/icons/3.svg", 
                title: "Have an open mind", 
                description: "Our top-rated instructors will guide you all the way, so you don’t need to worry. Just sit back, relax and enjoy a moment in stillness."
              }
            ]}
          />
          <Schedule
            price={flow.schedule.price}
            buttonText={flow.schedule.buttonText}
            blurb={flow.schedule.blurb}
            note={flow.schedule.note}
            weeks={flow.schedule.weeks}
          />
          <ImageTextListBanner
            color="azalea"
            title="Great teachers, great vibes"
            description="We’ve hand picked some of the best meditation teachers in London, helping you easily get up to speed with etc."
            image="/images/teachers.png"
            points={[
              { image: "/icons/small-class-icon.svg", text: "Hand-picked teachers" },
              { image: "/icons/study-groups.svg", text: "Tried and tested curriculums" },
              { image: "/icons/learning-community.svg", text: "Learning community" },
            ]}
          />
          <ImageTextListBanner
            title="All across London, in some of the nicest venues"
            description="We have courses available at multiple times, all across London. Don’t need to worry about finding the right time."
            image="/images/venues.png"
            reverse={true}
            points={[
              { image: "/icons/tick.svg", text: "Multiple locations" },
              { image: "/icons/tick.svg", text: "Flexible timing" },
              { image: "/icons/tick.svg", text: "Money back guarantee if you don’t enjoy your first class" },
            ]}
          />
          <ClassesByLocationsContainer/>
          <QuestionsBanner
            title="Frequently asked questions"
            questions={flow.faq}
          />
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