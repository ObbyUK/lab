import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';
import queryString from 'query-string';

// Actions & Style
import { 
  viewReadyToLearnPageAction,
} from '../appActions';
import { appStatuses } from './../AppState';
import './ready-to-learn-page.less';
// Components
import Menu from '../components/Menu.jsx';
import Footer from '../components/Footer.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import SalesBar from '../components/SalesBar.jsx';
import FormContainer from '../containers/FormContainer.jsx';

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
  viewReadyToLearnPage: (urlParamaters) => dispatch(viewReadyToLearnPageAction(urlParamaters)),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {}
]);

class HomePageContainer extends React.Component {

  componentDidMount() {
    this.props.viewReadyToLearnPage(queryString.parse(window.location.search));
  }

  render () {
    return (
      
      <div className="ready-to-learn-page">
        <div className="ready-to-learn-page__sales-banner">
          <SalesBar text="SALE! Book today to get £20 off, ends in" />
        </div>
        <div className="ready-to-learn-page__body">
          
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

          {/* {this.props.status === appStatuses.VIEWING_CLASS_OPTIONS &&
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
          } */}

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