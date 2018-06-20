import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import scoresReducer from './scoresReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  scores: scoresReducer,
  timer: timerReducer
});

export default rootReducer;
