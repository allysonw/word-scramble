export default function gameReducer(state = [], action) {
  switch (action.type) {

    case "ADD_GAME":
      return {game: action.game};

    default:
      return state;
  }
}
