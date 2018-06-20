export default function scoresReducer (state = { countdown: 999 }, action) {
  switch (action.type) {

    case 'DECREMENT':
      return { countdown: --state.countdown };

    // return the current countdown once the game is over
    case 'RESET':
      return { countdown: 999 };

    default:
      return state;
  }
}

// "Timer" slice of State looks like this:
// timer: { countdown: 999 }
