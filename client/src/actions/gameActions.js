// Request new Game object from Rails API
// Dispatched when user clicks "New Game" button
export function fetchNewGame() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GAME'});
    return fetch('/api/v1/games', { method: 'POST'})
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

// Post updates to Game to Rails API
// Dispatched when a user wins
export function saveGame(id, playerName, history) {
  const patchUrl = `/api/v1/games/${id}`
  // TODO break out into 2 patch requests, one to game API and one to scores API
  // TODO in rails controller, move Score logic out of Game controller
  // TODO add some payload to the game request to indicate it's completing the game

  return (dispatch, getState) => {
    dispatch( {
      type: 'UPDATE_PLAYER_NAME',
      payload: {
        playerName: playerName
      }
    });

    // get the new state that has the updated score
    const updatedScore = getState().game.score;

    // send new score object to Rails API to persist to DB
    return fetch(patchUrl, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({score: updatedScore})
      })
    .then(res => res.json())
    .then(game => {
      history.push("/high-scores");
      return dispatch({ type: 'GAME_SAVED'});
    });
  }
}

export function markGameComplete(scoreValue) {
  return {
    type: 'MARK_GAME_COMPLETE_AND_UPDATE_SCORE',
    payload: { scoreValue: scoreValue }
  }
}
