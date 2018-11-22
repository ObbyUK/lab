import React from 'react';
import { connect } from 'react-redux';
import mergeAll from 'ramda/src/mergeAll';
import queryString from 'query-string';

import './ready-to-learn-page.less';
// Lib & Const
import { viewAnyPageAction } from './../appActions';
import { appStatuses } from './../AppState';
// Components & Containers
import SalesBar from './../components/SalesBar.jsx';
import Menu from './../components/Menu.jsx';
import BlankCard from './../components/BlankCard.jsx';
import Footer from './../components/Footer.jsx';
import FormContainer from './FormContainer.jsx';
import HeaderContainer from './HeaderContainer.jsx';
import ConversionContainer from './ConversionContainer.jsx';
import ClassSummaryContainer from './ClassSummaryContainer.jsx';
import CheckoutContainer from './CheckoutContainer.jsx';
import LandingContainer from './LandingContainer.jsx';

const mapStateToProps = (state) => ({
  status: state.app.status,
});

const mapDispatchToProps = (dispatch, state) => ({
  viewAnyPage: (urlParamaters) => dispatch(viewAnyPageAction(urlParamaters))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    
  }
]);

class AppContainer extends React.Component {

  componentDidMount() {
    this.props.viewAnyPage(
      mergeAll([
        queryString.parse(window.location.search),
        { pathName: window.location.pathname.slice(1) }
      ])
    );
  }

  render () {
    return (
      <div>
        {this.props.status === appStatuses.VIEWING &&
          <LandingContainer/>
        }
        {this.props.status !== appStatuses.VIEWING &&
          <div className="ready-to-learn-page">
            <div className="ready-to-learn-page__sales-banner">
              <SalesBar text="SALE! Book today to get £20 off, ends in" />
            </div>
            <div className="ready-to-learn-page__body">
              
              <Menu />
              <HeaderContainer/>
  
              {this.props.status === appStatuses.ANWSERING_QUESTIONS &&
                <FormContainer />
              }
  
              {this.props.status === appStatuses.VIEWING_CLASS_OPTIONS &&
                <ConversionContainer />
              }
              
              {this.props.status === appStatuses.VIEWING_CLASS_SUMMARY &&
                <ClassSummaryContainer />
              }
  
              {(this.props.status === appStatuses.CHECKING_OUT || this.props.status === appStatuses.SUBMITTING) &&
                <CheckoutContainer />
              }
  
              {this.props.status === appStatuses.TRANSACTION_COMPLETE &&
                <div className="ready-to-learn-page__body container">
                  <div className="ready-to-learn-page__card">
                    <BlankCard>
                      <h2 className="ready-to-learn-page__card-title">
                        You are all set!
                      </h2>
                      <p className="ready-to-learn-page__card-description ready-to-learn-page__card-description--small">
                        You will receive an receipt shortly and we will be in touch with all class information by email in the next few days!
                      </p>
                    </BlankCard>
                  </div>
                </div>
              }
  
              <Footer />
            </div>
          </div>
        }
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AppContainer);