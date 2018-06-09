import React, { Component } from 'react';
import Game from './Game/Game';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewGame, updateSolvedWordCount, updateScore } from  '../../actions/gameActions.js';
import './GamePage.css';
import wheel from '../../images/loading-wheel.png'

// Main container component for the Play page
class GamePage extends Component {

  // Checks to see if a game is loading or has been loaded
  checkStateForGameContent = () => {

    // If loading, returns the loading animation
    if (this.props.game.gameLoading === true) {
     return (
       <div>
         <img alt="loading" src={wheel} className="Loading-wheel" />
       </div>
     );

    // If a game has been loaded, returns the game
    } else if ((this.props.game.id !== undefined) &&
              (this.props.game.gameLoading === false)) {

     return <Game game={this.props.game} words={this.props.game.words} onWordSolved={this.handleWordSolved}/>;

   // Otherwise, returns nothing
   } else {
     return '';
    }
  }

  // Called from the Word component when a word is solved
  // Once all words belonging to a game have been solved
  // dispatches an action to update the game score & mark
  // game as completed
  handleWordSolved = () => {
    this.props.updateSolvedWordCount();

    // check for a win
    if (this.props.game.solvedWordCount === 1) {
      this.props.updateScore(1500);
    }
  }

  render() {
    // get content for the main Game area
    const gameContent = this.checkStateForGameContent();

    return (
      <div className="GamePage" >
        <button onClick={this.props.fetchNewGame}>New Game</button>

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
    updateSolvedWordCount: updateSolvedWordCount,
    updateScore: updateScore
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
