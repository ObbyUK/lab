import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './conversion-container.less';
// Lib & Constants
import isFullArray from './../lib/isFullArray';
import isValidEmail from './../lib/isValidEmail';
import String__UpperCaseFirstLetter from './../lib/String__UpperCaseFirstLetter';
// Actions & Style
import { 
  viewReadyToLearnPageAction,
  typeNameAction,
  typeEmailAction,
  submitAction
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import PriceSum from '../components/PriceSum.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import Input from '../components/Input.jsx';
import { Clock, BarChart, Location, Calendar } from './../components/Icons.jsx'

const mapStateToProps = (state) => ({
  status: state.app.status,
  name: state.app.name,
  email: state.app.email,
  chosenClass: state.app.chosenClass
});

const mapDispatchToProps = (dispatch) => ({
  viewReadyToLearnPageAction: (urlParamaters) => dispatch(viewReadyToLearnPageAction(urlParamaters)),
  typeName: (event) => dispatch(typeNameAction(event.target.value)),
  typeEmail: (event) => dispatch(typeEmailAction(event.target.value)),
  submit: (details) => dispatch(submitAction(details))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    submit: () => dispatchProps.submit({
      name: stateProps.name,
      email: stateProps.email,
      chosenClass: stateProps.chosenClass,
    })
  }
]);

class FormContainer extends React.Component {

  isContactInformationProvided() {
    return (
      isFullArray(this.props.name) &&
      isValidEmail(this.props.email)
    );
  }

  render () {
    return (
      <div className="conversion-container__body container">
        <div className="conversion-container__checkout row">
          <div className="conversion-container__card col-lg-8">
            <BlankCard>
              <h2 className="conversion-container__card-title">
                Tell us where to find you
              </h2>
              <p className="conversion-container__card-description">
                We’ll be in touch to match you with the right teacher and schedule your first class.
              </p>
              {/* NAME */}
              <div className="conversion-container__field">
                <div className="conversion-container__label">Name</div>
                <div className="conversion-container__input">
                  <Input
                    placeholder="Frida Khalo"
                    value={this.props.name}
                    onChange={this.props.typeName.bind(this)}
                  />
                </div>
              </div>
              {/* EMAIL */}
              <div className="conversion-container__field">
                <div className="conversion-container__label">Email</div>
                <div className="conversion-container__input">
                  <Input
                    placeholder="frida@khalo.com"
                    value={this.props.email}
                    onChange={this.props.typeEmail.bind(this)}
                  />
                </div>
              </div>
              <div className="conversion-container__continue-form">
                <div className="conversion-container__button">
                  <PrimaryButton
                    size="huge"
                    text="Start learning"
                    disabled={!this.isContactInformationProvided()}
                    onClick={this.props.submit.bind(this)}
                  />
                </div>
              </div>
            </BlankCard>
          </div>

          <div className="conversion-container__card col-lg-4">
            <BlankCard>
              <h2 className="conversion-container__card-title">
                4 classes
              </h2>
              <PriceSum 
                calculation="4 x £25"
                total="£100"
              />
              <div className="conversion-container__summary-section">
                <ImageBulletPoints
                  size="small"
                  points={[
                    {
                      icon: Calendar,
                      text: this.props.chosenClass.summary
                    },
                    {
                      icon: Location,
                      text: this.props.chosenClass.location,
                    },
                    {
                      icon: Clock,
                      text: this.props.chosenClass.time
                    },
                  ]}
                />
              </div>
              <div className="conversion-container__summary-section">
                <ImageBulletPoints
                  points={[
                    {
                      image: "/icons/tick.svg",
                      text: "Money back guarantee",
                    },
                    {
                      image: "/icons/installments.svg",
                      text: "Pay in installments",
                    },
                    {
                      image: "/icons/study-groups-blue.svg",
                      text: "Learn with people on the same journey",
                    }
                  ]}
                />
              </div>
            </BlankCard>
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
)(FormContainer);