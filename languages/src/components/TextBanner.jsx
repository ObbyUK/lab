import React from 'react';

import './text-banner.less';
// Components
import TickList from './TickList.jsx';

export default (props) => (
  <div className="text-banner">
    <div className="text-banner__body container">
      <div className="text-banner__title">{props.title}</div>
      {props.description &&
        <div className="text-banner__description">{props.description}</div>
      }
      {props.list &&
        <div className="text-banner__list">
          <TickList
            columns={1}
            list={props.list} 
          />
        </div>
      }
    </div>
  </div>
);
