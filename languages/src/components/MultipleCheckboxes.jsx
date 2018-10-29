import React from 'react';
import { contains } from 'ramda'

import './multiple-checkboxes.less';
// Components
import Checkbox from './Checkbox.jsx';

export default class MultipleCheckboxes extends React.Component {

  isOptionChecked(value) {
    return contains(value, this.props.checked);
  }

  checkOption(value) {
    this.props.onChange(value, this.isOptionChecked(value));
  }

  render () {
    return (
      <div className="multiple-checkboxes">
        {this.props.options.map((option, index) => (
          <Checkbox
            key={index}
            className={'multiple-checkboxes__checkbox'}
            isChecked={this.isOptionChecked(option.value)}
            label={option.name}
            description={option.description}
            onClick={() => this.checkOption(option.value)}
          />
        ))}
      </div>
    );
  }
}