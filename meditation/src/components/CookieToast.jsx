import React from 'react';
import cookie from 'js-cookie';

import './cookie-toast.less';
// Components
import Icon from './Icon.jsx';
import { Cross } from './Icons.jsx';

export default class extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      hasBeenAcknowledged: true
    };
  }

  componentDidMount() {
    this.setState({
      hasBeenAcknowledged: this.getHasBeenAcknowledgedFromCookie()
    })
  }

  dismiss() {
    this.setState({
      hasBeenAcknowledged: true
    });
    cookie.set(this.props.cookieName, 'isClosed');
  }


  getHasBeenAcknowledgedFromCookie() {
    return cookie.get(this.props.cookieName) !== undefined;
  }

  render () {
    return (
      <div className={`cookie-toast cookie-toast--${this.props.color||'ebony-clay'} ${this.state.hasBeenAcknowledged ? "cookie-toast--hidden" : ""}`}>
        <div
          onClick={this.dismiss.bind(this)}
          className={`cookie-toast__button cookie-toast__button--${this.props.color||'ebony-clay'}`}
        >
          <Icon icon={Cross} height="16" />
        </div>
        <div className={`cookie-toast__text cookie-toast__text--${this.props.color||'ebony-clay'}`}>
          {this.props.text}
        </div>
      </div>
    );
  }
}
