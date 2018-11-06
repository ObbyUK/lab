import React from 'react';
import { connect } from 'react-redux';
import { mergeAll, identity } from 'ramda';

import './pitch-container.less';
// Constants
import flow from './../constants/flow';
import { seeClassOptionsAction } from './../appActions.js';
// Components
import Menu from './../components/Menu.jsx';
import PrimaryButton from './../components/PrimaryButton.jsx';
import ThreePointSalesBanner from './../components/ThreePointSalesBanner.jsx';
import CycleComponentsBanner from '../components/CycleComponentsBanner.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import ImageTextListBanner from './../components/ImageTextListBanner.jsx';
import QuestionsBanner from '../components/QuestionsBanner.jsx';
import StickyFollowWrap from '../components/StickyFollowWrap.jsx';
import Schedule from '../components/Schedule.jsx';
import TeachersBanner from '../components/TeachersBanner.jsx';
import ButtonBanner from '../components/ButtonBanner.jsx';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, state) => ({
  seeClassOptions: () => dispatch(seeClassOptionsAction())
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
            <a href="#schedule" className="pitch-container__menu-link">Schedule</a>
            <a href="#learning-portal" className="pitch-container__menu-link">Portal</a>
            <a href="#how-it-works" className="pitch-container__menu-link">How it works</a>
            <a href="#teachers" className="pitch-container__menu-link">Teachers</a>
            <a href="#venues" className="pitch-container__menu-link">Venues</a>
            <a href="#faq" className="pitch-container__menu-link">FAQs</a>
            <a href="#classes" className="pitch-container__menu-button">
              <PrimaryButton 
                color="ebony-clay"
                text="Book free taster"
                onClick={identity}
              />
            </a>
          </Menu>
        </StickyFollowWrap>

        <div id="header">
          <ImageTextListBanner
            color="azalea"
            title="Learn meditation with London's top teachers"
            size="large"
            image="/images/meditation-2.png"
            reverse={true}
            points={[
              { image: "/icons/red-tick.svg", text: "Personal learning with attentive teachers" },
              { image: "/icons/red-tick.svg", text: "Tried and tested curriculums" },
              { image: "/icons/red-tick.svg", text: "Learning community" },
            ]}
          >
            <div className="pitch-container__button-wrap">
              <div className="pitch-container__button">
                <PrimaryButton
                  size="huge"
                  text="Book a course"
                  onClick={this.props.seeClassOptions.bind(this)}
                />
              </div>
              <div className="pitch-container__button-label">
                First class on us!
              </div>
            </div>
          </ImageTextListBanner> 
        </div>

        <div id="body">
          
          <div id="about-us">
            <ThreePointSalesBanner
              title="Live a happier life through meditation"
              imageHeight="108px"
              points={[
                { 
                  image: "/icons/stress.svg",
                  title: "Helping relieve stress, anxiety and other isses ",
                },
                { 
                  image: "/icons/focus.svg",
                  title: "Science shows that meditation helps you stay focused longer and better",
                },
                { 
                  image: "/icons/in-person.svg", 
                  title: "London is a busy place. Learn how to be present and get to know yourself.",
                }
              ]}
            />
          </div>

          <div id="reviews">
            <CycleComponentsBanner
              color="cruise"
              title="Loved by over 10,000 Londoners"
              description="Our classes are rated 5 ⭐️ by people all across London."
              list={flow.reviews}
              viewComponent={(review) => (
                <ReviewCard
                  image={review.image}
                  name={review.name}
                  language={review.language}
                  languageName={review.languageName}
                  text={review.text}
                />
              )}
            />
          </div>

          <div id="schedule">
            <Schedule
              title={flow.schedule.title}
              description={flow.schedule.description}
              note={flow.schedule.note}
              weeks={flow.schedule.weeks}
            />
          </div>

          <div id="learning-portal">
            <ImageTextListBanner
                color="polar"
                title="Lifetime access to our learning portal"
                description="When joining Obby, you get access to our personal platform to connect with their teacher on an ongoing basis and have access to support and learning materials."
                image="/images/learning-portal@2x.png"
                reverse={true}
                imageClassName="pitch-container__learning-portal-image"
                points={[
                  { image: "/icons/tick.svg", text: "Personal learning with attentive teachers" },
                  { image: "/icons/tick.svg", text: "Tried and tested curriculums" },
                  { image: "/icons/tick.svg", text: "Learning community" },
                ]}
              />
          </div>

          <div id="how-it-works">
            <ThreePointSalesBanner
              title="Pay later, only if you like it"
              points={[
                { 
                  image: "/icons/1.svg", 
                  title: "Your first class is on us", 
                  description: "Pay £0 today, and see how you like it before committing"
                },
                { 
                  image: "/icons/2.svg",
                  title: "Receive your welcome pack", 
                  description: "Get your welcome pack sent by post and enjoy your first class"
                },
                { 
                  image: "/icons/3.svg", 
                  title: "Remaining balance charged", 
                  description: "24h after your first class, the remaining balance is charged if you are happy to continue. If not, no hard feelings!"
                }
              ]}
            />
          </div>

          <div id="teachers">
            <TeachersBanner
              color="azalea"
              title="Some of our teachers"
              teachers={[
                {
                  name: "Louise",
                  description: "Louise supports and encourages people to live healthily, happily and humanely. She does this through meditation, yoga, and mindful decision-making. Louise has been teaching meditation class on Obby since 2016.",
                  image: "/images/teacher-louise.jpg",
                  avatar: "/images/teacher-louise-avatar.jpg",
                },
                {
                  name: "Sofia",
                  description: "Sofia was initially drawn to meditation whilst studying at university and quickly fell in love with the sense of peace it brought. So she decided to make her passion her profession and hasn’t looked back since!",
                  image: "/images/teacher-sofia-small.jpg",
                  avatar: "/images/teacher-sofia-avatar.jpg",
                },
                {
                  name: "James",
                  description: "James has been practicing modern mindfulness for 10 years now and has been teaching it for 4, after transitioning from a job in the city, to following his dreams.",
                  image: "/images/teacher-james-small.jpg",
                  avatar: "/images/teacher-james-avatar.jpg",
                }
              ]}
            />
          </div>
          
          <div id="venues">
            <CycleComponentsBanner
              color="astra"
              title="All across London, in some of the nicest venues"
              description="All our mindfulness and meditation classes are in beautiful venues all across London, so you can learn in a calm and relaxing environment."
              list={[
                {
                  src: "/images/ReMind.jpg",
                  text: "ReMind",
                },
                {
                  src: "/images/place.jpg",
                  text: "Crinan St",
                },
                {
                  src: "/images/CuthbertCentre.png",
                  text: "The Philbeach Hall",
                },
                {
                  src: "/images/Benk_&_Bo.jpg",
                  text: "Benk & Bo",
                },
              ]}
              viewComponent={(image) => (
                <div className="pitch-container__location-image-wrap">
                  <img
                    className="pitch-container__location-image"
                    src={image.src} 
                    alt={image.text}
                  />
                  <p className="pitch-container__location-image-text">{image.text}</p>
                </div>
              )}
            />
          </div>

          <div id="ready-to-have-a-better-life">
            <ButtonBanner 
              title="Ready to have a better life?"
              buttonText="Book a course"
              onClick={this.props.seeClassOptions.bind(this)}
              label="First class on us!"
              points={[
                { 
                  image: "/icons/red-tick.svg",
                  text: "Small class size - Maximum 10 people",
                },
                { 
                  image: "/icons/red-tick.svg",
                  text: "Locations all across London",
                },
                { 
                  image: "/icons/red-tick.svg",
                  text: "Trusted teachers",
                }
              ]}
            />
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