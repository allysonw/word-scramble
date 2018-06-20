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

export function decrementTimer() {
  return {
    type: 'DECREMENT_TIMER'
  };
}

// Tell reducer to add one to the solved word count
// Dispatched when a Word component is solved
export function updateSolvedWordCount() {
  return {
    type: 'UPDATE_SOLVED_WORD_COUNT'
  };
}

// Tell reducer to set a flag on a word to mark
// as solved
// Dispatched when a Word component is solved
export function markWordSolved(wordId) {
  return {
    type: 'MARK_WORD_SOLVED',
    payload: wordId
  };
}

// Post updates to the Rails API
// Dispatched when a user wins
export function saveGame(gameId, scoreId, playerName, history) {
  const gamePatchUrl = `/api/v1/games/${gameId}`
  const scorePatchUrl = `/api/v1/scores/${scoreId}`

  // Use Thunk middleware to dispatch multiple actions
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_PLAYER_NAME',
      payload: {
        playerName: playerName
      }
    });

    // get the new state that has the updated score
    const updatedScore = getState().game.score;

    // first, send new score object to Rails API to persist
    // player name and score value to DB
    return fetch(scorePatchUrl, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({score: updatedScore})
      })
    .then(res => {

      // then, send request to Rails API to mark game as solved
      fetch(gamePatchUrl, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({solved: true})
      })
    })
    .then(res => {
      // finally, redirect user to high scores page after all requests
      // are complete
      history.push("/high-scores");
      dispatch({ type: 'GAME_SAVED'});
    });
  }
}

// Tell reducer to mark game as complete
// and update the score in state
// Dispatched when all words are solved (a win)
export function markGameComplete(scoreValue) {
  return {
    type: 'MARK_GAME_COMPLETE_AND_UPDATE_SCORE',
    payload: { scoreValue: scoreValue }
  }
}
