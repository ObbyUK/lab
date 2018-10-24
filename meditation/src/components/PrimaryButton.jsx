import React from 'react';

import './primary-button.less';

export default (props) => (
  <button
    className={`
      primary-button 
      primary-button--${props.size||'large'} 
      primary-button--${props.color||'camelot'} 
      ${(props.disabled && ' primary-button--disabled')}
      ${props.className}
    `}
    type="button"
    onClick={(event) => {
      if (!props.disabled) {
        props.onClick(event);
      }
    }}
  >
    {props.text}
  </button>
)
