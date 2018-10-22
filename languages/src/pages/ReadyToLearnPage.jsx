import React from 'react';
import { connect } from 'react-redux';
import { propEq, find, mergeAll, contains } from 'ramda';

// Lib & Constants
import getUrlParamaters from './../lib/getUrlParamaters';
import isFullArray from './../lib/isFullArray';
import isValidEmail from './../lib/isValidEmail';
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
import FormContainer from '../containers/FormContainer.jsx';
import ConversionContainer from '../containers/ConversionContainer.jsx';

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
          <FormContainer />
        }

        {this.props.status === appStatuses.ENTERING_CONTACT_INFORMATION &&
          <ConversionContainer />
        }

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