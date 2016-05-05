import _ from 'lodash';

import { CREATE_HIGHLIGHT, FETCH_HIGHLIGHTS, SEARCH_HIGHLIGHTS } from '../actions/index';

const INITIAL_STATE = { all: [], active: [] }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_HIGHLIGHTS:
      return { all: action.payload.highlights }
    case SEARCH_HIGHLIGHTS:
      const highlights = action.payload.highlights;
      const activeHighlights = _.filter(highlights, function(highlight) {
        return _.includes(highlight, term);
      })
      return { active: activeHighlights }
    default:
      return state;
  }
}
