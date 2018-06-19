import React, { Component } from 'react';
import Score from './Score/Score';
import LoadingWheel from '../LoadingWheel/LoadingWheel';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchHighScores } from  '../../actions/scoresActions.js';

import { Table, Grid, Row, Col } from 'react-bootstrap';

// Main container component for the Scores page
class ScoresPage extends Component {

  componentDidMount = () => {
    this.props.fetchHighScores();
  }

  checkStateForScores = () => {
    if (this.props.scores.loading) {
      return <LoadingWheel />;
    } else if (this.props.scores.scores) {
      return this.renderHighScores()
    }
    return '';
  }

  renderHighScores = () => {
    const scoresTableRows = this.props.scores.scores.map(score => <Score key={score.id} score={score} />);

    return (
      <Grid>
        <Col xs={12}>
          <Table bordered condensed>
            <thead>
              <tr>
                <th>Player</th>
                <th>Score</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {scoresTableRows}
            </tbody>
          </Table>
        </Col>
      </Grid>
    );
  }

  render() {
    const scoresContent = this.checkStateForScores();

    return (
      <div className="ScoresPage" >
        <div>
          {scoresContent}
        </div>
      </div>
    );
  }
}

// Connection to Redux State
const mapStateToProps = (state) => {
  return ({
    scores: state.scores
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchHighScores: fetchHighScores
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoresPage);
