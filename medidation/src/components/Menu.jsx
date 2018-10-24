import React from 'react';

import './menu.less';

export default (props) => (
  <div className={`menu menu--${props.mode||'absolute'}`}>
    <a className="menu__logo-wrap" href="/">
      <img src="/icons/logo-red.svg" alt="" className="menu__logo"/>
    </a>
    <div className="menu__body">
      {props.children}
    </div>
  </div>
);
