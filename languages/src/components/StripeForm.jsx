import React from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';

import './stripe-form.less';

const createStyleOptions = (fontSize) => {
  return {
    style: {
      base: {
        fontSize,
        fontFamily: 'Founders Grotesk", "Arial", sans-serif',
        '::placeholder': {
          color: '#898989',
        },
      },
      invalid: {
        color: '#fadcdc',
      },
    },
  };
};

class _CardFormBody extends React.Component {

  handleSubmit = event => {

    event.preventDefault();

    this.props.onPreSubmit();

    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(this.props.onSubmit);
    }
  };

  render() {
    return (
      <form 
        className="stripe-form" 
        onSubmit={this.handleSubmit}
      >
        <div className="stripe-form__card-number">
          <label className="stripe-form__stripe-label">Card number</label>
          <CardNumberElement {...createStyleOptions("18px")}/>
        </div>
        
        <div className="stripe-form__card-details">
          <div className="stripe-form__card-detail">
            <label className="stripe-form__stripe-label">Expiration date</label>
            <CardExpiryElement {...createStyleOptions("18px")}/>
          </div>

          <div className="stripe-form__card-detail">
            <label className="stripe-form__stripe-label">CVC</label>
            <CardCVCElement {...createStyleOptions("18px")}/>
          </div>

          <div className="stripe-form__card-detail">
            <label className="stripe-form__stripe-label">Postal code</label>
            <PostalCodeElement {...createStyleOptions("18px")}/>
          </div>
        </div>

        {!this.props.isSubmitting &&
          <div className="stripe-form__button-wrap">
            <button type="submit" className="stripe-form__button">
              {this.props.payText}
            </button>
          </div>
        }
        {this.props.isSubmitting &&
          <div className="stripe-form__button-wrap">
            <div className="stripe-form__button">
              {this.props.submittingText}
            </div>
          </div>
        }
      </form>
    );
  }
}

const CardFormBody = injectStripe(_CardFormBody);

export default class StripeForm extends React.Component {
  render() {
    return (
      <StripeProvider apiKey={this.props.stripeKey}>
        <Elements>
          <CardFormBody {...this.props} />
        </Elements>
      </StripeProvider>
    );
  }
}
