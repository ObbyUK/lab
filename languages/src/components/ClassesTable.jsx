import React from 'react';
import moment from 'moment';

import './classes-table.less';
// Components
import PriceSum from './PriceSum.jsx';
import { Location } from './Icons.jsx';
import IconLabel from './IconLabel.jsx';
import Pill from './Pill.jsx';

export default (props) => (
  <div className="classes-table">
    
    {/* TITLE */}
    <div className="classes-table__top-row">
      <div className="classes-table__title-wrap">
        <h3 className="classes-table__title">{props.title}</h3>
        <div className="classes-table__address">
          <IconLabel hideIconOnMobile={true} icon={Location} text={props.address}/>
        </div>
      </div>
      <div className="classes-table__price">
        <PriceSum 
          size="small"
          pillText={props.pillText}
          calculation={props.priceLabel} 
          previousTotal={props.previousPrice}
          total={props.price}
        />
      </div>
    </div>

    {/* DATE CHOICE */}
    <div className="classes-table__bottom-row">
      <div className="classes-table__table">
        <div className="classes-table__head">
          <div className="classes-table__column">Start date</div>
          <div className="classes-table__column">End date</div>
          <div className="classes-table__column">Day of the week</div>
        </div>
        {props.dates.map((date, index) => [
          <div key={`${index}_mobile`} className="classes-table__mobile-row">
            <div className="classes-table__mobile-date">
              {moment(date.starts, 'DD/MM/YYYY').format('Do MMM YYYY')} - {moment(date.ends, 'DD/MM/YYYY').format('Do MMM YYYY')}
            </div>
            <div className="classes-table__mobile-time-of-day">
              Every {moment(date.starts, 'DD/MM/YYYY').format('dddd')}
            </div>
            <div className="classes-table__mobile-pills">
              {date.slots.map((slot, slotIndex) => (
                <div key={slotIndex} className="classes-table__pill">
                  <Pill
                    text={`${slot.starts}-${slot.ends}`}
                    onClick={() => props.onClick({date, slot})}
                  />
                </div>
              ))}
            </div>
          </div>,
          <div key={index} className="classes-table__row">
            <div className="classes-table__column">{moment(date.starts, 'DD/MM/YYYY').format('Do MMM YYYY')}</div>
            <div className="classes-table__column">{moment(date.ends, 'DD/MM/YYYY').format('Do MMM YYYY')}</div>
            <div className="classes-table__column">Every {moment(date.starts, 'DD/MM/YYYY').format('dddd')}</div>
            <div className="classes-table__column classes-table__column--last">
              {date.slots.map((slot, slotIndex) => (
                <div key={slotIndex} className="classes-table__pill">
                  <Pill
                    text={`${slot.starts}-${slot.ends}`}
                    onClick={() => props.onClick({date, slot})}
                  />
                </div>
              ))}
            </div>   
          </div>
        ])}
      </div>
    </div>
  </div>
);
