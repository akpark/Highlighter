import Immutable from 'immutable';
import _ from 'lodash';
import { CREATE_HIGHLIGHT, EDIT_HIGHLIGHT, DELETE_HIGHLIGHT, FETCH_HIGHLIGHTS, SEARCH_HIGHLIGHTS, FILTER_HIGHLIGHTS } from '../constants/constants';

const INITIAL_STATE = { all: [], active: [] }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_HIGHLIGHTS:
      return { all: action.payload.highlights, active: action.payload.highlights }

    case CREATE_HIGHLIGHT:
      const newHighlights = state.all.slice(0).push(action.payload)
      chrome.storage.local.set({"highlights": newHighlights})
      return { all: newHighlights, active: newHighlights }

    case EDIT_HIGHLIGHT:
      let editedHighlight = _.filter(state.all, function(highlight) {
        return highlight._id === action.payload._id;
      });
      editedHighlight.tag_id = action.payload.newTag;
      let editedList = _.filter(state.all, function(highlight) {
        return highlight._id !== action.payload._id;
      })
      editedList.push(editedHighlight);
      chrome.storage.local.set({"highlights": editedList});

      let newActiveHighlights = _.filter(editedList, function(highlight) {
        return highlight.tag_name === action.payload.currentTag;
      })

      return { all: editedList, active: state.active };

    case SEARCH_HIGHLIGHTS:
      const activeHighlights = _.filter(state.all, function(highlight) {
        return _.includes(highlight.description, action.payload);
      });
      return { all: state.all, active: activeHighlights };

    case FILTER_HIGHLIGHTS:
      debugger
      const filteredHighlights = _.filter(state.all, ((highlight) => {
        return highlight.tag_id === action.payload;
      }));
      return { all: state.all, active: filteredHighlights };

    case DELETE_HIGHLIGHT:
      const highlightsWithDelete = _.filter(state.all, function(highlight) {
        return highlight._id !== action.payload;
      });
      chrome.storage.local.set({"highlights": highlightsWithDelete});

      return { all: newHighlights, active: newHighlights };

    default:
      return state;
  }
}
