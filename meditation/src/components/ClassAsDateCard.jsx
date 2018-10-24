import React from 'react';

import './class-as-date-card.less';
// Components
import PriceSum from './../components/PriceSum.jsx';
import { Location, Clock } from './../components/Icons.jsx';
import Icon from './../components/Icon.jsx';
import PrimaryButton from './../components/PrimaryButton.jsx';

const IconLabel = (props) => (
  <div className="icon-label">
    <div className="icon-label__icon">
      <Icon icon={props.icon} height={18}/>
    </div>
    <div className="icon-label__text">
      {props.text}
    </div>
  </div>
)

export default (props) => (
  <div className="class-as-date-card">
    
    <div className="class-as-date-card__top-row">
      <h3 className="class-as-date-card__title">{props.class.title}</h3>
      <div className="class-as-date-card__price">
        <PriceSum calculation={props.class.priceLabel} total={props.class.price}/>
      </div>
    </div>

    <div className="class-as-date-card__bottom-row">
      <div className="class-as-date-card__details">
        <div className="class-as-date-card__detail">
          <IconLabel icon={Location} text={props.class.location}/>
        </div>
        <div className="class-as-date-card__detail">
          <IconLabel icon={Clock} text={props.class.time}/>
        </div>
        <div className="class-as-date-card__detail">
          <IconLabel icon={Clock} text={props.class.dates}/>
        </div>
      </div>
      <div className="class-as-date-card__button">
        <PrimaryButton text={props.class.buttonText||'Book a spot'} />
      </div>
    </div>
  </div>
);
