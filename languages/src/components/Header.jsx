import React from 'react';

import './header.less';

const formatTitle = (title) => {
  if (typeof title === "string") {
    return [title];
  }
  return title;
}

export default (props) => (
  <div 
    className="header"
    style={{
      backgroundColor: props.customBackgroundColor||''
    }}
  >
    <img 
      src={props.image}
      alt={formatTitle(props.title).join(' ')}
      className="header__image"
    />
    <div className="header__text-wrap">
      <div className="header__text">
        {props.title &&
          <h1 className={`header__title header__title--${props.color||'ebony-clay'}`}>
            {formatTitle(props.title).map((titlePart, index) => (
              <span key={index} className="header__title-part">
                {titlePart}
              </span>
            ))}
          </h1>
        }
        {props.description &&  
          <h2 className={`header__description header__description--${props.color||'ebony-clay'}`}>
            {props.description}
          </h2>
        }
        {props.children &&
          <div className="header__buttons">
            {props.children}
          </div>
        }
      </div>
    </div>
  </div>
);
