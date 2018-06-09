// Request new Game object from Rails API
// Dispatched when user clicks "New Game" button
export function fetchNewGame() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GAME'});
    return fetch('/api/v1/games/', { method: 'POST'})
    .then(res => res.json())
    .then(game => dispatch({ type: 'ADD_GAME', payload: game }));
  };
}

// Tell reducer to add one to the solved word count
// Dispatched when a Word component is solved
export function updateSolvedWordCount() {
  return {
    type: 'UPDATE_SOLVED_WORD_COUNT'
  }
}

// Tell reducer to mark game as complete & update the state's score
// Dispatched when the game is won
export function updateScore(value) {
  return {
    type: 'UPDATE_SCORE',
    payload: value
  }
}
