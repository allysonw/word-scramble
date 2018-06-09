export function fetchNewGame() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GAME'});
    return fetch('/api/v1/games/', { method: 'POST'})
    .then(res => res.json())
    .then(game => dispatch({ type: 'ADD_GAME', payload: game }));
  };
}

export function updateSolvedWordCount() {
  return {
    type: 'UPDATE_SOLVED_WORD_COUNT'
  }
}

export function updateScore(value) {
  return {
    type: 'UPDATE_SCORE',
    payload: value
  }
}
