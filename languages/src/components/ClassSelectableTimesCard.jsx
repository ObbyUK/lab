import React from 'react';
import moment from 'moment';

import './class-selectable-times-card.less';
// Components
import PriceSum from './PriceSum.jsx';
import { Location, Clock, ArrowRightThick } from './../components/Icons.jsx';
import Icon from './../components/Icon.jsx';
import IconLabel from './../components/IconLabel.jsx';

export default (props) => (
  <div className="class-selectable-times-card">
    
    {/* TITLE */}
    <div className="class-selectable-times-card__top-row">
      <h3 className="class-selectable-times-card__title">{props.title}</h3>
      <div className="class-selectable-times-card__price">
        <PriceSum calculation={props.priceLabel} total={props.price}/>
      </div>
    </div>

    {/* ADDRESS & TIME */}
    <div className="class-selectable-times-card__details">
      <div className="class-selectable-times-card__detail">
        <IconLabel icon={Location} text={props.address}/>
      </div>
      <div className="class-selectable-times-card__detail">
        <IconLabel icon={Clock} text={`${props.lessonsStart} - ${props.lessonsEnd}`}/>
      </div>
    </div>

    {/* DAY CHOICE */}
    <div className="class-selectable-times-card__bottom-row">
      <div className="class-selectable-times-card__days">
        {props.options.map((classSession, index) => (
          <div 
            key={index} 
            className="class-selectable-times-card__day"
            onClick={() => props.onClick(classSession)}
          >
            <div className="class-selectable-times-card__day-text-wrap">
              <div className="class-selectable-times-card__day-text">{moment(classSession.starts, 'DD/MM/YYYY').format('dddd')}</div>
              <div className="class-selectable-times-card__day-note">Starts on {moment(classSession.starts, 'DD/MM/YYYY').format('Do MMM ')}</div>
            </div>
            <div className="class-selectable-times-card__day-icon">
              <Icon icon={ArrowRightThick} height={22} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
