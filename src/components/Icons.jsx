import React from 'react';

export const ArrowRight = {
  viewBox: '0 0 17 38',
  body: () => (
    <path fill="none" fillRule="evenodd" stroke="#A2646F" strokeWidth="3" d="M2 1l13 17.701L2 36.402"/>
  )
};

export const ArrowLeft = {
  viewBox: '0 0 17 38',
  body: () => (
    <path fill="none" fillRule="evenodd" stroke="#A2646F" strokeWidth="3" d="M15 36.402l-13-17.7L15 1"/>
  )
};

export const Cross = {
  viewBox: '0 0 20 20',
  body: () => (
    <g
      fill='none'
      fillRule='evenodd'
      stroke='#565A5C'
      strokeLinecap='square'
      strokeWidth='2'
    >
      <path d='M3 3l13.86 13.86M16.86 3L3 16.86' />
    </g>
  )
};
