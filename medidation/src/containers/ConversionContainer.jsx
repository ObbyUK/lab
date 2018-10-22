import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

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
import { Clock, BarChart, Location } from './../components/Icons.jsx'

const mapStateToProps = (state) => ({
  selectedLanguage: state.app.selectedLanguage,
  flow: state.app.flow,
  skillLevel: state.app.skillLevel,
  time: state.app.time,
  locations: state.app.locations,
  status: state.app.status,
  name: state.app.name,
  email: state.app.email,
  header: state.app.flow.headers[state.app.status]||{}
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
      language: stateProps.selectedLanguage,
      name: stateProps.name,
      email: stateProps.email,
      skillLevel: stateProps.skillLevel,
      locations: stateProps.locations,
      time: stateProps.time,
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
      <div className="ready-to-learn-page__body container">
        <div className="ready-to-learn-page__checkout row">
          <div className="ready-to-learn-page__card col-lg-8">
            <BlankCard>
              <h2 className="ready-to-learn-page__card-title">
                Tell us where to find you
              </h2>
              <p className="ready-to-learn-page__card-description">
                We’ll be in touch to match you with the right teacher and schedule your first class.
              </p>
              {/* NAME */}
              <div className="ready-to-learn-page__field">
                <div className="ready-to-learn-page__label">Name</div>
                <div className="ready-to-learn-page__input">
                  <Input
                    placeholder="Frida Khalo"
                    value={this.props.name}
                    onChange={this.props.typeName.bind(this)}
                  />
                </div>
              </div>
              {/* EMAIL */}
              <div className="ready-to-learn-page__field">
                <div className="ready-to-learn-page__label">Email</div>
                <div className="ready-to-learn-page__input">
                  <Input
                    placeholder="frida@khalo.com"
                    value={this.props.email}
                    onChange={this.props.typeEmail.bind(this)}
                  />
                </div>
              </div>
              <div className="ready-to-learn-page__continue-form">
                <div className="ready-to-learn-page__button">
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

          <div className="ready-to-learn-page__card col-lg-4">
            <BlankCard>
              <h2 className="ready-to-learn-page__card-title">
                8 classes
              </h2>
              <PriceSum 
                calculation="8 x £20"
                total="£160"
              />
              <div className="ready-to-learn-page__summary-section">
                <ImageBulletPoints
                  size="small"
                  points={[
                    {
                      icon: BarChart,
                      text: String__UpperCaseFirstLetter(this.props.skillLevel),
                    },
                    {
                      icon: Location,
                      text: this.props.locations.join(', '),
                    },
                    {
                      icon: Clock,
                      text: this.props.time.map(String__UpperCaseFirstLetter).join(', ')
                    }
                  ]}
                />
              </div>
              <div className="ready-to-learn-page__summary-section">
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