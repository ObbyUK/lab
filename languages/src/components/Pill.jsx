import React from 'react';

import './pill.less';

export default ({ text, onClick }) => (
  <div 
    className={`pill`}
    onClick={onClick}
  >
    {text}
  </div>
);
