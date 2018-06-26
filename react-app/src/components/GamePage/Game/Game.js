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
          <Col md={7} className="centered-col">
            <Word key={word.id} word={word} onWordSolved={this.props.onWordSolved}/>
          </Col>
        </Row>
      );
    });
  }

  render() {
    let gameContent = (
      <div>
        <Row>
          <Col sm={2} xs={6} className="centered-col">
            {/* Let timer know current countdown & whether game
                is complete, and provide callback for decrementing
                countdown */}
            <Timer gameComplete={this.props.game.complete}
                   decrementTimer={this.props.decrementTimer}
                   countdown={this.props.game.countdown}/>
          </Col>
        </Row>
        {this.renderWords()}
      </div>
    )

    // If the game is over, dim the page, hide the
    // countdown, and show the score card and player input
    if (this.props.game.complete) {
      gameContent = (
        <div>
          <div className="dimmed-overlay"></div>
          <div>
            {this.renderWords()}
          </div>
          <div>
            <div className="centered-col game-win-box">
              <ScoreCard score={this.props.game.score.value}/>
              <PlayerInput saveGame={this.props.saveGame}/>
            </div>
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
