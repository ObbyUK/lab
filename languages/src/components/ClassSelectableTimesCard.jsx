import React from 'react';
import moment from 'moment';

import './class-selectable-times-card.less';
// Components
import PriceSum from './PriceSum.jsx';
import { Location, ArrowRightThick } from './../components/Icons.jsx';
import Icon from './../components/Icon.jsx';
import IconLabel from './../components/IconLabel.jsx';

const DateButton = (props) => (
  <div 
    className={`
      class-selectable-times-card__day
      ${props.classSession.soldOut ? 'class-selectable-times-card__day--sold-out' : ''}
    `}
    onClick={() => {
      if (!props.classSession.soldOut) {
        props.onClick(props.classSession)
      }
    }}
  >
    {props.classSession.soldOut &&
      <div className="class-selectable-times-card__day-sold-out-label">
        Sold out
      </div>
    }
    <div className="class-selectable-times-card__day-text-wrap">
      <div className="class-selectable-times-card__day-text">{moment(props.classSession.starts, 'DD/MM/YYYY').format('dddd')}s</div>
      <div className="class-selectable-times-card__day-note">Starts on {moment(props.classSession.starts, 'DD/MM/YYYY').format('Do MMM ')}</div>
    </div>
    <div className="class-selectable-times-card__day-icon">
      <Icon icon={ArrowRightThick} height={22} />
    </div>
  </div>
);

export default (props) => (
  <div className="class-selectable-times-card">
    
    {/* TITLE */}
    <div className="class-selectable-times-card__top-row">
      <div className="class-selectable-times-card__title-wrap">
        <h3 className="class-selectable-times-card__title">{props.title}</h3>
        <div className="class-selectable-times-card__address">
          <IconLabel hideIconOnMobile={true} icon={Location} text={props.address}/>
        </div>
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
            {dates.options.map((classSession, index) => (
              <DateButton 
                key={index}
                classSession={classSession}
                onClick={props.onClick}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
