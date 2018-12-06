import React from 'react';
import moment from 'moment';

import './class-selectable-times-card.less';
// Components
import PriceSum from './PriceSum.jsx';
import DateButton from './../components/DateButton.jsx';

export default (props) => (
  <div className="class-selectable-times-card">
    
    {/* TITLE */}
    <div className="class-selectable-times-card__top-row">
      <div className="class-selectable-times-card__title-wrap">
        <h3 className="class-selectable-times-card__title">{props.title} - {props.address}</h3>
      </div>
      <div className="class-selectable-times-card__price">
        <PriceSum 
          size="small"
          calculation={props.priceLabel} 
          previousTotal={props.previousPrice}
          total={props.price}
        />
      </div>
    </div>

    {/* DATE CHOICE */}
    <div className="class-selectable-times-card__bottom-row">

      {/* DATES BY CATEGORY */}
      {props.dates.map((dates, datesIndex) => (
        <div 
          key={datesIndex} 
          className="class-selectable-times-card__dates-row"
        >
          <div className="class-selectable-times-card__dates-title-wrap">
            <div className="class-selectable-times-card__dates-title">
              {dates.title}
            </div>
            {dates.label &&
              <div className="class-selectable-times-card__dates-label">
                {dates.label}
              </div>
            }
          </div>
          {/* CATEGORY DATES */}
          <div className="class-selectable-times-card__days">
            {dates.options.map((option, index) => (
              <DateButton 
                key={index}
                onClick={props.onClick}
                {...option}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
