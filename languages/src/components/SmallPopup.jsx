import React from 'react';
import $ from 'jquery';

import './small-popup.less';
// Components
import Icon from './Icon.jsx';
import { Cross } from './Icons.jsx';

export default class BigPopup extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.toggleDocumentScrollingOnShowHide(this.props.isOpen);
  }

  componentWillReceiveProps(nextProps) {
    var hasShowStateChanged = nextProps.isOpen !== this.props.isOpen;
    if (hasShowStateChanged) {
      this.toggleDocumentScrollingOnShowHide(nextProps.isOpen)
    }
  }

  toggleDocumentScrollingOnShowHide(isOpen) {
    if (isOpen && !this.props.doNotDisableDocumentScrolling) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }
  }

  render () {
    return (
      <div className={
        `
          small-popup
          small-popup--${this.props.isOpen ? '' : 'hidden'} 
          ${this.props.className}
        `
      }
      >
        <div className="small-popup__body">
          <div className="small-popup__controls">
            <span
              onClick={this.props.onClose}
              className="small-popup__closeButton"
            >
              <Icon 
                height={12}
                icon={Cross} 
              />
            </span>
          </div>
          <div className="small-popup__container">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}
