import React from 'react';

import './questions-banner.less';
// Lib
import isFullArray from './../lib/isFullArray';

export default (props) => (
  <div className="questions-banner">
    <div className="questions-banner__body">
      <h2 className="questions-banner__title">{props.title}</h2>
      {isFullArray(props.questions) && props.questions.map((question, index) => (
        <div key={index} className="questions-banner__question">
          <h4 className="questions-banner__question-title">{question.title}</h4>
          <p className="questions-banner__question-text">{question.text}</p>
        </div>
      ))}
    </div>
  </div>
);
