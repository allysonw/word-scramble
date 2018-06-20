import React, { Component } from 'react';
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
    // reset the timer when the game ends
    if (this.props.gameComplete === undefined) {
      console.log("timer props" + this.props)
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


// // Connection to Redux State
// const mapStateToProps = (state) => {
//   return ({
//     countdown: state.timer.countdown,
//     gameComplete: state.game.complete,
//     playerName: state.game.score.player
//   });
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     decrement: decrement,
//     reset: reset
//   }, dispatch);
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Timer);

export default Timer;
