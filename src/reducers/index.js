import { combineReducers } from 'redux';
import HighlightsReducer from './reducer_highlights';
import TagsReducer from './reducer_tags';

const rootReducer = combineReducers({
  highlights: HighlightsReducer,
  tags: TagsReducer
});

export default rootReducer;
