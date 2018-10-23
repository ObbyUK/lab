import React from 'react';

import './classes-by-locations-container.less';
// Actions
import {} from './../appActions.js';
import flow from './../constants/flow';
import ClassAsDateCard from '../components/ClassAsDateCard.jsx';

export default class  extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="classes-by-locations-container container">
        <h2 className="classes-by-locations-container__title">
          Choose your Location
        </h2>
        {flow.classesByLocation.map((location, index) => (
          <div key={index} className="classes-by-locations-container__location">
            <div className="classes-by-locations-container__location-title">{location.name}</div>
            {location.classes.map((classAsDate, index) => (
              <div key={index} className="classes-by-locations-container__class-card">
                <ClassAsDateCard class={classAsDate}/>
              </div>
            ))}
          </div>
        ))}        
      </div>
    );
  }
}
