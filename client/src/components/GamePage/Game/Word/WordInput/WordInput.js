import React, { Component } from 'react';

class WordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      wordSolved: false
    };
  }

  handleInput = e => {
    let wordSolved;

    if (this.validateWord(e.target.value)) {
      wordSolved = true;
    } else {
      wordSolved = false;
    }

    this.setState({
      value: e.target.value,
      wordSolved: wordSolved
    });
  }

  validateWord = (text) => {
    return text === this.props.word.letters ? true : false
  }

  render() {
    const solved = this.state.wordSolved

    return (
      <div>
        <label>Solution: </label>
        <input type="text" value={this.state.value} onChange={this.handleInput} />
        <p>Solved? {solved ? "Yes!" : "No :("}</p>
      </div>
    );
  }
}

export default WordInput;
