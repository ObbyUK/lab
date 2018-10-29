import React from 'react';
import { curry, contains } from 'ramda';

import './locations-preview.less';
// Lib
import isFullArray from './../lib/isFullArray';

const isSelectedLocationAndHasAddresses = curry((selectedLocations, location) => {
  return (
    contains(location.value, selectedLocations) &&
    isFullArray(location.addresses)
  );
});

export default (props) => (
  <div className="locations-preview">
  
    {props.title &&
      <h3 className="locations-preview__sub-title locations-preview__sub-title--bold">
        {props.title}
      </h3>
    }

    {props.locationOptions
      .filter(isSelectedLocationAndHasAddresses(props.locations))
      .map((location, index) => (
        <div 
          key={index} 
          className={`
            locations-preview__area-adresses
            locations-preview__area-adresses--show
          `}
        >
          <div className="locations-preview__sub-title">{location.name}</div>
          {isFullArray(location.addresses) && location.addresses.map((address, index) => [
            <div key={`${index}_address`} className="locations-preview__address">{address}</div>,
            <div key={`${index}_dot`} className="locations-preview__dot">•</div>
          ])}
        </div>
      ))
    }
  </div>
);
