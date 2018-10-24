import React from 'react';

import './blurb-banner.less';

export default (props) => (
  <div className="blurb-banner">
    <div className="blurb-banner__body container">
      <div className="blurb-banner__text-wrap">
        <div className="blurb-banner__title">{props.title}</div>
        <div className="blurb-banner__text">{props.text}</div>
      </div>
      <img src={props.image} className="blurb-banner__image"/>
    </div>
  </div>
);
