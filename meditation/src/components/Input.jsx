import React from 'react';
import Icon from './Icon.jsx';

import './input.less';

export default ({ placeholder, value, onChange, type, color, icon, iconSize, textSize, onKeyPress }) => (
  <div className={`input input--${color||'ebony-clay'}`}>
    {icon &&
      <div className={`input__icon input__icon--${color||'ebony-clay'} input__icon--size-${textSize||'medium'}`}>
        <Icon icon={icon} height={iconSize} />
      </div>
    }
    <input 
      className={`input__input input__input--${color||'ebony-clay'} input__input--text-${textSize||'medium'}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  </div>
);
