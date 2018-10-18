import React from 'react';

// Lib
import isFullArray from '../lib/isFullArray';
// Components
import TextList from './TextList.jsx';

import './big-radios.less';

export default (props) => (
  <div className="big-radios">
    {props.radios.map((radio, index) => (
      <div 
        key={index} 
        className="big-radios__radio"
        onClick={() => props.onChange(radio.value)}
      >
        <div className="big-radios__face">
          {(props.selected === radio.value) &&
            <img
              alt={radio.title}
              src="/icons/tick.svg"
              className="big-radios__radio-icon"
            />
          }
          {(props.selected !== radio.value) &&
            <span className="big-radios__radio-circle"></span>
          }
          <div className="big-radios__text">
            <div className="big-radios__title">{radio.title}</div>
            <div className="big-radios__description">{radio.description}</div>
          </div>
        </div>
        {(isFullArray(radio.sessionsPreview) && props.selected === radio.value) &&
          <TextList
            list={radio.sessionsPreview}
          />
        }
      </div>
    ))}
  </div>
);
