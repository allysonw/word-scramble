import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  componentDidMount = () => {
    // Set up the 1 second interval
    this.countdownID = setInterval(
      () => this.decrement(),1000
    );
  }

  componentWillUnmount = () => {
    // when user clicks away or the game is over,
    // stop the countdown
    clearInterval(this.countdownID);
  }

  decrement = () => {
    // callback is a prop of GamePage.js
    // sends action to Redux reducer to decrement
    // value of countdown in the overall state store
    this.props.decrementTimer();
  }

  render() {
    return (
      <div className="timer-text">
        Countdown: {this.props.countdown}
      </div>
    );
  }
}

export default Timer;
