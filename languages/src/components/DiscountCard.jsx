import React from 'react';

import './discount-card.less';

export default (props) => (
  <div className="discount-card">
    <div className="discount-card__column">
      <div className="discount-card__title">Average class</div>
      <div className="discount-card__price">£30 / class</div>
      <div className="discount-card__text">Most language classes in London are £30</div>
    </div>
    <div className="discount-card__column discount-card__column--superior">
      <div className="discount-card__title discount-card__title--superior">Obby</div>
      <div className="discount-card__price discount-card__price--superior">£24 / class (20% less)</div>
      <div className="discount-card__text discount-card__text--superior">On Obby we keep the prices low by offering flexible locations and timings</div>
    </div>
    <img 
      className="discount-card__image"
      src="/icons/many-stickers.svg"
    />
  </div>
);
