import { API_ROOT } from './api-config';

// Request high scores from Rails API
// Dispatched when user loads Scores page
export function fetchHighScores() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SCORES'});

    const scoresGetUrl = `${API_ROOT}/scores`

    return fetch(scoresGetUrl, { method: 'GET'})
    .then(res => res.json())
    .then(scores => dispatch({ type: 'ADD_SCORES', payload: scores }));
  };
}
