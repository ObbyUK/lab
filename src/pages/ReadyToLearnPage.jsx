import React from 'react';
import { connect } from 'react-redux';
import { propEq, find, mergeAll, contains } from 'ramda';

// Lib & Constants
import getUrlParamaters from './../lib/getUrlParamaters';
import isFullArray from './../lib/isFullArray';
import isValidEmail from './../lib/isValidEmail';
import String__UpperCaseFirstLetter from './../lib/String__UpperCaseFirstLetter';
// Actions & Style
import { 
  viewReadyToLearnPageAction,
  selectSkillLevelAction,
  selectTimeAction,
  toggleLocationAction,
  submitQuestionsAction,
  typeNameAction,
  typeEmailAction,
  submitAction
} from '../appActions';
import { appStatuses } from './../AppState';
import './ready-to-learn-page.less';
// Components
import Menu from '../components/Menu.jsx';
import Footer from '../components/Footer.jsx';
import BlankCard from './../components/BlankCard.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import BigRadios from '../components/BigRadios.jsx';
import MultipleCheckboxes from '../components/MultipleCheckboxes.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import PriceSum from '../components/PriceSum.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import Input from '../components/Input.jsx';
import { Clock, BarChart, Location } from './../components/Icons.jsx'

const mapStateToProps = (state) => ({
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
  selectSkillLevel: (skillLevel) => dispatch(selectSkillLevelAction(skillLevel)),
  selectTime: (time) => dispatch(selectTimeAction(time)),
  toggleLocation: (location) => dispatch(toggleLocationAction(location)),
  submitQuestions: () => dispatch(submitQuestionsAction()),
  typeName: (event) => dispatch(typeNameAction(event.target.value)),
  typeEmail: (event) => dispatch(typeEmailAction(event.target.value)),
  submit: (details) => dispatch(submitAction(details))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    
  }
]);

class HomePageContainer extends React.Component {

  componentDidMount() {
    this.props.viewReadyToLearnPageAction(getUrlParamaters());
  }

  canLocationAddressesBeShown(location) {
    return (
      contains(location.value, this.props.locations) &&
      isFullArray(location.addresses)
    );
  }

  canShowAnyLocationAddress() {
    return (
      isFullArray(this.props.flow.locationOptions) && 
      isFullArray(this.props.locations) &&
      this.canLocationAddressesBeShown(find(propEq('value', this.props.locations[0]), this.props.flow.locationOptions))
    );
  }

  areAllQuestionsAnwsered() {
    return (
      isFullArray(this.props.skillLevel) &&
      isFullArray(this.props.time) &&
      isFullArray(this.props.locations)
    );
  }

  isContactInformationProvided() {
    return (
      isFullArray(this.props.name) &&
      isValidEmail(this.props.email)
    );
  }

  render () {
    return (
      <div className="ready-to-learn-page">
        
        <Menu />

        {/* HEADER */}
        <div className="ready-to-learn-page__header">
          <ImageBanner
            blurt={this.props.header.blurt}
            title={this.props.header.title}
            description={this.props.header.description}
            src={this.props.header.src}
          />
        </div>
        
        {/* SCREEN 1: ANWSERING QUESTIONS */}
        {this.props.status === appStatuses.ANWSERING_QUESTIONS &&
          <div className="ready-to-learn-page__body container">
            {/* SKILL LEVEL CARD */}
            <div className="ready-to-learn-page__card">
              <BlankCard>
                <h2 className="ready-to-learn-page__card-title">
                  What's your level of expertise?
                </h2>
                <p className="ready-to-learn-page__card-description">
                  On a scale from 1 to {this.props.flow.famousPerson}, how good are you?
                </p>
                <BigRadios
                  selected={this.props.skillLevel}
                  radios={this.props.flow.levelOptions}
                  onChange={this.props.selectSkillLevel.bind(this)}
                />
              </BlankCard>
            </div>
            {/* LOCATION CARD */}
            <div className="ready-to-learn-page__card">
              <BlankCard>
                <h2 className="ready-to-learn-page__card-title">
                  Where would you like to learn?
                </h2>
                <p className="ready-to-learn-page__card-description">
                  We’re offering classes from east to west, north to south. Select as many as you want.
                </p>
                
                <div className="ready-to-learn-page__checkboxes">
                  <MultipleCheckboxes
                    checked={this.props.locations}
                    options={this.props.flow.locationOptions}
                    onChange={this.props.toggleLocation.bind(this)}
                  />
                </div>

                {/* ADDRESS PREVIEWS */}
                {this.canShowAnyLocationAddress() &&
                  <div className="ready-to-learn-page__addresses">
                    <h3 className="ready-to-learn-page__sub-title ready-to-learn-page__sub-title--bold">
                      We currently run classes at these locations: 
                    </h3>

                    {this.props.flow.locationOptions.map((location, index) => (
                      <div 
                        key={index} 
                        className={`
                          ready-to-learn-page__area-adresses 
                          ${this.canLocationAddressesBeShown(location) && 'ready-to-learn-page__area-adresses--show'}
                        `}
                      >
                        <div className="ready-to-learn-page__sub-title">{location.name}</div>
                        {isFullArray(location.addresses) && location.addresses.map((address, index) => [
                          <div key={`${index}_address`} className="ready-to-learn-page__address">{address}</div>,
                          <div key={`${index}_dot`} className="ready-to-learn-page__dot">•</div>
                        ])}
                      </div>
                    ))}
                  </div>
                }
              </BlankCard>
            </div>
            {/* TIME CARD */}
            <div className="ready-to-learn-page__card">
              <BlankCard>
                <h2 className="ready-to-learn-page__card-title">
                  When are you available?
                </h2>
                <p className="ready-to-learn-page__card-description">
                  We know your time is important, so let us know your availability.
                </p>
                <BigRadios
                  selected={this.props.time}
                  radios={this.props.flow.timeOptions}
                  onChange={this.props.selectTime.bind(this)}
                />
              </BlankCard>
            </div>
            <div className="ready-to-learn-page__continue-row">
              <div className="ready-to-learn-page__button">
                <PrimaryButton 
                  size="huge"
                  text="Continue"
                  disabled={!this.areAllQuestionsAnwsered()}
                  onClick={this.props.submitQuestions.bind(this)}
                />
              </div>
            </div>
          </div>
        }

        {/* SCREEN 2: CONTACT INFORMATION */}
        {this.props.status === appStatuses.ENTERING_CONTACT_INFORMATION &&
          <div className="ready-to-learn-page__body container">
            <div className="row">
              {/* EMAIL DETAILS */}
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
              {/* PAYMENT SUMMARY */}
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
                          text: String__UpperCaseFirstLetter(this.props.time)
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
        }

        {/* SCREEN 3: THANK YOU */}
        {this.props.status === appStatuses.SUBMITTED &&
          <div className="ready-to-learn-page__body container">
            <div className="ready-to-learn-page__card">
              <BlankCard>
                <h2 className="ready-to-learn-page__card-title">
                  Thank you!
                </h2>
                <p className="ready-to-learn-page__card-description ready-to-learn-page__card-description--small">
                  We’ll be in touch to match you with the right teacher and schedule your first class.
                </p>
              </BlankCard>
            </div>
          </div>
        }

        <Footer />
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(HomePageContainer);