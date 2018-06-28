import React, { Component } from 'react';
import Word from '../Game/Word/Word';
import { Row, Col } from 'react-bootstrap';

class GameSolution extends Component {

  renderWords = () => {
    return this.props.words.map(word => {
      return (
        <Row key={word.id}>
          <Col md={7} className="centered-col">
            <Word key={word.id} word={word} />
          </Col>
        </Row>
      );
    });
  }

  render() {
    let solvedWords = this.renderWords();

    return (
      <div>
        <h2>Solution</h2>
        {solvedWords}
      </div>
    )
  }
}

export default GameSolution;
