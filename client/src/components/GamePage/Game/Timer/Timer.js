import React, { Component } from 'react';

import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props)

    // Maintain internal state to keep track of when word is solved
    this.state = {
      countdown: 999
    }
  }

  componentDidMount = () => {
    this.countdownID = setInterval(
      () => this.decrement(),1000
    );
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  decrement = () => {
    this.setState({
      countdown: --this.state.countdown
    });
  }

  render() {
    return (
      <div className="timer-text">
        Countdown: {this.state.countdown}
      </div>
    );
  }
}

export default Timer;
