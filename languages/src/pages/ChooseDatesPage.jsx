import React from 'react';
import { connect } from 'react-redux';
import { propEq, find, mergeAll, contains } from 'ramda';
import queryString from 'query-string';

// Actions & Style
import {
  viewChooseDatePageAction
} from '../appActions';
import './ready-to-learn-page.less';
// Components
import Menu from '../components/Menu.jsx';
import Footer from '../components/Footer.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import SalesBar from '../components/SalesBar.jsx';
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
  viewChooseDatePage: (urlParamaters) => dispatch(viewChooseDatePageAction(urlParamaters))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {}
]);

class ChooseDatesPage extends React.Component {

  componentDidMount() {
    this.props.viewChooseDatePage(queryString.parse(window.location.search));
  }

  render () {
    return (
      
      <div className="ready-to-learn-page">

        <div className="ready-to-learn-page__sales-banner">
          <SalesBar text="SALE! Book today to get £20 off, ends in" />
        </div>
        
        <div className="ready-to-learn-page__body">    
          <Menu/>
          <div className="ready-to-learn-page__header">
            <ImageBanner
              blurt={this.props.header.blurt}
              title={this.props.header.title}
              description={this.props.header.description}
              src={this.props.header.src}
            />
          </div>
          <ConversionContainer/>
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
)(ChooseDatesPage);