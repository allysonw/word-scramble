export default function gameReducer(state = { gameLoading: false }, action) {
  switch (action.type) {

    case "LOADING_GAME":
      return {...state, gameLoading: true };

    // flatten JS object returned from API into easier
    // to access keys for the game slice of the Redux state object
    case "ADD_GAME":
      return {...state,
        gameLoading: false,
        complete: action.payload.complete,
        id: action.payload.id,
        words: action.payload.words,
        solvedWordCount: 0,
        score: action.payload.score };

    // when a word is solved, add 1 to the solved word count
    case "UPDATE_SOLVED_WORD_COUNT":
      return {...state, solvedWordCount: ++state.solvedWordCount}

    // score is updated when a game is completed
    case "UPDATE_SCORE":
      return {...state,
              score: {...state.score, value: action.payload },
              complete: true};

    default:
      return state;
  }
}

// State looks like this:
// {
//   game: {
//     gameLoading: false,
//     complete: false,
//     id: 265,
//     words: [
//       {
//         id: 261,
//         letters: 'biopsy',
//         definition: '',
//         difficulty: 32
//       }
//     ],
//     solvedWordCount: 0,
//     score: {
//       id: 219,
//       player: '',
//       value: 0,
//       created_at: '2018-06-09T16:35:02.642Z'
//     }
//   }
// }
