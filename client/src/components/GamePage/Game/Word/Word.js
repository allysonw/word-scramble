import React, { Component } from 'react';
import Letter from './Letter/Letter'
import WordInput from './WordInput/WordInput'

class Word extends Component {
  constructor(props) {
    super(props)

    this.state = {
      letters: this.props.word.letters.split(""),
      scrambledLetters: Word.randomizeLetters(this.props.word.letters.split(""))
    }
  }

  static randomizeLetters = (letters) => {
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }

    return letters;
  }

  renderLetters = () => {
    return this.state.scrambledLetters.map((letter, i) => {
      return <Letter key={i} letter={letter} />;
    });
  }

  scramble = () => {
    const scrambledLetters = Word.randomizeLetters(this.state.letters)

    this.setState({
      scrambledLetters: scrambledLetters
    })
  }

  render() {
    const lettersList = this.renderLetters();

    return (
      <div className="Word" >
        {lettersList}
        <button onClick={this.scramble}>Scramble</button>
        <WordInput word={this.props.word}/>
      </div>
    );
  }
}

export default Word;
