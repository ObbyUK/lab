import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import { viewAction } from './../appActions';

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
      <div>
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