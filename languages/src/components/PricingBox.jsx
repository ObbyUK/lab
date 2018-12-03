import React from 'react';

import './pricing-box.less';
// Components
import PrimaryButton from './PrimaryButton.jsx';
import { ThinTick } from './Icons.jsx';
import Icon from './Icon.jsx';

export default (props) => (
  <div className={`pricing-box pricing-box--${props.color||'cruise'}`}>
    
    <div className={`pricing-box__top-section pricing-box__top-section--${props.color||'cruise'}`}>
      <div className="pricing-box__title">{props.title}</div>
      <div className="pricing-box__description">{props.description}</div>
      <div className="pricing-box__pricing">{props.pricing}</div>
    </div>

    <div className="pricing-box__bottom-section">
      {/* LIST */}
      <div className="pricing-box__list">
        {props.list.map((item, index) => (
          <div key={index} className="pricing-box__list-item">
            <div className={`pricing-box__list-icon pricing-box__list-icon--${props.color||'cruise'}`}>
              <Icon icon={ThinTick} height={14} />
            </div>
            <div className="pricing-box__list-text">{item}</div>
          </div>
        ))}
      </div>
      {/* BUTTON */}
      <div className="pricing-box__button">
        <PrimaryButton 
          size="huge"
          text={props.buttonText}
          onClick={props.onClick}
        />
      </div>
      {props.buttonNote &&
        <div className="pricing-box__button-note">
          {props.buttonNote}
        </div>
      }
    </div>
  </div>
);
