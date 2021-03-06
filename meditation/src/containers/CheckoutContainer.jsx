import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

// Lib & Constants
import { stripe } from './../../settings';
import { appStatuses } from '../AppState';
import { checkoutReviews } from './../constants/reviews';
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
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import MiniReviews from '../components/MiniReviews.jsx';

const mapStateToProps = (state) => ({
  status: state.app.status,
  errorMessage: state.app.formError.message,
  date: state.app.date,
  chosenLocation: state.app.chosenLocation,
  chosenSession: state.app.chosenSession,
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
    submitPaidSubscription: (token) => dispatchProps.submitPaidSubscription({
      token,
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
  }

  renderReviewsCard() {
    return (
      <BlankCard>
        <div className="checkout-container__sidebar">
          <div className="checkout-container__sidebar-text-row">
            <div className="checkout-container__sidebar-text checkout-container__sidebar-text--large">Our customers love us</div>
          </div>
          <div className="checkout-container__reviews">
            <MiniReviews reviews={checkoutReviews} />
          </div>
        </div>
      </BlankCard>
    );
  }

  render () {
    return (
      <div className="checkout-container container">

        {/* REVIEWS - MOBILE */}
        <div className="checkout-container__column col-12 d-block d-sm-none">
          <div className="checkout-container__card">
            {this.renderReviewsCard()}
          </div>
        </div>

        {/* FORM */}
        <div className="checkout-container__column col-12 col-lg-7">
          <div className="checkout-container__column checkout-container__card">
            <BlankCard>
              {this.props.errorMessage &&
                <div className="checkout-container__error-message">
                  {this.props.errorMessage}
                </div>
              }
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
                  payText={'Pay £0 now'}
                  submittingText={'Processing...'}
                  payLabel="And £27 per class after the first class if you enjoy it"
                />
              </div>            

            </BlankCard>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="checkout-container__column col-12 col-lg-5">
          {/* MAIN SUMMARY */}
          <div className="checkout-container__card">
            <BlankCard>
              <div className="checkout-container__sidebar">
                {/* PAYMENT SUMMARY */}
                <div className="checkout-container__sidebar-section">
                  <div className="checkout-container__sidebar-text-row">
                    <div className="checkout-container__sidebar-text checkout-container__sidebar-text--large">Free taster + 3 classes</div>
                    <div className="checkout-container__sidebar-text checkout-container__sidebar-text--price"></div>
                  </div>
                  <div className="checkout-container__sidebar-text-row">
                    <div className="checkout-container__sidebar-text">+ free welcome pack</div>
                    <div className="checkout-container__sidebar-text checkout-container__sidebar-text--price"></div>
                  </div>
                  <div className="checkout-container__sidebar-text-row">
                    <div className="checkout-container__sidebar-text">+ lifetime access to online platform</div>
                    <div className="checkout-container__sidebar-text checkout-container__sidebar-text--price">= £81</div>
                  </div>
                  <div className="checkout-container__sidebar-text-row">
                    <div className="checkout-container__sidebar-text">Pay today</div>
                    <div className="checkout-container__sidebar-text checkout-container__sidebar-text--large">= £0</div>
                  </div>
                </div>
              </div>
              {/* CLASS SUMMARY */}
              <div className="checkout-container__sidebar-section">
                <div className="checkout-container__sidebar-text-row">
                  <div className="checkout-container__sidebar-text">{this.props.chosenLocation.name} - {this.props.chosenLocation.address}</div>
                </div>
                <div className="checkout-container__sidebar-text-row">
                  <div className="checkout-container__sidebar-text">Every {moment(this.props.date, 'DD/MM/YYYY').format('dddd')} at {this.props.chosenSession.lessonsStart}</div>
                </div>
              </div>
              {/* BULLET POINTS */}
              <div className="">
                <ImageBulletPoints
                  points={[
                    { 
                      image: "/icons/pay_0.svg", 
                      title: "Your first class is on us" ,
                      text: "Pay £0 today see if you like it before committing"
                    },
                    { 
                      image: "/icons/tick.svg", 
                      title: "Money-back guarantee" 
                    },
                    { 
                      image: "/icons/pay-in-installments.svg", 
                      title: "Pay in instalments",
                      text: "Instead of paying the full amount up front, you'll pay in weekly installments."
                    },
                  ]}
                />
              </div>
            </BlankCard>
          </div>

          {/* REVIEWS - DESKTOP */}
          <div className="checkout-container__card d-none d-sm-block">
            {this.renderReviewsCard()}
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
)(CheckoutContainer);