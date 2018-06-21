import React, { Component } from 'react';
import Game from './Game/Game';
import LoadingWheel from '../LoadingWheel/LoadingWheel';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewGame, decrementTimer, updateSolvedWordCount, markGameComplete, saveGame, markWordSolved } from  '../../actions/gameActions.js';

import './GamePage.css';

// Main container component for the Play page
class GamePage extends Component {

  // Checks to see if a game is loading or has been loaded
  checkStateForGameContent = () => {

    // If loading, returns the loading animation
    if (this.props.game.loading) {
     return (
       <div>
         <LoadingWheel />
         <p className="loading-message">Searching the dictionary for the best words for you... </p>
       </div>

     )

    // If a game has been loaded, returns the game
    } else if ((this.props.game.id !== undefined) &&
              (this.props.game.loading === false)) {

     return <Game game={this.props.game}
                  words={this.props.game.words}
                  onWordSolved={this.handleWordSolved}
                  saveGame={this.savePlayerInputAndGame} calculateScore={this.props.calculateScore}
                  decrementTimer={this.props.decrementTimer}
            />;

   // Otherwise, returns nothing
   } else {
     return '';
    }
  }

  // Called from the Word component when a word is solved
  handleWordSolved = (wordId) => {

    // update solvedWordCount in state
    this.props.updateSolvedWordCount(wordId);

    // mark the word solved in state
    this.props.markWordSolved(wordId);

    // check for a win
    if (this.props.game.solvedWordCount ===
        this.props.game.words.length) {

      this.props.markGameComplete(this.calculateScore());
    }
  }

  // update state with player name and provide game id and score
  // id so that reducer can make request to API to update game
  // and score in DB. provide history so that once game and score
  // are persisted, we can redirect the user to the high scores page
  savePlayerInputAndGame = (playerName) => {
    this.props.saveGame(this.props.game.id, this.props.game.score.id, playerName, this.props.history);
  }

  // returns the player's score
  calculateScore = () => {
    return this.props.game.countdown
  }

  render() {
    // get content for the main Game area
    const gameContent = this.checkStateForGameContent();

    return (
      <div className="GamePage" >
        <button className="new-game-button play-button" onClick={this.props.fetchNewGame}>New Game</button>

        {gameContent}
      </div>
    );
  }
}

// Connection to Redux State
const mapStateToProps = (state) => {
  return ({
    game: state.game
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchNewGame: fetchNewGame,
    decrementTimer: decrementTimer,
    updateSolvedWordCount: updateSolvedWordCount,
    saveGame: saveGame,
    markGameComplete: markGameComplete,
    markWordSolved: markWordSolved
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);