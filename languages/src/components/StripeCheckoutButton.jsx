import React from 'react';

import './stripe-checkout-button.less';
// Components
import PrimaryButton from './PrimaryButton.jsx';

export default class StripeCheckoutButton  extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      stripeHandler: null
    };
  }

  componentDidMount() {
    this.state.stripeHandler = window.StripeCheckout.configure({
      key: this.props.stripeKey,
      image: this.props.image,
      locale: "en",
      currency: "GBP",
      token: this.props.callback
    });
  }

  openStripeCheckoutPopup(event) {
    
    this.state.stripeHandler.open({
      name: this.props.name,
      description: this.props.description,
      zipCode: true,
      amount: this.props.amount
    });

    event.preventDefault();
  }

  render () {
    
    return (
      <div className="stripe-checkout-button">
        <PrimaryButton
          size={this.props.buttonSize}
          text={this.props.buttonText}
          onClick={this.openStripeCheckoutPopup.bind(this)}
        />
      </div>
    );
  }
}
