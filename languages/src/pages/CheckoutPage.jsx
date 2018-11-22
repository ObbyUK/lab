import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';
import queryString from 'query-string';

import './ready-to-learn-page.less';
// Actions & Style
import { 
  viewCheckoutPageAction,
} from '../appActions';
import { appStatuses } from './../AppState';
// Components
import Menu from '../components/Menu.jsx';
import Footer from '../components/Footer.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import SalesBar from '../components/SalesBar.jsx';
import BlankCard from '../components/BlankCard.jsx';
import CheckoutContainer from '../containers/CheckoutContainer.jsx';

const mapStateToProps = (state) => ({
  header: state.app.flow.headers[state.app.status]||{},
  status: state.app.status
});

const mapDispatchToProps = (dispatch) => ({
  viewCheckoutPage: (urlParamaters) => dispatch(viewCheckoutPageAction(urlParamaters)),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
  }
]);

class HomePageContainer extends React.Component {

  componentDidMount() {
    this.props.viewCheckoutPage(queryString.parse(window.location.search));
  }

  render () {
    return (
      
      <div className="ready-to-learn-page">
        <div className="ready-to-learn-page__sales-banner">
          <SalesBar text="SALE! Book today to get £20 off, ends in" />
        </div>
        <div className="ready-to-learn-page__body">
          
          <Menu />
          <div className="ready-to-learn-page__header">
            <ImageBanner
              blurt={this.props.header.blurt}
              title={this.props.header.title}
              description={this.props.header.description}
              src={this.props.header.src}
            />
          </div>
          
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
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(HomePageContainer);