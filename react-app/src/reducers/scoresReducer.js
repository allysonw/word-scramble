export default function scoresReducer (state = { loading: false }, action) {
  switch (action.type) {

    case 'LOADING_SCORES':
      return {...state, loading: true };

    case 'ADD_SCORES':
      return {...state, loading: false, scores: action.payload };

    default:
      return state;
  }
}

// "Scores" slice of State looks like this:
// scores: {
//     loading: false,
//     scores: [
//       {
//         id: 1,
//         player: 'ALLYSO',
//         value: 100,
//         created_at: '2018-06-07T17:28:53.248Z'
//       },
//       {
//         id: 2,
//         player: 'ANDREW',
//         value: 10,
//         created_at: '2018-06-07T20:49:29.571Z'
//       }
//     ]
//   }
