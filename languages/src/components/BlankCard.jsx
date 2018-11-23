import React from 'react';

import './blank-card.less';

export default (props) => (
  <div className={`blank-card ${props.className||''}`}>
    {props.children}
  </div>
);
