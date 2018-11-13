import React from 'react';

import './label-input.less';

export default (props) => (
  <div className="label-input">
    <div className="label-input__label">
      {props.label}
    </div>
    <div className="label-input__input-wrap">
      <input 
        className="label-input__input"
        type="text"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        placeholder={props.placeholder}
      />
    </div>
  </div>
);
