import React from 'react';

import './date-button.less';
import { ArrowRightThick } from './../components/Icons.jsx';
import Icon from './../components/Icon.jsx';

export default (props) => (
  <div 
    className={`
      date-button
      ${props.soldOut ? 'date-button--sold-out' : ''}
    `}
    onClick={() => {
      if (!props.soldOut) {
        props.onClick(props.session)
      }
    }}
  >
    {props.soldOut &&
      <div className="date-button__sold-out-label">
        Sold out
      </div>
    }
    <div className="date-button__text-wrap">
      <div className="date-button__text">{props.text}</div>
      <div className="date-button__note">{props.note}</div>
    </div>
    <div className="date-button__icon">
      <Icon icon={ArrowRightThick} height={18} />
    </div>
  </div>
);
