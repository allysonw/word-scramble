export default function gameReducer(state = { gameLoading: false }, action) {
  switch (action.type) {

    case "LOADING_GAME":
      return {...state, gameLoading: true };

    case "ADD_GAME":
      return {...state,
        gameLoading: false,
        complete: action.payload.complete,
        id: action.payload.id,
        words: action.payload.words,
        solvedWordCount: 0,
        score: action.payload.score };

    case "UPDATE_SOLVED_WORD_COUNT":
      return {...state, solvedWordCount: ++state.solvedWordCount}

    case "UPDATE_SCORE":
      return {...state,
              score: {...state.score, value: action.payload },
              complete: true};

    default:
      return state;
  }
}
