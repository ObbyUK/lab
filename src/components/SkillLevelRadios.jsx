import React from 'react';

// Lib
import isFullArray from './../lib/isFullArray';
// Components
import TextList from './TextList.jsx';

import './skill-level-radios.less';

export default (props) => (
  <div className="skill-level-radios">
    {props.radios.map((radio, index) => (
      <div key={index} className="skill-level-radios__radio">
        <div className="skill-level-radios__face">
          {(props.selected === radio.value) &&
            <img
              src="/icons/tick.svg"
              className="skill-level-radios__radio-icon"
            />
          }
          {(props.selected !== radio.value) &&
            <img
              src="/icons/tick.svg"
              className="skill-level-radios__radio-icon"
            />
          }
          <div className="skill-level-radios__text">
            <div className="skill-level-radios__title">{radio.title}</div>
            <div className="skill-level-radios__description">{radio.description}</div>
          </div>
        </div>
        {isFullArray(radio.sessionsPreview) &&
          <TextList
            list={radio.sessionsPreview}
          />
        }
      </div>
    ))}
  </div>
);
