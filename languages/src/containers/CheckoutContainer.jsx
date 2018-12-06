import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import mergeAll from 'ramda/src/mergeAll';

// Lib & Constants
import String__UpperCaseFirstLetter from './../lib/String__UpperCaseFirstLetter';
import { stripe } from './../../settings';
import { appStatuses } from '../AppState';
import { checkoutReviews } from './../constants/reviews';
import { courseTypeFlows } from './../constants/flows';
// Actions & Components
import "./checkout-container.less";
import {
  submitPaymentAction,
  typeNameAction,
  typeLastNameAction,
  typeEmailAction,
  typePhoneNumberAction,
  viewCheckoutPageAction
} from './../appActions';
import BlankCard from '../components/BlankCard.jsx';
import StripeForm from '../components/StripeForm.jsx';
import LabelInput from '../components/LabelInput.jsx';
import MiniReviews from '../components/MiniReviews.jsx';
import PriceSum from '../components/PriceSum.jsx';
import RatingStars from '../components/RatingStars.jsx';

const ImageTitleText = (props) => (
  <div className="image-title-text">
    <img src={props.image} className="image-title-text__image" />
    <div className="image-title-text__body">
      {props.title &&
        <div className="image-title-text__title">{props.title}</div>
      }
      {props.description &&
        <div className="image-title-text__description">{props.description}</div>
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  status: state.app.status,
  pageFlow: courseTypeFlows[state.app.courseType].checkoutPage,
  errorMessage: state.app.formError.message,
  teacher: state.app.flow.teacher,
  selectedLanguage: state.app.selectedLanguage,

  date: state.app.date,
  address: state.app.address,
  region: state.app.region,
  startTime: state.app.startTime,
  endTime: state.app.endTime,

  skillLevel: state.app.skillLevel,
  time: state.app.time,
  locations: state.app.locations,
  name: state.app.name,
  lastName: state.app.lastName,
  email: state.app.email,
  phoneNumber: state.app.phoneNumber,
});

const mapDispatchToProps = (dispatch, state) => ({
  submitPayment: (details) => dispatch(submitPaymentAction(details)),
  typeName: (value) => dispatch(typeNameAction(value)),
  typeLastName: (value) => dispatch(typeLastNameAction(value)),
  typeEmail: (value) => dispatch(typeEmailAction(value)),
  typePhoneNumber: (value) => dispatch(typePhoneNumberAction(value)),
  viewCheckoutPage: () => dispatch(viewCheckoutPageAction())
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    submitPayment: (token) => dispatchProps.submitPayment({
      token: token.token,
      charge: stateProps.pageFlow.chargePrice,
      date: stateProps.date,
      address: stateProps.address,
      skillLevel: stateProps.skillLevel,
      language: stateProps.selectedLanguage,
      region: stateProps.region,
      startTime: stateProps.startTime,
      endTime: stateProps.endTime,
      region: stateProps.region,
      name: stateProps.name,
      lastName: stateProps.lastName,
      email: stateProps.email,
      phoneNumber: stateProps.phoneNumber,
    })
  }
]);

class CheckoutContainer extends React.Component {

  componentDidMount() {
    this.props.viewCheckoutPage();
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
                  onSubmit={(token) => this.props.submitPayment(token)}
                  onPreSubmit={console.log}
                  isSubmitting={this.props.status === appStatuses.SUBMITTING}
                  stripeKey={stripe.key}
                  payText={'Confirm and pay'}
                  submittingText={'Processing...'}
                />
              </div>            

            </BlankCard>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="checkout-container__column col-12 col-lg-5">
          <div className="checkout-container__card">
            <BlankCard>
              <div className="checkout-container__sidebar">
                <div className="checkout-container__sidebar-section">
                  <div className="checkout-container__sidebar-sale">
                    Sale! Book today to get £20 off
                  </div>
                  <PriceSum
                    calculation={this.props.pageFlow.priceSum.calculation}
                    previousTotal={this.props.pageFlow.priceSum.previousTotal}
                    total={this.props.pageFlow.priceSum.total}
                  />
                </div>
                <div className="checkout-container__sidebar-text">
                  Obby classes are <strong>20% cheaper</strong> than most London language classes.
                </div>
              </div>
            </BlankCard>
          </div>

          <div className="checkout-container__card">
            <BlankCard>
              {/* CHOICE SUMMARY */}
              <div className="checkout-container__sidebar-section">
                <div className="checkout-container__sidebar-text-row">
                  <div className="checkout-container__sidebar-text">
                    {String__UpperCaseFirstLetter(this.props.selectedLanguage)} {String__UpperCaseFirstLetter(this.props.skillLevel)}
                  </div>
                </div>
                <div className="checkout-container__sidebar-text-row checkout-container__sidebar-text-row--left-aligned-row">
                  <div className="checkout-container__sidebar-text">With {this.props.teacher.name}</div>
                  <div className="checkout-container__sidebar-rating">
                    <RatingStars
                      rating={10}
                      color={'sun'}
                      label={`23`}
                    />
                  </div>
                </div>
                <div className="checkout-container__sidebar-text-row">
                  <div className="checkout-container__sidebar-text">{this.props.region} - {this.props.address}</div>
                </div>
                <div className="checkout-container__sidebar-text-row">
                  <div className="checkout-container__sidebar-text">Every {moment(this.props.date, 'DD/MM/YYYY').format('dddd')} at {this.props.startTime}</div>
                </div>
              </div>
              {/* MONEY BACK */}
              <div className="checkout-container__sidebar-section">
                <ImageTitleText
                  image="/icons/thumbs-up.svg"
                  title="100% Money back"
                  description="If you don’t love your first class we’ll refund you in full"
                />
              </div>
              {/* LIFETIME ACCESS */}
              <div className="">
                <ImageTitleText
                  image="/icons/university-hat.svg"
                  title="Lifetime access"
                  description="All classes are recorded & made available online in case you miss a class or want a recap"
                />
              </div>
              <div className="">
              </div>
              {/* LIFETIME ACCESS */}
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