import React from 'react';

import './language-button.less';
import { languageToFlagSvg } from './../constants/languages';

export default (props) => (
  <div 
    className="language-button"
    onClick={props.onClick}
  >
    <img 
      src={languageToFlagSvg[props.language||props.text]}
      alt={props.text} 
      className="language-button__flag"
    />
    <div className="language-button__text">{props.text}</div>
  </div>
);
