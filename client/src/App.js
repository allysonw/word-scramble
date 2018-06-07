import React, { Component } from 'react';
import './App.css';

class App extends Component {
  fetchGames = () => {
    fetch('/games')
    .then(res => res.json()
    .then(json => console.log(json)));
  }

  render() {
    return (
      <div className="App">
        <p>Welcome to word scramble!</p>
        <button onClick={this.fetchGames}>Fetch Games</button>
      </div>
    );
  }
}

export default App;
