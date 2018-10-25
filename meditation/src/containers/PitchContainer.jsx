import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './pitch-container.less';
// Constants
import flow from './../constants/flow';
// Components
import Header from './../components/Header.jsx';
import Menu from './../components/Menu.jsx';
import PrimaryButton from './../components/PrimaryButton.jsx';
import ThreePointSalesBanner from './../components/ThreePointSalesBanner.jsx';
import ReviewsBanner from './../components/ReviewsBanner.jsx';
import ImageTextListBanner from './../components/ImageTextListBanner.jsx';
import QuestionsBanner from '../components/QuestionsBanner.jsx';
import StickyFollowWrap from '../components/StickyFollowWrap.jsx';
import Schedule from '../components/Schedule.jsx';
import BlurbBanner from '../components/BlurbBanner.jsx';
import ClassesByLocationsContainer from './ClassesByLocationsContainer.jsx';

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

class PitchContainer extends React.Component {
  render () {
    return (
      <div className="pitch-container">

        <StickyFollowWrap
          className="pitch-container__menu"
          followAfter="start-of-page"
          stickAt="end-of-footer"
          follows="body"
          offset={0}
        >
          <Menu mode="normal">
            <a href="#about-us" className="pitch-container__menu-link">About us</a>
            <a href="#reviews" className="pitch-container__menu-link">Reviews</a>
            <a href="#what-you-need" className="pitch-container__menu-link">What you need</a>
            <a href="#schedule" className="pitch-container__menu-link">Schedule</a>
            <a href="#teachers" className="pitch-container__menu-link">Teachers</a>
            <a href="#venues" className="pitch-container__menu-link">Venues</a>
            <a href="#faq" className="pitch-container__menu-link">FAQ's</a>
            <a href="#classes" className="pitch-container__menu-button">
              <PrimaryButton 
                color="ebony-clay"
                text="See dates"
                onClick={console.log}
              />
            </a>
          </Menu>
        </StickyFollowWrap>

        <div id="header">
          <Header
            image="/images/meditation-header.png"
            color="white"
            customBackgroundColor="rgb(33, 43, 62)"
            title={["The most personal", "meditation course", "ever"]}
            description="Master the skills to meditate on your own, with support from London's best teachers"
          >
            <div className="pitch-container__button">
              <PrimaryButton
                size="huge"
                text="See dates"
                color="gallery"
              />
            </div>
          </Header>
        </div>

        <div id="body">
          
          <div id="about-us">
            <ThreePointSalesBanner
              title="What makes us different?"
              points={[
                { 
                  image: "/icons/in-person.svg", 
                  title: "Keeping it simple", 
                  description: "Existing meditation courses are too confusing. We offer one beginners modern meditation course, and then tailor it to your needs"
                },
                { 
                  image: "/icons/locations.svg",
                  title: "Transparent pricing",
                  description: "By using flexible venue spaces across London,  we can charge £25 per session (1/2 the market average) whilst delivering higher quality courses"
                },
                { 
                  image: "/icons/in-person.svg",
                  title: "In-person & online", 
                  description: "In-person learning to help you get disconnect and learn from real people + online resources to make the most of your commitment to yourself"
                }
              ]}
            />
          </div>

          <div id="reviews">
            <ReviewsBanner
              color="cruise"
              reviews={flow.reviews}
            />
          </div>

          <div id="what-you-need">
            <ThreePointSalesBanner
              title="Pay later, only if you like it"
              points={[
                { 
                  image: "/icons/1.svg", 
                  title: "Pay £25 now", 
                  description: "Pay a fully-refundable deposit for the first class and get your money back if you don’t enjoy it"
                },
                { 
                  image: "/icons/2.svg",
                  title: "Receive your welcome pack", 
                  description: "Get your welcome pack sent by post and enjoy your first class"
                },
                { 
                  image: "/icons/3.svg", 
                  title: "Remaining balance charged", 
                  description: "24h after your first class, the remaining £75 is charged if you are happy to continue. If not, no hard feelings!"
                }
              ]}
            />
          </div>

          <BlurbBanner
            title="Online learning portal"
            text="When joining Obby, users get access to our personal platform to connect with their teacher on an ongoing basis and have access to support and learning materials."
            image="/icons/onlline-learning.svg"
          />

          <div id="schedule">
            <Schedule
              title={flow.schedule.title}
              description={flow.schedule.description}
              note={flow.schedule.note}
              weeks={flow.schedule.weeks}
            />
          </div>
          
          <div id="teachers">
            <ImageTextListBanner
              color="azalea"
              title="Great teachers, great vibes"
              description="We have hand-selected some of the best meditation teachers in London, and with them and with feedback from our learner community, we built this unique course. We guarantee:"
              image="/images/teachers.png"
              points={[
                { image: "/icons/small-class-icon.svg", text: "Personal learning with attentive teachers" },
                { image: "/icons/study-groups.svg", text: "Tried and tested curriculums" },
                { image: "/icons/learning-community.svg", text: "Learning community" },
              ]}
            />
          </div>
          
          <div id="venues">
            <ImageTextListBanner
              title="All across London, in some of the nicest venues"
              description="All our mindfulness and meditation classes are in beautiful venues all across London, so you can learn in a calm and relaxing environment."
              image="/images/venues.png"
              reverse={true}
              points={[
                { image: "/icons/tick.svg", text: "Multiple locations" },
                { image: "/icons/tick.svg", text: "Flexible timing" },
                { image: "/icons/tick.svg", text: "Money back guarantee if you don’t enjoy your first class" },
              ]}
            />
          </div>
          
          <div id="classes">
            <ClassesByLocationsContainer/>
          </div>

          <div id="faq">
            <QuestionsBanner
              title="Frequently asked questions"
              questions={flow.faq}
            />
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
)(PitchContainer);