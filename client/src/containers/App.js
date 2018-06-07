import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../components/NavBar';
import ScoresPage from '../components/ScoresPage'


class App extends Component {
  fetchGames = () => {
    fetch('/games')
    .then(res => res.json()
    .then(json => console.log(json)));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <button onClick={this.fetchGames}>Fetch Games</button>
          <Route exact path="/" render={() => <div>Welcome to word scramble!</div>} />
          <Route path="/high-scores" component={ScoresPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
