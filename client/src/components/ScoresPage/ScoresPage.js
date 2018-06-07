import React, { Component } from 'react';
import Score from './Score/Score';

class ScoresPage extends Component {
  fetchScores = () => {
    fetch('/api/v1/scores')
    .then(res => res.json()
    .then(json => console.log(json)));
  }

  render() {
    const score = {id: 1, player: "ALLYSO", value: 100, createdAt: 'today'};

    return (
      <div className="ScoresPage" >
        <button onClick={this.fetchScores}>Fetch Scores</button>

        <Score score={score} />
      </div>
    );
  }
}

export default ScoresPage;
