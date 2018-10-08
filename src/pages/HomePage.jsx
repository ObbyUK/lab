import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import { viewAction } from './../appActions';

import './homePage.less';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, state) => ({
  viewPage: () => dispatch(viewAction())
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    
  }
]);

class HomePageContainer extends React.Component {

  componentDidMount() {
    console.log('wut');
    this.props.viewPage();
  }

  render () {
    return (
      <div className="homePage">
        Who what where
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(HomePageContainer);