import React from 'react';
import { connect } from 'react-redux';
import { __, pipe, prop, mergeAll, contains } from 'ramda';

import './conversion-container.less';
// Actions & Style
import { 
  chooseDateAction,
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ClassSelectableTimesCard from '../components/ClassSelectableTimesCard.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import ThreePointSalesBanner from '../components/ThreePointSalesBanner.jsx';

const mapStateToProps = (state) => ({
  selectedLocationsOptions: state.app.flow.locationOptions.filter((location) => contains(location.name, state.app.locations)),
  selectedTimes: state.app.time
});

const mapDispatchToProps = (dispatch) => ({
  chooseDate: (date) => dispatch(chooseDateAction(date)),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {}
]);

class FormContainer extends React.Component {

  render () {
    return (
      <div className="conversion-container__body container">

        {/* OPTIONS */}
        <div className="conversion-container__card">
          <BlankCard>
            <h2 className="conversion-container__card-title">
              Here's what we have for you
            </h2>
            {this.props.selectedLocationsOptions.map((location, index) => (
              <div key={index} className="conversion-container__card-section">
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
          </BlankCard>
        </div>
            
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