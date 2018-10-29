import React from 'react';
import { contains } from 'ramda';

import './locations-preview.less';
// Lib
import isFullArray from './../lib/isFullArray';

const canLocationAddressesBeShown = (location, locations) => {
  return (
    contains(location.value, locations) &&
    isFullArray(location.addresses)
  );
}

export default (props) => (
  <div className="locations-preview">
  
    {props.title &&
      <h3 className="locations-preview__sub-title locations-preview__sub-title--bold">
        {props.title}
      </h3>
    }

    {props.locationOptions.map((location, index) => (
      <div 
        key={index} 
        className={`
          locations-preview__area-adresses 
          ${canLocationAddressesBeShown(location, props.locations) && 'locations-preview__area-adresses--show'}
        `}
      >
        <div className="locations-preview__sub-title">{location.name}</div>
        {isFullArray(location.addresses) && location.addresses.map((address, index) => [
          <div key={`${index}_address`} className="locations-preview__address">{address}</div>,
          <div key={`${index}_dot`} className="locations-preview__dot">•</div>
        ])}
      </div>
    ))}
  </div>
);
