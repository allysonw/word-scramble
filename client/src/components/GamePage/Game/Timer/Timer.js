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
    clearInterval(this.countdownID);
  }

  decrement = () => {
    // reset the timer when the game ends
    // TODO - figure out why this works with
    // undefined and not false
    if (this.props.gameComplete === undefined) {
      clearInterval(this.countdownID);
    }
    else {
      this.props.decrementTimer();
    }
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
