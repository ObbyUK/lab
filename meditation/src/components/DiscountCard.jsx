import React from 'react';

import './discount-card.less';

export default (props) => (
  <div className="discount-card">
    <div className="discount-card__column">
      <div className="discount-card__title">{props.original.title}</div>
      <div className="discount-card__price">{props.original.price}</div>
      <div className="discount-card__text">{props.original.text}</div>
    </div>
    <div className="discount-card__column discount-card__column--superior">
      <div className="discount-card__title discount-card__title--superior">{props.discount.title}</div>
      <div className="discount-card__price discount-card__price--superior">{props.discount.price}</div>
      <div className="discount-card__text discount-card__text--superior">{props.discount.text}</div>
    </div>
    <img 
      className="discount-card__image"
      src="/icons/many-stickers.svg"
    />
  </div>
);
