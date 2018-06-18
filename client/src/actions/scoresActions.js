// Request high scores from Rails API
// Dispatched when user loads Scores page
export function fetchHighScores() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SCORES'});
    return fetch('/api/v1/scores', { method: 'GET'})
    .then(res => res.json())
    .then(scores => dispatch({ type: 'ADD_SCORES', payload: scores }));
  };
}
