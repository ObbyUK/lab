import React from 'react';
import { connect } from 'react-redux';
import mergeAll from 'ramda/src/mergeAll';
import queryString from 'query-string';

import './ready-to-learn-page.less';
// Actions & Style
import {
  viewChooseDatePageAction
} from '../appActions';
// Components
import Menu from '../components/Menu.jsx';
import Footer from '../components/Footer.jsx';
import SalesBar from '../components/SalesBar.jsx';
import ConversionContainer from '../containers/ConversionContainer.jsx';
import HeaderContainer from '../containers/HeaderContainer.jsx';

const mapStateToProps = (state) => ({
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
          <HeaderContainer/>
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