export default function gameReducer(state = { loading: false }, action) {
  switch (action.type) {

    case 'LOADING_GAME':
      return { loading: true };

    // flatten JS object returned from API into easier
    // to access keys for the game slice of the Redux state object
    case 'ADD_GAME':
      return {...state,
        loading: false,
        complete: action.payload.complete,
        id: action.payload.id,
        words: action.payload.words,
        solvedWordCount: 0,
        score: action.payload.score,
        countdown: 999 };

    // decrement the timer every second
    case 'DECREMENT_TIMER':
      return {...state,
              countdown: --state.countdown };

    // when a word is solved, add 1 to the solved word count
    case 'UPDATE_SOLVED_WORD_COUNT':
      return {...state, solvedWordCount: ++state.solvedWordCount};

    // player name is updated after player inputs their name
    case 'UPDATE_PLAYER_NAME':
      return {...state,
              score: {...state.score,
                       player: action.payload.playerName
                     }
              };

    // clear game slice of state for next game after
    // the game is persisted to DB
    case 'GAME_SAVED':
      return {};

    // as soon as game is won, mark it complete and update the
    // state with the score so we can display it to the user
    case 'MARK_GAME_COMPLETE_AND_UPDATE_SCORE':
      return {...state,
              complete: true,
              score: {...state.score,
                       value: action.payload.scoreValue
                     }
             };

    // finds the word based on the id in the action payload
    // and adds a "solved" key to the word, set as true
    case 'MARK_WORD_SOLVED':
      // find index of word to update in words array in state
      let index = state.words.map(word => word.id).indexOf(action.payload);

      // copy the words array from current state
      let updatedWords = state.words.slice(0);

      // get the word we need to update
      let currentWord = updatedWords[index];

      // add a new key to the word we want to mark as solved
      updatedWords[index] = {...currentWord, solved: true};

      return {...state, words: updatedWords};

    // set showSolvedGame to true so GamePage will render
    // all the words as solved when player quits out before
    // winning
    case 'RESET_GAME':
      return {...state, showSolvedGame: true };

    default:
      return state;
  }
}

// "Game" slice of State looks like this:
// {
//   game: {
//     loading: false,
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
//     },
//    countdown: 999
//   }
// }
