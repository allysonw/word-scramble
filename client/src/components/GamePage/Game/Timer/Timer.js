import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement } from  '../../../../actions/timerActions.js';

import './Timer.css';

class Timer extends Component {
  componentDidMount = () => {
    this.countdownID = setInterval(
      () => this.decrement(),1000
    );
  }

  componentWillUnmount = () => {
    clearInterval(this.countdownID);
  }

  decrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div className="timer-text">
        Countdown: {this.props.countdown}
      </div>
    );
  }
}


// Connection to Redux State
const mapStateToProps = (state) => {
  return ({
    countdown: state.timer.countdown
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    decrement: decrement
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
