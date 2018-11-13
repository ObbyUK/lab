import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './conversion-container.less';
// Lib & Constants
import flow from './../constants/flow';
// Actions & Style
import {
  chooseDateAction,
  submitPaidSubscriptionAction
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import ClassSelectableTimesCard from '../components/ClassSelectableTimesCard.jsx';
import ThreePointSalesBanner from '../components/ThreePointSalesBanner.jsx';

const mapStateToProps = (state) => ({
  status: state.app.status,
  date: state.app.date
});

const mapDispatchToProps = (dispatch) => ({
  chooseDate: (date) => dispatch(chooseDateAction(date)),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {}
]);

class ConversionContainer extends React.Component {

  render () {
    return (
      <div className="conversion-container__body container">
          {/* OPTIONS */}
          <div className="conversion-container__card">
            <BlankCard>
              <h2 className="conversion-container__card-title">
                Here's what we have for you
              </h2>
            {flow.locationOptionsTest.map((location, index) => (
                <div key={index} className="conversion-container__card-section">
                  <ClassSelectableTimesCard
                    title={location.name}
                    address={location.address}
                    lessonsStart={location.lessonsStart}
                    lessonsEnd={location.lessonsEnd}
                    priceLabel="Taster + 3 classes"
                    price="£81"
                    options={location.options}
                    onClick={(session) => this.props.chooseDate({
                      date: session.starts,
                      location,
                      session
                    })}
                  />
                </div>
              ))}
            </BlankCard>
          </div>

          <div className="conversion-container__card">
            <BlankCard>
              <h2 className="conversion-container__card-title">
                Your first class is free. If you like it after that, it’s £27 per week, for 3 weeks
              </h2>
              <div className="conversion-container__card-section">
                <ImageBulletPoints
                  points={[
                    {
                      image: "/icons/pay_0.svg",
                      title: "Your first class is on us",
                      text: "Pay £0 today, see if you like it before committing",
                    },
                    {
                      image: "/icons/tick.svg",
                      title: "Pay in instalments",
                      text: "Instead of paying the full amount up front, you'll pay in weekly instalments 24 hours after your taster."
                    },
                    {
                      image: "/icons/installments.svg",
                      title: "Money back guarantee",
                      text: "We ensure quality. If the class doesn't reach your expectations, we'll give your money back.",
                    }
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
)(ConversionContainer);