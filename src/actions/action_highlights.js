import chromeStorage from 'chrome-storage-wrapper';
import { FETCH_HIGHLIGHTS, CREATE_HIGHLIGHT, DELETE_HIGHLIGHT, SEARCH_HIGHLIGHTS } from '../constants/constants';

export function createHighlight(newHighlight) {
  return {
    type: CREATE_HIGHLIGHT,
    payload: newHighlight
  }
}

export function fetchHighlights() {
  const request = chromeStorage.get("highlights", "local");

  return {
    type: FETCH_HIGHLIGHTS,
    payload: request
  }
}

export function deleteHighlight(id) {
  return {
    type: DELETE_HIGHLIGHT,
    payload: id
  }
}

export function searchHighlights(term) {
  return {
    type: SEARCH_HIGHLIGHTS,
    payload: term
  }
}
