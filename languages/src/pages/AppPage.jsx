import React from 'react';
import { connect } from 'react-redux';
import mergeAll from 'ramda/src/mergeAll';
import contains from 'ramda/src/contains';
import queryString from 'query-string';

import './app-page.less';
// Lib & Const
import { viewAnyPageAction } from './../appActions';
import { appStatuses } from './../AppState';
// Components & Containers
import SalesBar from './../components/SalesBar.jsx';
import Menu from './../components/Menu.jsx';
import Footer from './../components/Footer.jsx';
import FormContainer from './../containers/FormContainer.jsx';
import HeaderContainer from './../containers/HeaderContainer.jsx';
import ConversionContainer from './../containers/ConversionContainer.jsx';
import ClassSummaryContainer from './../containers/ClassSummaryContainer.jsx';
import CheckoutContainer from './../containers/CheckoutContainer.jsx';
import LandingContainer from './../containers/LandingContainer.jsx';
import TransactionCompleteContainer from '../containers/TransactionCompleteContainer.jsx';
import SubmitEmailPopupContainer from '../containers/SubmitEmailPopupContainer.jsx';

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

class AppPageContainer extends React.Component {

  componentDidMount() {
    this.props.viewAnyPage(
      mergeAll([
        queryString.parse(window.location.search),
        { pathName: window.location.pathname.slice(1) }
      ])
    );
  }

  isShowingFormHeader() {
    return contains(
      this.props.status, 
      [
        appStatuses.ANWSERING_QUESTIONS,
        appStatuses.VIEWING_CLASS_OPTIONS,
        appStatuses.VIEWING_CLASS_SUMMARY,
        appStatuses.CHECKING_OUT,
        appStatuses.SUBMITTING,
        appStatuses.TRANSACTION_COMPLETE
      ]
    );
  }

  render () {
    return (
      <div className="app-page">

        <div className="app-page__sales-banner">
          <SalesBar text="SALE! Book today to get £20 off, ends in" />
        </div>

        <div className="app-page__body">
          
          <Menu/>
          <SubmitEmailPopupContainer/>

          {this.isShowingFormHeader() &&
            <HeaderContainer/>
          }
          
          {this.props.status === appStatuses.VIEWING &&
            <LandingContainer/>
          }

          {this.props.status === appStatuses.ANWSERING_QUESTIONS &&
            <FormContainer/>
          }

          {this.props.status === appStatuses.VIEWING_CLASS_OPTIONS &&
            <ConversionContainer/>
          }
          
          {this.props.status === appStatuses.VIEWING_CLASS_SUMMARY &&
            <ClassSummaryContainer/>
          }

          {(this.props.status === appStatuses.CHECKING_OUT || this.props.status === appStatuses.SUBMITTING) &&
            <CheckoutContainer/>
          }

          {this.props.status === appStatuses.TRANSACTION_COMPLETE &&
            <TransactionCompleteContainer/>
          }

          <Footer/>

        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AppPageContainer);