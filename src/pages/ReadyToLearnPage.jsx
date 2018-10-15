import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

// Lib
import getUrlParamaters from './../lib/getUrlParamaters';
// Actions & Style
import { 
  viewReadyToLearnPageAction,
  selectSkillLevelAction
} from '../appActions';
import './ready-to-learn-page.less';
// Components
import Menu from '../components/Menu.jsx';
import Footer from '../components/Footer.jsx';
import BlankCard from './../components/BlankCard.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import BigRadios from '../components/BigRadios.jsx';

const mapStateToProps = (state) => ({
  flow: state.app.flow,
  skillLevel: state.app.skillLevel
});

const mapDispatchToProps = (dispatch) => ({
  viewReadyToLearnPageAction: (urlParamaters) => dispatch(viewReadyToLearnPageAction(urlParamaters)),
  selectSkillLevel: (skillLevel) => dispatch(selectSkillLevelAction(skillLevel)),
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
        <div className="ready-to-learn-page__header">
          <ImageBanner
            blurt="¡Increíble!"
            title="Ready to Learn Spanish"
            description="Tell us a bit more about what you're looking for"
            src="/images/header_flow.png"
          />
        </div>
        <div className="ready-to-learn-page__body container">
          <BlankCard>
            <BigRadios
              selected={this.props.skillLevel}
              radios={this.props.flow.levelOptions}
              onChange={this.props.selectSkillLevel.bind(this)}
            />
          </BlankCard>
          {/* <TextList
            list={[
              { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"},
              { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"},
              { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"}
            ]}
          />
          <BlankCard>
            <TextList
              isNumbered={true}
              list={[
                { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"},
                { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"},
                { title: 'Pronouncinations & Grammar', text: "You'll learn how the spanish alphabet is all something something"}
              ]}
            />
          </BlankCard> */}
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