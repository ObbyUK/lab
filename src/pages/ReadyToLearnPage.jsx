import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

// Lib
import getUrlParamaters from './../lib/getUrlParamaters';
// Actions & Style
import { 
  viewReadyToLearnPageAction,
  selectSkillLevelAction,
  selectTimeAction,
  toggleLocationAction
} from '../appActions';
import './ready-to-learn-page.less';
// Components
import Menu from '../components/Menu.jsx';
import Footer from '../components/Footer.jsx';
import BlankCard from './../components/BlankCard.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import BigRadios from '../components/BigRadios.jsx';
import MultipleCheckboxes from '../components/MultipleCheckboxes.jsx';

const mapStateToProps = (state) => ({
  flow: state.app.flow,
  skillLevel: state.app.skillLevel,
  time: state.app.time,
  locations: state.app.locations
});

const mapDispatchToProps = (dispatch) => ({
  viewReadyToLearnPageAction: (urlParamaters) => dispatch(viewReadyToLearnPageAction(urlParamaters)),
  selectSkillLevel: (skillLevel) => dispatch(selectSkillLevelAction(skillLevel)),
  selectTime: (time) => dispatch(selectTimeAction(time)),
  toggleLocation: (location) => dispatch(toggleLocationAction(location))
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

  render () {
    return (
      <div className="ready-to-learn-page">
        
        <Menu />

        {/* HEADER */}
        <div className="ready-to-learn-page__header">
          <ImageBanner
            blurt="¡Increíble!"
            title="Ready to Learn Spanish"
            description="Tell us a bit more about what you're looking for"
            src="/images/header_flow.png"
          />
        </div>
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
        </div>
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