import React from 'react';
import { connect } from 'react-redux';
import { propEq, mergeAll, contains } from 'ramda';

// Actions & Style
import { 
  chooseDateAction,
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ClassSelectableTimesCard from '../components/ClassSelectableTimesCard.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import ThreePointSalesBanner from '../components/ThreePointSalesBanner.jsx';
import TextList from '../components/TextList.jsx';

const mapStateToProps = (state) => ({
  skillLevelSessionPreview: state.app.flow.levelOptions.find(propEq('value', state.app.skillLevel)).sessionsPreview,
  selectedLocationsOptions: state.app.flow.locationOptions.filter((location) => contains(location.name, state.app.locations)),
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
      <div className="ready-to-learn-page__body container">

        {/* OPTIONS */}
        <div className="ready-to-learn-page__card">
          <BlankCard>
            <h2 className="ready-to-learn-page__card-title">
              Here's what we have for you
            </h2>
            <TextList
              title="You'll learn"
              list={this.props.skillLevelSessionPreview}
            />
            {this.props.selectedLocationsOptions.map((location, index) => (
              <div key={index} className="ready-to-learn-page__card-section">
                <ClassSelectableTimesCard 
                  title={location.name}
                  address={location.address}
                  lessonsStart={location.lessonsStart}
                  lessonsEnd={location.lessonsEnd}
                  priceLabel="Free taster + 7 classes"
                  price="£168"
                  options={location.options}
                  onClick={(session) => this.props.chooseDate({ session, location })}
                />
              </div>
            ))}
          </BlankCard>
        </div>
            
        <div className="ready-to-learn-page__card">
          <BlankCard>
            <h2 className="ready-to-learn-page__card-title">
              Your first class is free. After that, if you like it, it's £24 per week for 7 weeks.
            </h2>
            <div className="ready-to-learn-page__card-section">
              <ImageBulletPoints
                points={[
                  {
                    image: "/icons/pay_0.svg",
                    title: "Your first class is on us",
                    text: "Pay £0 today, see if you like it before committing",
                  },
                  {
                    image: "/icons/tick.svg",
                    title: "Money-back guarantee",
                    text: "We ensure quality. If the class doesn't reach your expectations, we'll give your money back.",
                  },
                  {
                    image: "/icons/installments.svg",
                    title: "Pay in instalments",
                    text: "Instead of paying the full amount up front, you'll pay in weekly installments",
                  }
                ]}
              />
            </div>
          </BlankCard>
        </div>

        <div className="ready-to-learn-page__card">
          <BlankCard>
            <h2 className="ready-to-learn-page__card-title">
              More about Obby
            </h2>
            <div className="ready-to-learn-page__card-section ready-to-learn-page__card-section--three-point-sales-banner">
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