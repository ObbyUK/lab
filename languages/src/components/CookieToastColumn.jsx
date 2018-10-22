import React from 'react';
import CookieToast from './CookieToast.jsx';

import './cookie-toast-column.less';

export default (props) => (
  <div className="cookie-toast-column">
    {props.toasts.map((toast, index) => (
      <div
        key={index}
        className="cookie-toast-column__toast"
      >
        <CookieToast
          cookieName={toast.name}
          text={toast.text}
          color={toast.color}
        />
      </div>
    ))}
  </div>
);
