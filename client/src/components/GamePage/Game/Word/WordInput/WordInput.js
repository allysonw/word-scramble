import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

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

    // Update state with current input
    this.setState({
      value: e.target.value,
    });
  }

  // Returns true if user input matches "letters" prop (the solution)
  validateWord = (text) => {
    return text.toLowerCase() === this.props.word.letters ? true : false
  }

  render() {
    return (
      <div style={{marginBottom: '5px'}}>
        <label style={{marginRight: '10px'}}>Solution</label>
        <input type="text" maxLength="6" value={this.state.value} onChange={this.handleInput} />
      </div>
    );
  }
}

export default WordInput;
