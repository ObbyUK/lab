import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

// Lib & Constants
import { stripe } from './../../settings';
import { appStatuses } from '../AppState';
// Actions & Components
import "./checkout-container.less";
import {
  submitPaidSubscriptionAction,
  typeNameAction,
  typeLastNameAction,
  typeEmailAction,
  typePhoneNumberAction
} from './../appActions';
import BlankCard from '../components/BlankCard.jsx';
import StripeForm from '../components/StripeForm.jsx';
import LabelInput from '../components/LabelInput.jsx';

const mapStateToProps = (state) => ({
  status: state.app.status,
  selectedLanguage: state.app.selectedLanguage,
  skillLevel: state.app.skillLevel,
  time: state.app.time,
  locations: state.app.locations,
  date: state.app.date,
  name: state.app.name,
  lastName: state.app.lastName,
  email: state.app.email,
  phoneNumber: state.app.phoneNumber,
});

const mapDispatchToProps = (dispatch, state) => ({
  submitPaidSubscription: (details) => dispatch(submitPaidSubscriptionAction(details)),
  typeName: (value) => dispatch(typeNameAction(value)),
  typeLastName: (value) => dispatch(typeLastNameAction(value)),
  typeEmail: (value) => dispatch(typeEmailAction(value)),
  typePhoneNumber: (value) => dispatch(typePhoneNumberAction(value)),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    // submitPaidSubscription: (token) => console.log({
    //   token,
    //   language: stateProps.selectedLanguage,
    //   skillLevel: stateProps.skillLevel,
    //   time: stateProps.time,
    //   locations: stateProps.locations,
    //   date: stateProps.date,
    //   name: stateProps.name,
    //   lastName: stateProps.lastName,
    //   email: stateProps.email,
    //   phoneNumber: stateProps.phoneNumber,
    //   trialEnd: moment(stateProps.date, 'DD/MM/YYYY').add(2, 'd').unix(),
    // })
    submitPaidSubscription: (token) => dispatchProps.submitPaidSubscription({
      token,
      language: stateProps.selectedLanguage,
      skillLevel: stateProps.skillLevel,
      time: stateProps.time,
      locations: stateProps.locations,
      date: stateProps.date,
      name: stateProps.name,
      lastName: stateProps.lastName,
      email: stateProps.email,
      phoneNumber: stateProps.phoneNumber,
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

  render () {
    return (
      <div className="checkout-container container">
        <div className="col-lg-7">
          <BlankCard>
            <h2 className="checkout-container__card-title">
              Your details
            </h2>
            <div className="checkout-container__form-details">
              <div className="checkout-container__form-row">
                <div className="checkout-container__form-column">
                  <LabelInput
                    label="First name"
                    placeholder="Frida"
                    value={this.props.name}
                    onChange={this.props.typeName.bind(this)}
                  />
                </div>
                <div className="checkout-container__form-column">
                  <LabelInput
                    label="Surname"
                    placeholder="Khalo"
                    value={this.props.lastName}
                    onChange={this.props.typeLastName.bind(this)}
                  />
                </div>
              </div>
              <div className="checkout-container__form-row">
                <div className="checkout-container__form-column">
                  <LabelInput
                    label="Email"
                    placeholder="frida@khalo.co.uk"
                    value={this.props.email}
                    onChange={this.props.typeEmail.bind(this)}
                  />
                </div>
                <div className="checkout-container__form-column">
                  <LabelInput
                    label="Phone number"
                    placeholder="07655 432 111"
                    value={this.props.phoneNumber}
                    onChange={this.props.typePhoneNumber.bind(this)}
                  />
                </div>
              </div>
              <div className="checkout-container__form-row">
              </div>
            </div>
            <div className="checkout-container__card-details">
              <h2 className="checkout-container__card-title">
                Payment details
              </h2>
              <StripeForm
                onSubmit={(token) => this.props.submitPaidSubscription(token)}
                onPreSubmit={console.log}
                isSubmitting={this.props.status === appStatuses.SUBMITTING}
                stripeKey={stripe.key}
                payText={'Pay £0'}
                submittingText={'Processing your details...'}
              />
            </div>            

          </BlankCard>
        </div>
        <div className="col-lg-5">
          <BlankCard>
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
)(CheckoutContainer);