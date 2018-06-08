import React, { Component } from 'react';
import Letter from './Letter/Letter'

class Word extends Component {
  constructor(props) {
    super(props)

    this.state = {
      letters: this.props.word.letters.split("")
    }
  }

  renderLetters = () => {
    debugger
    return this.state.letters.map((letter, i) => {
      return <Letter key={i} letter={letter} />;
    });
  }

  scramble = () => {
    this.setState({
      letters: this.state.letters.reverse()
    })
  }

  render() {
    const lettersList = this.renderLetters();

    return (
      <div className="Word" >
        {lettersList}
        <button onClick={this.scramble}>Scramble</button>
      </div>
    );
  }
}

export default Word;
