import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './landing-page.less';
// Actions
import { viewLandingPageAction } from './../appActions.js';
import { appStatuses } from './../AppState';
// Components
import Menu from './../components/Menu.jsx';
import Footer from './../components/Footer.jsx';
import ImageBanner from './../components/ImageBanner.jsx';
import BlankCard from './../components/BlankCard.jsx';
import ConversionContainer from '../containers/ConversionContainer.jsx';
import PitchContainer from '../containers/PitchContainer.jsx';

const mapStateToProps = (state) => ({
  status: state.app.status
});

const mapDispatchToProps = (dispatch, state) => ({
  viewLandingPage: () => dispatch(viewLandingPageAction()),
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
        
        <div id="start-of-page" style={{ height: '1px', width: '100%' }}></div>
        
        {this.props.status === appStatuses.VIEWING &&
          <PitchContainer />
        }

        {this.props.status === appStatuses.ENTERING_CONTACT_INFORMATION &&
          <div>
            <Menu/>
            <div className="landing-page__header">
              <ImageBanner
                blurt="Register your interest now"
                title=""
                description=""
                src="/images/meditation-horizon.jpeg"
              />
            </div>
            <ConversionContainer />
          </div>
        }

        {this.props.status === appStatuses.SUBMITTED &&
          <div className="">
            <Menu/>
            <div className="landing-page__header">
              <ImageBanner
                blurt="Great"
                title="Give us your contact details and we will be in touch."
                description="After booking, you can select your teacher, agree on an exact time or go over any requirements if necessary."
                src="/images/meditation-horizon.jpeg"
              />
            </div>
            <div className="landing-page__card container">
              <BlankCard>
                <h2 className="landing-page__card-title">
                  Thank you!
                </h2>
                <p className="landing-page__card-description landing-page__card-description--small">
                  We’ll be in touch to match you with the right teacher and schedule your first class.
                </p>
              </BlankCard>
            </div>
          </div>
        }

        

        <Footer/>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LandingPageContainer);