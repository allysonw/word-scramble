import React, { Component } from 'react';
import Letter from './Letter/Letter';
import Hint from './Hint/Hint';
import WordInput from './WordInput/WordInput';

import './Word.css';
import { Row } from 'react-bootstrap';

// Word component displays the letters making up the word
// As well as the hint, scramble button, and word input
class Word extends Component {
  constructor(props) {
    super(props)

    // Maintain internal state to keep track of when word is solved
    this.state = {

      // Holds the word's letters in order (the solution)
      letters: this.props.word.letters.split(""),

      // Scramble leters on creation of the component and store in state
      scrambledLetters: Word.randomizeLetters(this.props.word.letters.split("")),

      solved: this.props.word.solved
    }
  }

  // Class method for randomizing an array of letters
  static randomizeLetters = (lettersToScramble) => {
    const letters = lettersToScramble;
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }

    return letters;
  }

  // Render the letters, passing through a prop for whether the
  // word is solved so Letters know what styling to use
  renderLetters = () => {
    if (this.state.solved) {

      // If solved, unscramble the letters (use the 'letters' state)
      return this.state.letters.map((letter, i) => {
        return <Letter key={i} letter={letter} solved={true}/>;
      });
    } else {

      // If not solved, show the scrambled letters
      return this.state.scrambledLetters.map((letter, i) => {
        return <Letter key={i} letter={letter} solved={false} />;
      });
    }
  }

  // Called when the user clicks the "scramble" button for a word
  // Initiates shuffling of the letters
  scramble = () => {

    // make a copy of letters, so as not to reference and alter the
    // actual letters value in state
    const scrambledLetters = Word.randomizeLetters(this.state.letters.concat())

    // Update the Word internal state
    this.setState({
      scrambledLetters: scrambledLetters
    })
  }

  // The WordInput component knows when the word has been solved
  // and calls this function at that time
  handleSolved = () => {
    this.setState({
      solved: true
    });

    // Pass the info back up the component chain to let the
    // GamePage component know to update the state indicating
    // the word has been solved
    this.props.onWordSolved(this.props.word.id);
  }

  render() {
    const lettersList = this.renderLetters();
    let wordComponents; // scramble button and input box

    // If solved, don't show the input, hint, or scramble button
    if (this.state.solved) {
        wordComponents = '';
    } else {
      wordComponents = (
        <div>
          {/* Give WordInput knowlegde of the word and a callback
              to use if the word is solved */}
          <Row className="justify-content-md-center" >
            <WordInput word={this.props.word} onSolved={this.handleSolved}/>
          </Row>

          <Row className="justify-content-md-center word-component-row">
            <button className="scramble-button" onClick={this.scramble}>Scramble</button>
          </Row>

          <Row className="justify-content-md-center word-component-row">
            <Hint definition={this.props.word.definition}/>
          </Row>
        </div>
      )
    }

    return (
      <div className="word">
          <Row> {lettersList} </Row>
          {wordComponents}
      </div>
    );
  }
}

export default Word;
