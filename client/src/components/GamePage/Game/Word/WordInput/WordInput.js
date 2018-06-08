import React, { Component } from 'react';

class WordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleInput = e => {
    if (this.validateWord(e.target.value)) {
      this.props.onSolved();
    }

    this.setState({
      value: e.target.value,
    });
  }

  validateWord = (text) => {
    return text.toLowerCase() === this.props.word.letters ? true : false
  }

  render() {
    return (
      <div>
        <label>Solution: </label>
        <input type="text" value={this.state.value} onChange={this.handleInput} />
      </div>
    );
  }
}

export default WordInput;
