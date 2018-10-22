import React from 'react';

import './review-card.less';
import { languageToFlagSvg } from './../constants/languages';


export default (props) => (
  <div className="review-card">
    
    <div className="review-card__image-wrap">
      <img 
        src={languageToFlagSvg[props.language]} 
        alt={props.language} 
        className="review-card__flag"
      />
      <img 
        src={props.image} 
        alt={props.name} 
        className="review-card__image"
      />
    </div>

    <div className="review-card__text-wrap">
      <div className="review-card__name-wrap">
        <div className="review-card__name">{props.name}</div>
        <div className="review-card__learning">- Learning {props.languageName}</div>
      </div>
      <div className="review-card__review-text">
        {props.text}
      </div>
    </div>

  </div>
);
