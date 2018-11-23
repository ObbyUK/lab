import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './transaction-complete-container.less';
// Components
import BlankCard from './../components/BlankCard.jsx';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, state) => ({
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {}
]);

class TransactionCompleteContainer extends React.Component {
  render () {
    return (
      <div className="transaction-complete-container container">
        <div className="transaction-complete-container__card">
          <BlankCard>
            <h2 className="transaction-complete-container__card-title">
              You are all set!
            </h2>
            <p className="transaction-complete-container__card-description transaction-complete-container__card-description--small">
              You will receive an receipt shortly and we will be in touch with all class information by email in the next few days!
            </p>
          </BlankCard>
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TransactionCompleteContainer);