import React from 'react';

import './center-icon-banner.less';

export default (props) => (
  <div className="center-icon-banner">
    <div className="center-icon-banner__content content">
      <img src={props.image} className="center-icon-banner__icon"/>
      <div className="center-icon-banner__title">{props.title}</div>
      <div className="center-icon-banner__description">{props.description}</div>
    </div>
  </div>
);
