import React from 'react';

export default ({ width, height, icon }) => (
  <svg
    width={width}
    height={height}
    viewBox={icon.viewBox}
  >
    {icon.body()}
  </svg>
);
