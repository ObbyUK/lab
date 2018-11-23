import React from 'react';

import './icon-label.less';
// Components
import Icon from './../components/Icon.jsx';

export default (props) => (
  <div className="icon-label">
    <div className={`icon-label__icon ${props.hideIconOnMobile ? 'icon-label__icon--hide-icon-mobile' : ''}`}>
      <Icon icon={props.icon} height={18}/>
    </div>
    <div className="icon-label__text">
      {props.text}
    </div>
  </div>
);