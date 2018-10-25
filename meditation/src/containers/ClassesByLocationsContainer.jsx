import React from 'react';
import { connect } from 'react-redux';
import { mergeAll } from 'ramda';

import './classes-by-locations-container.less';
// Actions
import { chooseClassAction } from './../appActions.js';
import flow from './../constants/flow';
import ClassAsDateCard from '../components/ClassAsDateCard.jsx';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, state) => ({
  chooseClass: (chosenClass) => dispatch(chooseClassAction(chosenClass)),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    
  }
]);

class ClassesByLocationContainer extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="classes-by-locations-container">
        <div className="container">
          <h2 className="classes-by-locations-container__title">
            Choose your Location
          </h2>
          {flow.classesByLocation.map((location, index) => (
            <div key={index} className="classes-by-locations-container__location">
              <div className="classes-by-locations-container__location-title">{location.name}</div>
              {location.classes.map((classAsDate, index) => (
                <div key={index} className="classes-by-locations-container__class-card">
                  <ClassAsDateCard 
                    class={classAsDate}
                    onClick={this.props.chooseClass.bind(this)}
                  />
                </div>
              ))}
            </div>
          ))}        
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ClassesByLocationContainer);
