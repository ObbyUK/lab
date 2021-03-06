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
import CheckoutContainer from '../containers/CheckoutContainer.jsx';

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
    console.log(window.analytics);
    // console.log(analytics);
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
                blurt="What class works best for you?"
                title=""
                description=""
                src="/images/meditation-horizon.jpeg"
              />
            </div>
            <ConversionContainer />
          </div>
        }
        
        {(this.props.status === appStatuses.CHECKING_OUT || this.props.status === appStatuses.SUBMITTING) &&
          <div>
            <Menu/>
            <div className="landing-page__header">
              <ImageBanner
                blurt="Book your free taster"
                title=""
                description=""
                src="/images/meditation-horizon.jpeg"
              />
            </div>
            <CheckoutContainer />
          </div>
        }

        {this.props.status === appStatuses.TRANSACTION_COMPLETE &&
          <div className="">
            <Menu/>
            <div className="landing-page__header">
              <ImageBanner
                blurt="Thanks!"
                title="You are all set"
                description=""
                src="/images/meditation-horizon.jpeg"
              />
            </div>
            <div className="landing-page__card container">
              <BlankCard>
                <h2 className="landing-page__card-title">
                  You will receive an receipt shortly and we will be in touch with all class information by email in the next few days!
                </h2>
                <p className="landing-page__card-description landing-page__card-description--small">
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