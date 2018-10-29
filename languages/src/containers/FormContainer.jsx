import React from 'react';
import { connect } from 'react-redux';
import { propEq, find, mergeAll, contains } from 'ramda';

// Lib & Constants
import getUrlParamaters from './../lib/getUrlParamaters';
import isFullArray from './../lib/isFullArray';
// Actions & Style
import { 
  viewReadyToLearnPageAction,
  selectSkillLevelAction,
  selectTimeAction,
  toggleLocationAction,
  submitQuestionsAction,
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import BigRadios from '../components/BigRadios.jsx';
import MultipleCheckboxes from '../components/MultipleCheckboxes.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import LocationsPreview from '../components/LocationsPreview.jsx';

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
  selectSkillLevel: (skillLevel) => dispatch(selectSkillLevelAction(skillLevel)),
  selectTime: (time) => dispatch(selectTimeAction(time)),
  toggleLocation: (location) => dispatch(toggleLocationAction(location)),
  submitQuestions: () => dispatch(submitQuestionsAction()),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {}
]);

class FormContainer extends React.Component {

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
              <LocationsPreview
                title="We currently run classes at these locations:"
                locationOptions={this.props.flow.locationOptions}
                locations={this.props.locations}
              />
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
            <div className="ready-to-learn-page__checkboxes">
              <MultipleCheckboxes
                checked={this.props.time}
                options={this.props.flow.timeOptions}
                onChange={this.props.selectTime.bind(this)}
              />
            </div>
          </BlankCard>
        </div>

        {/* CONTINUE */}
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
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FormContainer);
