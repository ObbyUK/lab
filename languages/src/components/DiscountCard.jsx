import React from 'react';

import './discount-card.less';

export default (props) => (
  <div className="discount-card">
    <div className="discount-card__column">
      <div className="discount-card__title">London average</div>
      <div className="discount-card__price">£30+ / class</div>
      <div className="discount-card__text">Most language classes in London are £30+ per class</div>
    </div>
    <div className="discount-card__column discount-card__column--superior">
      <div className="discount-card__title discount-card__title--superior">Obby</div>
      <div className="discount-card__price discount-card__price--superior">£24 / class (20% less)</div>
      <div className="discount-card__text discount-card__text--superior">We keep prices low by making use of flexible venue spaces across London</div>
    </div>
    <img 
      className="discount-card__image"
      src="/icons/many-stickers.svg"
    />
  </div>
);
