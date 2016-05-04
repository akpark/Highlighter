import { combineReducers } from 'redux';
import HighlightsReducer from './reducer_highlights';

const rootReducer = combineReducers({
  highlights: HighlightsReducer
});

export default rootReducer;
