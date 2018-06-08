export default function gameReducer(state = { gameLoading: false }, action) {
  switch (action.type) {

    case "LOADING_GAME":
      return {...state, gameLoading: true };

    case "ADD_GAME":
      return {...state, gameLoading: false, game: action.payload};

    default:
      return state;
  }
}
