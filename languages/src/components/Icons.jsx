import React from 'react';

export const ArrowRight = {
  viewBox: '0 0 17 38',
  body: () => (
    <path fill="none" fillRule="evenodd" stroke="#A2646F" strokeWidth="3" d="M2 1l13 17.701L2 36.402"/>
  )
};

export const ArrowRightThick = {
  viewBox: '0 0 12 21',
  body: () => (
    <path fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="3" d="M1.151.97l8.026 9.53-8.026 9.53"/>
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

export const Tick = {
  viewBox: '0 0 512 512',
  body: () => (
    <path d='M432 64l-240 240-112-112-80 80 192 192 320-320z' />
  )
};

export const Location = {
  viewBox: '0 0 20 20',
  body: () => (
    <g fill="none" fillRule="evenodd">
      <g stroke="#C5C5C5" strokeLinecap="square" transform="translate(3.5 2.5)">
        <circle cx="6.516" cy="5.976" r="2.516"/>
        <path d="M2.154 11.127A6.484 6.484 0 0 1 0 6.294C0 2.704 2.91 0 6.5 0S13 2.704 13 6.294c0 1.917-.829 3.64-2.148 4.83C8.988 13.32 6.5 14.91 6.5 14.91s-2.484-1.588-4.347-3.784z"/>
      </g>
    </g>
  )
};

export const Clock = {
  viewBox: '0 0 20 20',
  body: () => (
    <g fill="none" fillRule="evenodd">
      <g stroke="#C5C5C5" transform="translate(2 2)">
        <circle cx="8" cy="8" r="7.5"/>
        <path strokeLinecap="square" d="M12.968 8H8V3.04"/>
      </g>
    </g>
  )
};

export const BarChart = {
  viewBox: '0 0 20 20',
  body: () => (
    <g fill="none" fillRule="evenodd">
      <path stroke="#C5C5C5" d="M12.5 17.5h5V4A1.5 1.5 0 0 0 16 2.5h-2A1.5 1.5 0 0 0 12.5 4v13.5zM2.5 17.5h5V13A1.5 1.5 0 0 0 6 11.5H4A1.5 1.5 0 0 0 2.5 13v4.5zM7.5 17.5h5V8A1.5 1.5 0 0 0 11 6.5H9A1.5 1.5 0 0 0 7.5 8v9.5z"/>
    </g>
  )
};
