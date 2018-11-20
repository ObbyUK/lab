import React from 'react';
import moment from 'moment';

import './sales-bar.less';

export default class SalesBar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      timer: this.getInitialHourMinuteSecondsObject(),
      timerInterval: null
    };
  }

  componentDidMount() {
    this.setState({
      timerInterval: window.setInterval(() => {
        this.tickDownBySecond();
      }, 1000)
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerInterval);
  }

  getInitialHourMinuteSecondsObject() {
    var offerEndUnixTimestamp = moment().hours(23).minutes(59).seconds(59).milliseconds(0).unix();
    var currentUnixTimestamp = moment().unix();
    var remainingTimeInMinutes = Math.floor(((offerEndUnixTimestamp - currentUnixTimestamp)/60));
    return this.MinutesInt__HourMinutesObject(remainingTimeInMinutes);
  }

  MinutesInt__HourMinutesObject(minutes) {
    var hoursAndMinutesPercentageDecimal = minutes/60;
    var hoursAndMinutesPercentageTuple = hoursAndMinutesPercentageDecimal
      .toString()
      .split('.');
    var hours = hoursAndMinutesPercentageTuple[0];
    var minutes = Math
      .floor(60*(hoursAndMinutesPercentageTuple[1]/100))
      .toString()
      .slice(0,2);

    return {
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: 59
    };
  }

  tickDownBySecond() {
    this.setState({
      timer: this.getTimerReducedBySecond(this.state.timer)
    });
  }

  getTimerReducedBySecond(timer) {
    if (timer.seconds > 1) {
      return {
        hours: timer.hours,
        minutes: timer.minutes,
        seconds: timer.seconds-1
      }
    }
    
    if (timer.minutes > 1) {
      return {
        hours: timer.hours,
        minutes: timer.minutes-1,
        seconds: 59
      }
    }
    
    if (timer.hours > 1) {
      return {
        hours: timer.hours-1,
        minutes: 59,
        seconds: 59
      }
    }

    return {
      hours: 0,
      minutes: 59,
      seconds: 59,
    };
  }

  render () {
    return (
      <div className="sales-bar">
        <div className="sales-bar__text">
          {this.props.text}
        </div>
        <div className="sales-bar__timer">
          {`${this.state.timer.hours}:${this.state.timer.minutes}:${this.state.timer.seconds}`}
        </div>
      </div>
    );
  }
}
