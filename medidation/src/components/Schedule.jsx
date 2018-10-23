import React from 'react';

import './schedule.less';
// Components
import PriceSum from './PriceSum.jsx';
import PrimaryButton from './PrimaryButton.jsx';

export default (props) => (
  <div className="schedule">
    
    <div className="schedule__header container">
      <div className="schedule__title">
        {props.title||'Schedule'}
      </div>
      <div className="schedule__header-details">
        <div className="schedule__detail">
          <PriceSum calculation={props.price.calculation} total={props.price.total}/>
        </div>
        <div className="schedule__detail">
          <PrimaryButton 
            text={props.buttonText}
            color="ebony-clay"
          />
        </div>
        <div className="schedule__header-text">
          {props.blurb}
        </div>
      </div>
    </div>

    <div className="schedule__body container">
      {props.weeks.map((week, index) => (
        <div key={index} className="schedule__week">
          <div className="schedule__week-title">Week {index}</div>
          <div className={`schedule__week-subtitle schedule__week-subtitle--${week.color}`}>{week.title}</div>
          <div className="schedule__text">{week.text}</div>
        </div>
      ))}
      {props.note && 
        <div className="schedule__note-wrap">
          <div className="schedule__note">
            <div className="schedule__note-title">{props.note.title}</div>
            <div className="schedule__note-body">{props.note.text}</div>
          </div>
        </div>
      }
    </div>

  </div>
);
