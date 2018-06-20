import React, { Component } from 'react';
import Word from './Word/Word';
import Timer from './Timer/Timer'
import ScoreCard from './ScoreCard/ScoreCard'
import PlayerInput from './PlayerInput/PlayerInput'

import './Game.css';
import { Col, Row } from 'react-bootstrap';

// Game component holds the words that make up the game
class Game extends Component {

  // Set up list of words to show to the user
  renderWords = () => {
    return this.props.words.map(word => {
      return (
        <Row key={word.id}>
          <Word key={word.id} word={word} onWordSolved={this.props.onWordSolved}/>
        </Row>
      );
    });
  }

  render() {
    let gameContent = (
      <div>
        <Row className="timer-row">
          <Col sm={4} smOffset={4} className="">
            <Timer gameComplete={this.props.game.complete}
                   decrementTimer={this.props.decrementTimer}
                   countdown={this.props.game.countdown}/>
          </Col>
        </Row>
        {this.renderWords()}
      </div>
    )

    // If the game is over, show the score card and player input
    if (this.props.game.complete) {
      gameContent = (
        <div>
          {this.renderWords()}

          <div>
            <Col sm={4} smOffset={4} className="game-win-box">
              <ScoreCard score={this.props.game.score.value}/>
              <PlayerInput saveGame={this.props.saveGame}/>
            </Col>
          </div>
        </div>
      )
    }

    return (
      <div>
        {gameContent}
      </div>
    );
  }
}

export default Game;
