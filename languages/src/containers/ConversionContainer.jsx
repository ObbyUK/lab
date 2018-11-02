import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { mergeAll, contains } from 'ramda';

// Lib & Constants
import { stripe } from './../../settings';
// Actions & Style
import { 
  chooseDateAction,
  submitAction,
  submitPaidSubscriptionAction,
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import ClassSelectableTimesCard from '../components/ClassSelectableTimesCard.jsx';
import DiscountCard from '../components/DiscountCard.jsx';

const mapStateToProps = (state) => ({
  selectedLanguage: state.app.selectedLanguage,
  skillLevel: state.app.skillLevel,
  time: state.app.time,
  locations: state.app.locations,
  date: state.app.date,
  flow: state.app.flow,
  selectedLocationsOptions: state.app.flow.locationOptions.filter((location) => contains(location.name, state.app.locations)),
});

const mapDispatchToProps = (dispatch) => ({
  submitEmail: (details) => dispatch(submitAction(details)),
  chooseDate: (date) => dispatch(chooseDateAction(date)),
  submitPaidSubscription: (details) => dispatch(submitPaidSubscriptionAction(details))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    submitEmail: () => dispatchProps.submitEmail({
      language: stateProps.selectedLanguage,
      name: stateProps.name,
      email: stateProps.email,
      skillLevel: stateProps.skillLevel,
      locations: stateProps.locations,
      time: stateProps.time,
    }),
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

class FormContainer extends React.Component {

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
      <div className="ready-to-learn-page__body container">
          
          {/* BULLET POINTS */}
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
                <div className="ready-to-learn-page__discount-card">
                  <DiscountCard />
                </div>
              </div>
            </BlankCard>
          </div>

          {/* OPTIONS */}
          <div className="ready-to-learn-page__card">
            <BlankCard>
              <h2 className="ready-to-learn-page__card-title">
                Here's what we have for you
              </h2>
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
)(FormContainer);