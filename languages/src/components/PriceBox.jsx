import React from 'react';

import './price-box.less';
// Components
import PrimaryButton from './PrimaryButton.jsx';
import Icon from './Icon.jsx';
import { ArrowRightThick } from './Icons.jsx';

export default (props) => (
  <div className="price-box">
    {/* DESKTOP */}
    <div className="price-box__desktop">
      <div 
        className={`
          price-box__header
          price-box__header--${props.color||'sun'}
        `}
      >
        {props.title}
      </div>
      <div className="price-box__body">
        
        <div className="price-box__text-wrap">
          
          {props.previousPrice &&
            <div className="price-box__previous-price">
              {props.previousPrice}
            </div>
          }
          
          <div 
            className={`
              price-box__price
              price-box__price--${props.color||'sun'}
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
            size="huge"
            text={props.buttonText||'Select'}
            onClick={props.onClick}
          />
        </div>
      </div>
    </div>

    {/* MOBILE */}
    <div 
      className="price-box__mobile" 
      onClick={props.onClick}
    >
      <div className="price-box__mobile-text">
        <div className="price-box__mobile-title">
            {props.title} -
            <span 
              className={`
                price-box__mobile-price
                price-box__mobile-price--${props.color||'sun'}
              `}
            >
              {props.price}
            </span>
        </div>
        {(props.previousPrice||props.note) &&
          <div className="price-box__mobile-notes">
            {props.previousPrice &&
              <div className="price-box__mobile-previous-price">
                {props.previousPrice}
              </div>
            }
            {props.note &&
              <div className="price-box__mobile-note">{props.note}</div>
            }
          </div>
        }
      </div>
      <div className="price-box__mobile-arrow">
        <Icon icon={ArrowRightThick} height={15} />
      </div>
    </div>
  </div>
);
