// Request high scores from Rails API
// Dispatched when user loads Scores page
export function fetchHighScores() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SCORES'});

    // DEVELOPMENT
    // const scoresGetUrl = '/api/v1/scores'

    // PRODUCTION
    const scoresGetUrl = 'https://word-scramble-rails-api.herokuapp.com/api/v1/scores'

    return fetch(scoresGetUrl, { method: 'GET'})
    .then(res => res.json())
    .then(scores => dispatch({ type: 'ADD_SCORES', payload: scores }));
  };
}
