import React from 'react';

import './teachers-banner.less';

export default class TeachersBanner  extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      // we keep track of the index because its a unique value and allows to prev next expansion
      onTeacherIndex: 0,
      currentTeacher: props.teachers[0]
    };
  }

  selectTeacher(teacher, index) {
    this.setState({
      onTeacherIndex: index,
      currentTeacher: teacher
    });
  }

  render () {
    return (
      <div className={`
        teachers-banner
        teachers-banner--${this.props.color||'white'}
        ${this.props.reverse && 'teachers-banner--reverse'}
      `}>
        
        <div className="teachers-banner__image-wrap col-sm-12 col-md-6">
          <img 
            className="teachers-banner__image" 
            alt={this.state.currentTeacher.name}
            src={this.state.currentTeacher.image}
          />
        </div>

        <div className="teachers-banner__text col-sm-12 col-md-6">
          <div className="teachers-banner__title">{this.props.title}</div>
          <div className="teachers-banner__name">{this.state.currentTeacher.name}</div>
          <div className="teachers-banner__description">{this.state.currentTeacher.description}</div>
          <div className="teachers-banner__avatars">
            {this.props.teachers.map((teacher, index) => (
              <div 
                key={index} 
                className={`teachers-banner__avatar ${ index === this.state.onTeacherIndex ? 'teachers-banner__avatar--selected' : ''}`}
                onClick={() => this.selectTeacher(teacher, index)}
              >
                <img src={teacher.avatar} alt={teacher.name} className="teachers-banner__avatar-image"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
