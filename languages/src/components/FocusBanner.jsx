import React from 'react';

import './focus-banner.less';

export default (props) => (
  <div className="focus-banner">
    <div className="focus-banner__body container">
      <div className="focus-banner__text">{props.priceText}</div>
      {props.buttonText &&
        <div className="focus-banner__button">{props.buttonText}</div>
      }
    </div>
  </div>
);
