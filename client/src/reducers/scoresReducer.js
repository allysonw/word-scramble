export default function scoresReducer (state = {}, action) {
  switch (action.type) {

    case "LOADING_SCORES":
      return {...state, loading: true };

    case "ADD_SCORES":
      return {...state, loading: false, scores: action.payload };

    default:
      return state;
  }
}

// "Scores" slice of State looks like this:
