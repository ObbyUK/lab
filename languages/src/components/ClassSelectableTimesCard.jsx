import React from 'react';

import './class-selectable-times-card.less';
// Components
import Icon from './Icon.jsx';
import { Location } from './Icons.jsx';
import DateButton from './../components/DateButton.jsx';

export default (props) => (
  <div className="class-selectable-times-card">
    
    {/* TITLE */}
    <div className="class-selectable-times-card__top-row">
      <div className="class-selectable-times-card__title-wrap">
        <h3 className="class-selectable-times-card__title">{props.title}</h3>
        <div className="class-selectable-times-card__address-wrap">
          <div className="class-selectable-times-card__address-icon">
            <Icon icon={Location} height={22} /> 
          </div>
          <h3 className="class-selectable-times-card__address">
            {props.address}
          </h3>
        </div>
        <a target="_blank" href={props.mapsLink} className="class-selectable-times-card__address-link">
          (See on map)
        </a>
      </div>
      <div className="class-selectable-times-card__price">
        {props.priceLabel} - {props.price}
      </div>
    </div>

    {/* DATE CHOICE */}
    <div className="class-selectable-times-card__bottom-row">
      <div className="class-selectable-times-card__dates-row">
          {props.dates.map((option, index) => (
            <div key={index} className="class-selectable-times-card__date">
              <DateButton 
                onClick={props.onClick}
                {...option}
              />
            </div>
          ))}
      </div>
    </div>
  </div>
);
