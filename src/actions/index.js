import chromeStorage from 'chrome-storage-wrapper';
export const FETCH_HIGHLIGHTS = 'FETCH_HIGHLIGHTS';
export const CREATE_HIGHLIGHT = 'CREATE_HIGHLIGHT';
export const DELETE_HIGHLIGHT = 'DELETE_HIGHLIGHT';
export const SEARCH_HIGHLIGHTS = 'SEARCH_HIGHLIGHTS';

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
  debugger
  return {
    type: SEARCH_HIGHLIGHTS,
    payload: term
  }
}
