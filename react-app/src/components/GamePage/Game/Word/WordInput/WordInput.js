import React, { Component } from 'react';
import './WordInput.css'

class WordInput extends Component {
  constructor(props) {
    super(props);

    // Maintain internal state to keep track of input value
    this.state = {
      value: '',
    };
  }

  handleInput = (e) => {
    // Check whether user has entered the solution with each
    // character they input
    if (this.validateWord(e.target.value)) {
      this.props.onSolved();
    }

    // Update state with current input, but
    // only allow input if the letter is in the word
    const lastLetter = e.target.value.slice(-1).toLowerCase()

    if (this.props.word.letters.includes(lastLetter)) {
      this.setState({
        value: e.target.value.toUpperCase()
      });
    }

  }

  // Returns true if user input matches "letters" prop (the solution)
  validateWord = (text) => {
    return text.toLowerCase() === this.props.word.letters ? true : false
  }

  render() {
    return (
      <div className="word-input-box">
        <input type="text" maxLength={this.props.word.letters.length} placeholder="YOUR ANSWER" value={this.state.value} onChange={this.handleInput} />
      </div>
    );
  }
}

export default WordInput;
