export default function scoresReducer (state = { countdown: 999 }, action) {
  switch (action.type) {

    case "DECREMENT":
      return { countdown: --state.countdown };
    default:
      return state;
  }
}

// "Timer" slice of State looks like this:
// timer: { countdown: 999 }
