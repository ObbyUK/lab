import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';
import moment from 'moment';

import './conversion-container.less';
// Lib & Constants
import { stripe } from './../../settings';
import flow from './../constants/flow';
// Actions & Style
import {
  chooseDateAction,
  submitPaidSubscriptionAction
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import DiscountCard from '../components/DiscountCard.jsx';
import ClassSelectableTimesCard from '../components/ClassSelectableTimesCard.jsx';

const mapStateToProps = (state) => ({
  status: state.app.status,
  date: state.app.date
});

const mapDispatchToProps = (dispatch) => ({
  chooseDate: (date) => dispatch(chooseDateAction(date)),
  submitPaidSubscription: (details) => dispatch(submitPaidSubscriptionAction(details))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    submit: () => dispatchProps.submit({
      name: stateProps.name,
      email: stateProps.email,
      chosenClass: stateProps.chosenClass,
    }),
    submitPaidSubscription: (token) => dispatchProps.submitPaidSubscription({
      token,
      date: stateProps.date,
      trialEnd: moment(stateProps.date, 'DD/MM/YYYY').add(2, 'd').unix(),
    })
  }
]);

class ConversionContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stripeHandler: null,
    };
  }

  componentDidMount() {
    this.state.stripeHandler = window.StripeCheckout.configure({
      key: stripe.key,
      image: "/images/favicon.png",
      locale: "en",
      currency: "GBP",
      token: (token) => this.props.submitPaidSubscription(token)
    });
  }

  selectClassDate(classSession) {
    this.props.chooseDate(classSession.starts);
    // necessary because we wont have access to this.props.date if we dont put this 
    // at the end of the event queue
    window.setTimeout(() => {
      this.openStripeCheckoutPopup();
    }, 0)
  }

  openStripeCheckoutPopup() {
    this.state.stripeHandler.open({
      name: "Book your spot",
      description: "No charge until after 1st class",
      zipCode: true,
      amount: 0,
      panelLabel: "Sign up for £0"
    });
  }

  render () {
    return (
      <div className="conversion-container__body container">
          <div className="conversion-container__card">
            <BlankCard>
              <h2 className="conversion-container__card-title">
                First class is free. If you like it after that, it’s £31 per week, for 3 weeks
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
                      title: "Remaining balance charged 24h later",
                      text: "24h after your first class, the remaining £75 is charged if you are happy to continue. If not, no hard feelings!",
                    },
                    {
                      image: "/icons/installments.svg",
                      title: "Money back guarantee",
                      text: "We ensure quality. If the class doesn't reach your expectations, we'll give your money back.",
                    }
                  ]}
                />
                <div className="conversion-container__discount-card">
                  <DiscountCard
                    original={{
                      title: "Average meditation class",
                      price: "£43 / class",
                      text: "Most meditation classes in London are £43",
                    }}
                    discount={{
                      title: "Obby",
                      price: "£31 / class (20% less)",
                      text: "On Obby we keep the prices low by offering flexible locations and timings",
                    }}
                  />
                </div>
              </div>
            </BlankCard>
          </div>
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
                    price="£93"
                    options={location.options}
                    onClick={this.selectClassDate.bind(this)}
                  />
                </div>
              ))}
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