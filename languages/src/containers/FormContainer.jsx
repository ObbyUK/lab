import React from 'react';
import { connect } from 'react-redux';
import { propEq, find, mergeAll, contains } from 'ramda';

import './form-container.less';
// Lib & Constants
import { levelNames as skillLevelNames } from './../constants/skillLevels';
import isFullArray from './../lib/isFullArray';
import uniqObjectArray from '../lib/uniqObjectArray';
import skillLevels from './../constants/skillLevels';
// Actions & Style
import { 
  selectSkillLevelAction,
  selectTimeAction,
  toggleLocationAction,
  submitQuestionsAction,
  viewReadyToLearnPageAction,
  openEmailPopupAction,
} from '../appActions';
// Components
import BlankCard from './../components/BlankCard.jsx';
import BigRadios from '../components/BigRadios.jsx';
import MultipleCheckboxes from '../components/MultipleCheckboxes.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

const mapStateToProps = (state) => ({
  selectedLanguage: state.app.selectedLanguage,
  flow: state.app.flow,
  locationOptions: uniqObjectArray('value', state.app.flow.locationOptions),
  skillLevel: state.app.skillLevel,
  skillLevelName: skillLevelNames[state.app.skillLevel],
  time: state.app.time,
  locations: state.app.locations,
  status: state.app.status,
  name: state.app.name,
  email: state.app.email,
  header: state.app.flow.headers[state.app.status]||{}
});

const mapDispatchToProps = (dispatch) => ({
  selectSkillLevel: (skillLevel) => dispatch(selectSkillLevelAction(skillLevel)),
  selectTime: (time) => dispatch(selectTimeAction(time)),
  toggleLocation: (location) => dispatch(toggleLocationAction(location)),
  submitQuestions: () => dispatch(submitQuestionsAction()),
  openEmailPopup: (text) => dispatch(openEmailPopupAction(text)),
  viewReadyToLearnPage: () => dispatch(viewReadyToLearnPageAction()),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    submitQuestions: () => {
      if (contains(stateProps.skillLevel, [skillLevels.ADVANCED, skillLevels.INTERMEDIATE])) {
        dispatchProps.openEmailPopup({
          title: "Tell us where to find you",
          description: `We’re still defining our ${stateProps.skillLevelName} curricullum, but give us your details and we’ll reach out when we’re ready.`,
          submittedTitle: "Thank you",
          submittedDescription: `We’re still defining our ${stateProps.skillLevelName} curricullum, but give us your details and we’ll reach out when we’re ready.`,
          emailText: `Wants skill level ${stateProps.skillLevelName} available`
        });
      } else {
        dispatchProps.submitQuestions();
      }
    }
  }
]);

class FormContainer extends React.Component {

  componentDidMount() {
    this.props.viewReadyToLearnPage();
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
      <div className="form-container__body container">

        {/* SKILL LEVELS CARD */}
        <div className="form-container__card">
          <BlankCard>
            <h2 className="form-container__card-title">
              What's your level of expertise?
            </h2>
            <p className="form-container__card-description">
              On a scale from 1 to {this.props.flow.famousPerson}, how good are you?
            </p>
            <BigRadios
              selected={this.props.skillLevel}
              radios={this.props.flow.levelOptions}
              onChange={this.props.selectSkillLevel.bind(this)}
            />
          </BlankCard>
        </div>

        {/* WE DONT HAVE THAT SKILL LEVEL POPUP */}
        

        {/* LOCATIONS CARD */}
        <div className="form-container__card">
          <BlankCard>
            <h2 className="form-container__card-title">
              Where would you like to learn?
            </h2>
            <p className="form-container__card-description">
              We’re offering classes from east to west, north to south. Select as many as you want.
            </p>
            
            <div className="form-container__checkboxes">
              <MultipleCheckboxes
                checked={this.props.locations}
                options={this.props.locationOptions}
                onChange={this.props.toggleLocation.bind(this)}
              />
            </div>
          </BlankCard>
        </div>

        {/* TIMES CARD */}
        <div className="form-container__card">
          <BlankCard>
            <h2 className="form-container__card-title">
              When are you available?
            </h2>
            <p className="form-container__card-description">
              We know your time is important, so let us know your availability.
            </p>
            <div className="form-container__checkboxes">
              <MultipleCheckboxes
                checked={this.props.time}
                options={this.props.flow.timeOptions}
                onChange={this.props.selectTime.bind(this)}
              />
            </div>
          </BlankCard>
        </div>

        {/* CONTINUE */}
        <div className="form-container__continue-row">
          <div className="form-container__button">
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
