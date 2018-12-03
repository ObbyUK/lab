import React from 'react';
import { connect } from 'react-redux';
import mergeAll from 'ramda/src/mergeAll';
import contains from 'ramda/src/contains';

import './submit-email-popup-container.less';
// Lib & Constants
import isFullArray from './../lib/isFullArray';
import isValidEmail from '../lib/isValidEmail';
// Actions
import {
  typeNameAction,
  typeEmailAction,
  submitEmailAction,
  closeEmailPopupAction,
} from '../appActions';
import { emailPopupStatuses } from '../AppState';
// Components
import SmallPopup from '../components/SmallPopup.jsx';
import LabelInput from '../components/LabelInput.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

const mapStateToProps = (state) => ({
  status: state.app.emailPopupStatus,
  isOpen: contains(state.app.emailPopupStatus, [emailPopupStatuses.OPEN, emailPopupStatuses.SUBMITTED]),
  name: state.app.name,
  email: state.app.email,
  emailPopup: state.app.emailPopup,
});

const mapDispatchToProps = (dispatch, state) => ({
  typeEmail: (value) => dispatch(typeEmailAction(value)),
  typeName: (value) => dispatch(typeNameAction(value)),
  submitEmail: (details) => dispatch(submitEmailAction(details)),
  closeEmailPopup: () => dispatch(closeEmailPopupAction())
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    submitEmail: () => dispatchProps.submitEmail({
      name: stateProps.name,
      email: stateProps.email,
      message: stateProps.emailPopup.emailText
    })
  }
]);

class SubmitEmailPopupContainer extends React.Component {

  areNameAndEmailFilledIn() {
    return (
      isFullArray(this.props.name) &&
      isValidEmail(this.props.email)
    );
  }

  render () {
    return (
      <div className="submit-email-popup-container">
        <SmallPopup 
          isOpen={this.props.isOpen}
          onClose={this.props.closeEmailPopup.bind(this)}
        >
          {this.props.status === emailPopupStatuses.SUBMITTED &&
            <div className="submit-email-popup-container__popup">
              <h2 className="submit-email-popup-container__card-title">
                {this.props.emailPopup.submittedTitle}
              </h2>
              <p className="submit-email-popup-container__card-description">
                {this.props.emailPopup.submittedDescription}
              </p>
              <div className="submit-email-popup-container__submit-email-row">
                <div className="submit-email-popup-container__button">
                  <PrimaryButton 
                    size="huge"
                    text="Back to homepage"
                    onClick={() => window.location.href ="/" }
                  />
                </div>
              </div>
            </div>
          }
          
          {this.props.status === emailPopupStatuses.OPEN &&
            <div className="submit-email-popup-container__popup">
              <h2 className="submit-email-popup-container__card-title">
                {this.props.emailPopup.title}
              </h2>
              <p className="submit-email-popup-container__card-description">
                {this.props.emailPopup.description}
              </p>
              <div className="submit-email-popup-container__label-input">
                <LabelInput
                  label="Name"
                  placeholder="Frida Khalo"
                  value={this.props.name}
                  onChange={this.props.typeName.bind(this)}
                />
              </div>
              <div className="submit-email-popup-container__label-input">
                <LabelInput
                  label="Email"
                  placeholder="frida@khalo.com"
                  value={this.props.email}
                  onChange={this.props.typeEmail.bind(this)}
                />
              </div>
              <div className="submit-email-popup-container__submit-email-row">
                <div className="submit-email-popup-container__button">
                  <PrimaryButton 
                    size="huge"
                    text="Submit"
                    disabled={!this.areNameAndEmailFilledIn()}
                    onClick={this.props.submitEmail.bind(this)}
                  />
                </div>
              </div>
            </div>
          }
        </SmallPopup>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SubmitEmailPopupContainer);