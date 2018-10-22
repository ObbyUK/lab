import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './landing-page.less';
// Actions
import { 
  chooseLanguageAction,
  viewLandingPageAction 
} from './../appActions.js';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, state) => ({
  viewLandingPage: () => dispatch(viewLandingPageAction()),
  chooseLanguage: (language) => dispatch(chooseLanguageAction(language))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    
  }
]);

class LandingPageContainer extends React.Component {

  componentDidMount() {
    this.props.viewLandingPage();
  }

  render () {
    return (
      <div className="landing-page">
        Who are you?
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LandingPageContainer);