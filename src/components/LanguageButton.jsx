import React from 'react';

import './language-button.less';

const languageToFlagSvg = {
  Spanish: "/icons/spain-flag.svg",
  Italian: "/icons/italy-flag.svg",
  French: "/icons/france-flag.svg",
  German: "/icons/germany-flag.svg",
};

export default (props) => (
  <div 
    className="language-button"
    onClick={props.onClick}
  >
    <img 
      src={languageToFlagSvg[props.flag||props.text]}
      alt={props.text} 
      className="language-button__flag"
    />
    <div className="language-button__text">{props.text}</div>
  </div>
);
