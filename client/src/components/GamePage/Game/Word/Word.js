import React, { Component } from 'react';
import Letter from './Letter/Letter'
import WordInput from './WordInput/WordInput'

class Word extends Component {
  constructor(props) {
    super(props)

    this.state = {
      letters: this.props.word.letters.split(""),
      scrambledLetters: Word.randomizeLetters(this.props.word.letters.split("")),
      solved: false
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
    if (this.state.solved) {
      return this.state.letters.map((letter, i) => {
        return <Letter key={i} letter={letter} solved={true}/>;
      });
    } else {
      return this.state.scrambledLetters.map((letter, i) => {
        return <Letter key={i} letter={letter} solved={false} />;
      });
    }
  }

  scramble = () => {
    const scrambledLetters = Word.randomizeLetters(this.state.letters)

    this.setState({
      scrambledLetters: scrambledLetters
    })
  }

  handleSolved = () => {
    this.setState({
      solved: true
    });
  }

  render() {
    const lettersList = this.renderLetters();

    return (
      <div className="Word" >
        {lettersList}

        {this.state.solved ?
          <button onClick={this.scramble} disabled>Scramble</button> :
          <button onClick={this.scramble}>Scramble</button>
        }

        {this.state.solved ?
          '' :
          <WordInput word={this.props.word} onSolved={this.handleSolved}/>
        }

        <p>{this.state.solved ? "Correct!" : ''}</p>
      </div>
    );
  }
}

export default Word;
