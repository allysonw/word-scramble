import React, { Component } from 'react';
import Score from './Score/Score';

class ScoresPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: []
    }
  }

  componentDidMount = () => {
    this.fetchScores();
  }

  fetchScores = () => {
    fetch('/api/v1/scores')
    .then(res => res.json())
    .then(scores => {
      this.setState({
        scores: scores
      });
      console.log(this.state)
    });
  }

  renderHighScores = () => {
    return this.state.scores.map(score => {
      return <Score key={score.id} score={score} />
    });
  }

  render() {
    const highScores = this.renderHighScores();
    debugger
    return (
      <div className="ScoresPage" >
        {highScores}
      </div>
    );
  }
}

export default ScoresPage;
