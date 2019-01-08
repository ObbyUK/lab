import React from 'react';
import PriceBox from './PriceBox.jsx';

import './price-boxes.less';

export default (props) => (
  <div className="price-boxes">
    {props.boxes.map((box, index) => (
      <div key={index} className="price-boxes__box">
        <PriceBox
          {...box}
          onClick={() => props.onClick(box)}
        />
      </div>
    ))}
  </div>
);
