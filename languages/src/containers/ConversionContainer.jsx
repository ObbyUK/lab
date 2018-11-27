import React from 'react';
import { connect } from 'react-redux';
import { __, pipe, prop, mergeAll, contains } from 'ramda';

import './conversion-container.less';
// Actions & Style
import { 
  chooseDateAction,
  viewChooseDatePageAction,
  openEmailPopupAction
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ClassSelectableTimesCard from '../components/ClassSelectableTimesCard.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import ThreePointSalesBanner from '../components/ThreePointSalesBanner.jsx';

const mapStateToProps = (state) => ({
  selectedLanguage: state.app.selectedLanguage,
  selectedLocationsOptions: state.app.flow.locationOptions.filter((location) => contains(location.name, state.app.locations)),
  selectedTimes: state.app.time,
  locations: state.app.locations
});

const mapDispatchToProps = (dispatch) => ({
  chooseDate: (date) => dispatch(chooseDateAction(date)),
  viewChooseDatePage: () => dispatch(viewChooseDatePageAction()),
  openEmailPopup: (text) => dispatch(openEmailPopupAction(text)),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    openEmailPopup: () => {
      dispatchProps.openEmailPopup({
        title: "Tell us what you want",
        description: `We are constantly adding new classes and locations so if you would like to make a request, just add your details and we will get in touch`,
        submittedTitle: "Thank you",
        submittedDescription: `We will be in touch shortly!`,
        emailText: `None of the dates for ${stateProps.selectedLanguage} in ${stateProps.locations} work.`
      });
    }
  }
]);

class FormContainer extends React.Component {

  componentDidMount() {
    this.props.viewChooseDatePage();
  }

  render () {
    return (
      <div className="conversion-container__body container">

        {/* DATES */}
        <div className="conversion-container__card">
          <BlankCard className="conversion-container__card-overide">
            <div className="conversion-container__card-section conversion-container__card-section--dates">
              <h2 className="conversion-container__card-title">
                Here's what we have for you
              </h2>
            </div>
            {this.props.selectedLocationsOptions.map((location, index) => (
              <div key={index} className="conversion-container__card-section conversion-container__card-section--dates">
                <ClassSelectableTimesCard 
                  title={location.name}
                  address={location.address}
                  lessonsStart={location.lessonsStart}
                  lessonsEnd={location.lessonsEnd}
                  priceLabel="8 classes"
                  previousPrice="£200"
                  price="£180"
                  dates={location.dates.filter(pipe(prop('type'), contains(__, this.props.selectedTimes)))}
                  onClick={(session) => {
                    this.props.chooseDate({ 
                      session, 
                      location,
                      region: location.value,
                      address: location.address,
                      date: session.starts,
                      startTime: session.lessonsStart,
                      endTime: session.lessonsEnd
                    });
                  }}
                />
              </div>
            ))}
            <div className="conversion-container__card-note">
              None of these dates or locations work for you? <span onClick={this.props.openEmailPopup.bind(this)} className="conversion-container__card-link">Let us know</span>
            </div>
          </BlankCard>
        </div>
        
        {/* MONEY BACK GURANTEE */}
        <div className="conversion-container__card">
          <BlankCard>
            <h2 className="conversion-container__card-title">
              100% Moneyback guarantee
            </h2>
            <p className="conversion-container__card-description">
              We promise all of our learners a great experience. If you’re unhappy after your first class, we’ll refund you in full.
            </p>
            <div className="conversion-container__card-section">
              <ImageBulletPoints
                points={[
                  {
                    image: "/icons/tick.svg",
                    title: "Full refund",
                  },
                  {
                    image: "/icons/tick.svg",
                    title: "No hard feelings",
                  },
                ]}
              />
            </div>
          </BlankCard>
        </div>
        
        {/* MORE ABOUT OBBY */}
        <div className="conversion-container__card">
          <BlankCard>
            <h2 className="conversion-container__card-title">
              More about Obby
            </h2>
            <div className="conversion-container__card-section conversion-container__card-section--three-point-sales-banner">
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
)(FormContainer);