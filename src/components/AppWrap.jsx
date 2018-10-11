import React from 'react';
import 'normalize-css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app-wrap.less';

export default (props) => (
  <div className="app-wrap">
    {props.children}
  </div>
);
