import React from 'react';

import './checkbox.less';
// Components
import { Tick } from './Icons.jsx';
import Icon from './Icon.jsx';

export default (props) => (
  <div
    className={`${props.className||'checkbox'}`}
    onClick={props.onClick}
  >
    <span className="checkbox__wrap">
      <span className={`checkbox__square ${props.isChecked ? 'checkbox__square--checked' : ''}`}>
        <span className={`checkbox__tick ${props.isChecked ? 'checkbox__tick--showing' : ''}`}>
          <Icon height={12} icon={Tick} />
        </span>
      </span>
      <span className="checkbox__label">{props.label}</span>
    </span>
    {props.description &&
      <div className="checkbox__description">{props.description}</div>
    }
  </div>
);
