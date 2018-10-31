import React from 'react';

import './cycle-components-banner.less';
// Component
import Icon from './Icon.jsx';
import { ArrowLeft, ArrowRight } from './Icons.jsx';

export default class extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      onItemIndex: 0,
      list: props.list
    };
  }

  next() {
    this.setState({
      onItemIndex: (
        this.state.onItemIndex === this.state.list.length-1 ?
          0 : 
          this.state.onItemIndex+1
      )
    });
  }

  previous() {
    this.setState({
      onItemIndex: (
        this.state.onItemIndex === 0 ?
          this.state.list.length-1 :
          this.state.onItemIndex-1
      )
    });
  }

  renderButton(icon, callback, mode) {
    return (
      <div 
        className={`
          cycle-components-banner__button 
          cycle-components-banner__button--${this.props.color||'azalea'}
          cycle-components-banner__button--${mode||'desktop'}
        `}
        onClick={callback}
      >
        <Icon icon={icon} height={38}/>
      </div>
    );
  }

  render () {
    return (
      <div className={`cycle-components-banner cycle-components-banner--${this.props.color||'azalea'}`}>
        <div className="cycle-components-banner__title">{this.props.title}</div>
        <div className="cycle-components-banner__description">{this.props.description}</div>

        <div className="cycle-components-banner__wrap container">
          {this.renderButton(ArrowLeft, this.previous.bind(this), 'desktop')}
          <div className="cycle-components-banner__component">
            {this.props.viewComponent(this.state.list[this.state.onItemIndex])}            
          </div>
          {this.renderButton(ArrowRight, this.next.bind(this), 'desktop')}

          {this.renderButton(ArrowLeft, this.previous.bind(this), 'mobile')}
          {this.renderButton(ArrowRight, this.next.bind(this), 'mobile')}
        </div>
      </div>
    );
  }
}
