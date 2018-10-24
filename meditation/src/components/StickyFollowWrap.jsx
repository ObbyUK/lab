import React from 'react';
import $ from 'jquery';

const StickyFollowWrapStatuses = {
  STICK_ORIGINAL: 'stickInOriginalPosition',
  FOLLOW: 'followScroll',
  STICK_CURRENT: 'stickInTheCurrentPosition',
}

export default class StickyFollowWrap extends React.Component {

  constructor (props) {
    super(props);
    // this.stickOrFollowListener = this.stickOrFollowOnScroll.bind(this);
    this.state = {
      status: StickyFollowWrapStatuses.STICK_ORIGINAL,
      offsetValue: props.offset || 0,
      isCardStatic: true
    };
  }

  componentDidMount () {
    window.addEventListener('scroll', this.stickOrFollowOnScroll.bind(this));
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.stickOrFollowOnScroll);
  }

  stickOrFollowOnScroll() {
    this.setState({
      status: this.getScrollStatus()
    });
    this.setElementPositionBasedOnStatus();
  }

  setElementPositionBasedOnStatus () {
    switch  (this.state.status) {
      case (StickyFollowWrapStatuses.STICK_ORIGINAL):
        this.stickToOriginalPosition();
        break;
      case (StickyFollowWrapStatuses.FOLLOW):
        this.followScreen();
        break;
      case (StickyFollowWrapStatuses.STICK_CURRENT):
        this.stickToCurrentPosition();
        break;
    }
  }

  followScreen() {
    var component = $('#sticky-wrap');
    component
      .parent()
      .css({ 
        position: "relative" 
    });
    component
      .css({
        'position': 'fixed',
        'top': `${this.state.offsetValue}px`
      })
  }

  stickToOriginalPosition() {
    $('#sticky-wrap')
      .css({
        'position': 'static',
      });
  }

  stickToCurrentPosition() {

    var component = $('#sticky-wrap');
    var currentOffset = this.getScrollDistanceToStickAt() + this.state.offsetValue;
    
    component
      .parent()
      .css({
        position: 'static'
      });

    component
      .css({
        'position': 'absolute',
        'top': `${currentOffset}px`
      });
  }

  getScrollStatus () {
    var scrollTop = this.getScrollTop();
    var stickAt = this.getScrollDistanceToStickAt();
    var followAfter = this.getScrollDistanceToFollowAfter();
    
    if (this.isComponentLongerThanElementItFollows()) {
      return StickyFollowWrapStatuses.STICK_ORIGINAL;
    }
    if (scrollTop >= stickAt) {
      return StickyFollowWrapStatuses.STICK_CURRENT;
    }
    if (scrollTop > followAfter) {
      return StickyFollowWrapStatuses.FOLLOW;
    }
    if (scrollTop < followAfter) {
      return StickyFollowWrapStatuses.STICK_ORIGINAL;
    }

  }

  getScrollTop() {
    return $('html').scrollTop() || $('body').scrollTop();
  }

  getScrollDistanceToFollowAfter() {
    return (
      (
        this.getElementHeight(this.props.followAfter) +
        this.getElementTopOffset(this.props.followAfter)
      ) - this.state.offsetValue
    );
  }

  getScrollDistanceToStickAt() {
    var stickAtOffset = this.getElementTopOffset(this.props.stickAt);
    var componentHeight = this.getElementHeight('sticky-wrap');
    return stickAtOffset - componentHeight - this.state.offsetValue;
  }

  isComponentLongerThanElementItFollows() {
    var componentHeight = this.getElementHeight('sticky-wrap');
    var followedContentHeight = this.getElementHeight(this.props.follows);
    return componentHeight > followedContentHeight;
  }

  getElementTopOffset(id) {
    return document.getElementById(id).offsetTop;
  }

  getElementHeight(id) {
    return document.getElementById(id).offsetHeight;
  }

  isStatus(status) {
    return this.state.status === status;
  }

  render () {
    return (
      <div 
        id="sticky-wrap" 
        className={`
          sticky-follow-wrap 
          ${this.props.className ? this.props.className : ''}
          ${this.props.onFollowClassName && this.isStatus(StickyFollowWrapStatuses.FOLLOW) ? this.props.onFollowClassName : ''}
        `}
      >
        {this.props.children}
      </div>
    );
  }
}
