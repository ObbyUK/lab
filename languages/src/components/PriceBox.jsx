import React from 'react';

import './price-box.less';
// Components
import PrimaryButton from './PrimaryButton.jsx';

export default (props) => (
  <div className="price-box">
    
    <div 
      className={`
        price-box__header
        price-box__header--${props.color||'white'}
      `}
    >{props.title}</div>

    <div className="price-box__body">
      
      <div className="price-box__text-wrap">
        
        {props.previousPrice &&
          <div className="price-box__previous-price">{props.previousPrice}</div>
        }
        
        <div 
          className={`
            price-box__price
            price-box__price--${props.color||'white'}
          `}
        >
          {props.price}
        </div>

        {props.note &&
          <div className="price-box__note">{props.note}</div>
        }
      </div>

      <div className="price-box__button">
        <PrimaryButton
          text={props.buttonText||'Select'}
          onClick={props.onClick}
        />
      </div>
    </div>
  </div>
);
