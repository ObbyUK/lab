import React from 'react';
import { connect } from 'react-redux';
import { mergeAll, propEq } from 'ramda';

// Lib & Constants
import isFullArray from './../lib/isFullArray';
import isValidEmail from './../lib/isValidEmail';
import String__UpperCaseFirstLetter from './../lib/String__UpperCaseFirstLetter';
// Actions & Style
import { 
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
import Icon from './../components/Icon.jsx'
import TextList from '../components/TextList.jsx';
import LocationsPreview from '../components/LocationsPreview.jsx';

const mapStateToProps = (state) => ({
  selectedLanguage: state.app.selectedLanguage,
  flow: state.app.flow,
  skillLevel: state.app.skillLevel,
  skillLevelSessionPreview: state.app.flow.levelOptions
    .find(propEq('value', state.app.skillLevel))
    .sessionsPreview,
  time: state.app.time,
  locations: state.app.locations,
  status: state.app.status,
  name: state.app.name,
  email: state.app.email,
  header: state.app.flow.headers[state.app.status]||{}
});

const mapDispatchToProps = (dispatch) => ({
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


          <div className="ready-to-learn-page__card">
            <BlankCard>
              <h2 className="ready-to-learn-page__card-title">
                Here’s what we have for you
              </h2>
              <div className="ready-to-learn-page__summary">
              
                <div className="ready-to-learn-page__summary-detail">
                  <div className="ready-to-learn-page__summary-detail-text">
                    <span className="ready-to-learn-page__summary-detail-icon">
                      <Icon icon={BarChart} height={20}/>
                    </span>
                    {String__UpperCaseFirstLetter(this.props.skillLevel)}
                  </div>
                  <div className="ready-to-learn-page__summary-detail-body">
                    <TextList
                      list={this.props.skillLevelSessionPreview}
                    />
                  </div>
                </div>  
                
                <div className="ready-to-learn-page__summary-detail">
                  <div className="ready-to-learn-page__summary-detail-text">
                    <span className="ready-to-learn-page__summary-detail-icon">
                      <Icon icon={Location} height={20}/>
                    </span>
                    Locations
                  </div>
                  <div className="ready-to-learn-page__summary-detail-body">
                    <LocationsPreview
                      title=""
                      locations={this.props.locations}
                      locationOptions={this.props.flow.locationOptions}
                    />
                  </div>
                </div>

                <div className="ready-to-learn-page__summary-detail">
                  <div className="ready-to-learn-page__summary-detail-text">
                    <span className="ready-to-learn-page__summary-detail-icon">
                      <Icon icon={Clock} height={20}/>
                    </span>
                    {this.props.time.map(String__UpperCaseFirstLetter).join(', ')}
                  </div>
                </div>

              </div>
            </BlankCard>
          </div>
          
          {/* BULLET POINTS */}
          <div className="ready-to-learn-page__card">
            <BlankCard>
              <h2 className="ready-to-learn-page__card-title">
                Flexible payments, tailored to you!
              </h2>
              <div className="ready-to-learn-page__card-section">
                <ImageBulletPoints
                  points={[
                    {
                      image: "/icons/tick.svg",
                      title: "Pay in instalments",
                      text: "You can either pay everything up front, or on a rolling weekly basis, whatever suits you best",
                    },
                    {
                      image: "/icons/installments.svg",
                      title: "Cancel anytime",
                      text: "Even after that course started. If it’s not for you, it’s not for you!",
                    },
                    {
                      image: "/icons/study-groups-blue.svg",
                      title: "Money-back guarantee",
                      text: "We ensure quality. If the class doesn't reach your expectations, we'll give your money back.",
                    }
                  ]}
                />
              </div>
              <p className="ready-to-learn-page__paragraph">
                <span className="ready-to-learn-page__text-highlight">No commitments!</span> You'll only pay after we match you with a teacher:
              </p>
              <div className="ready-to-learn-page__sum">
                <PriceSum 
                  calculation="8 classes x £20"
                  total="£160"
                />
              </div>
            </BlankCard>
          </div>
          
          {/* CONTACT DETAILS */}
          <div className="ready-to-learn-page__card">
            <BlankCard>
              <h2 className="ready-to-learn-page__card-title">
                Tell us your details so we can be in touch
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
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FormContainer);