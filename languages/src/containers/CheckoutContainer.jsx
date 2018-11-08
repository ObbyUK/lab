import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

// Lib & Constants
import { stripe } from './../../settings';
// Actions & Components
import "./checkout-container.less";
import {
  submitPaidSubscriptionAction
} from './../appActions';
import BlankCard from '../components/BlankCard.jsx';

const mapStateToProps = (state) => ({
  selectedLanguage: state.app.selectedLanguage,
  skillLevel: state.app.skillLevel,
  time: state.app.time,
  locations: state.app.locations,
  date: state.app.date,
  name: state.app.name,
  surname: state.app.surname,
  email: state.app.email,
  phoneNumber: state.app.phoneNumber,
});

const mapDispatchToProps = (dispatch, state) => ({
  submitPaidSubscription: (details) => dispatch(submitPaidSubscriptionAction(details))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    submitPaidSubscription: (token) => dispatchProps.submitPaidSubscription({
      token,
      language: stateProps.selectedLanguage,
      skillLevel: stateProps.skillLevel,
      time: stateProps.time,
      locations: stateProps.locations,
      date: stateProps.date,
      trialEnd: moment(stateProps.date, 'DD/MM/YYYY').add(2, 'd').unix(),
    })
  }
]);

class CheckoutContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stripeHandler: null,
    };
  }

  // componentDidMount() {
  //   this.state.stripeHandler = window.StripeCheckout.configure({
  //     key: stripe.key,
  //     image: "/images/favicon.png",
  //     locale: "en",
  //     currency: "GBP",
  //     token: (token) => this.props.submitPaidSubscription(token)
  //   });
  // }

  // selectClassDate(classSession) {
  //   this.props.chooseDate(classSession.starts);
  //   // necessary because we wont have access to this.props.date if we dont put this 
  //   // at the end of the event queue
  //   window.setTimeout(() => {
  //     this.openStripeCheckoutPopup();
  //   }, 0)
  // }

  // openStripeCheckoutPopup() {
  //   this.state.stripeHandler.open({
  //     name: "Book your spot",
  //     description: "No charge until after 1st class",
  //     zipCode: true,
  //     amount: 0,
  //     panelLabel: "Sign up for £0"
  //   });
  // }

  render () {
    return (
      <div className="checkout-container container">
        <div className="col-lg-8">
          <BlankCard></BlankCard>
        </div>
        <div className="col-lg-4">
          <BlankCard></BlankCard>
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CheckoutContainer);