import React from 'react';

import isFullArray from './../lib/isFullArray';
import PrimaryButton from './PrimaryButton.jsx'

import './button-banner.less';

export default (props) => (
  <div className="button-banner">
    <div className="container">
      <h2 className="button-banner__title">{props.title}</h2>
      {isFullArray(props.points) &&
        <div className="button-banner__points">
          {props.points.map((point, index) => (
            <div key={index} className="button-banner__point">
              <img src={point.image} className="button-banner__point-icon"/>
              <div className="button-banner__point-text">{point.text}</div>
            </div>
          ))}
        </div>
      }
      {(props.buttonText || process.label) &&
        <div className="button-banner__buttons">
          {props.buttonText &&
            <div className="button-banner__button">
              <PrimaryButton
                text={props.buttonText}
                onClick={props.onClick}
              />
            </div>
          }

          {props.label &&
            <div 
              className="button-banner__label"
              onClick={props.onClick}
            >
              {props.label}
            </div>
          }
        </div>
      }
    </div>
  </div>
);
