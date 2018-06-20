import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import scoresReducer from './scoresReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  scores: scoresReducer,
});

export default rootReducer;
