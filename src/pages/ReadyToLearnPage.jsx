import React from 'react';
import { connect } from 'react-redux';
import { propEq, find, mergeAll, contains } from 'ramda';

// Lib
import getUrlParamaters from './../lib/getUrlParamaters';
import isFullArray from '../lib/isFullArray';
// Actions & Style
import { 
  viewReadyToLearnPageAction,
  selectSkillLevelAction,
  selectTimeAction,
  toggleLocationAction,
  submitQuestionsAction
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

const mapStateToProps = (state) => ({
  flow: state.app.flow,
  skillLevel: state.app.skillLevel,
  time: state.app.time,
  locations: state.app.locations,
  status: state.app.status,
});

const mapDispatchToProps = (dispatch) => ({
  viewReadyToLearnPageAction: (urlParamaters) => dispatch(viewReadyToLearnPageAction(urlParamaters)),
  selectSkillLevel: (skillLevel) => dispatch(selectSkillLevelAction(skillLevel)),
  selectTime: (time) => dispatch(selectTimeAction(time)),
  toggleLocation: (location) => dispatch(toggleLocationAction(location)),
  submitQuestions: () => dispatch(submitQuestionsAction())
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

  render () {
    return (
      <div className="ready-to-learn-page">
        
        <Menu />

        {/* HEADER */}
        <div className="ready-to-learn-page__header">
          <ImageBanner
            blurt="¡Increíble!"
            title="Ready to Learn Spanish"
            description="Tell us a bit more about what you're looking for?"
            src="/images/header_flow.png"
          />
        </div>

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
              {!this.areAllQuestionsAnwsered() &&
                <div className="ready-to-learn-page__button">
                  <PrimaryButton 
                    size="huge"
                    text="Please anwser all questions to continue..."
                    disabled={true}
                    onClick={this.props.submitQuestions.bind(this)}
                  />
                </div>
              }
              {this.areAllQuestionsAnwsered() &&
                <div className="ready-to-learn-page__button">
                  <PrimaryButton 
                    size="huge"
                    text="Continue"
                    onClick={this.props.submitQuestions.bind(this)}
                  />
                </div>
              }
            </div>
          </div>
        }

        {this.props.status === appStatuses.ENTERING_CONTACT_INFORMATION &&
          <div className="ready-to-learn-page__body container">
            Contact info here
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