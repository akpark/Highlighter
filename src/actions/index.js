import chromeStorage from 'chrome-storage-wrapper';
export const FETCH_HIGHLIGHTS = 'FETCH_HIGHLIGHTS';
export const CREATE_HIGHLIGHT = 'CREATE_HIGHLIGHT';

export function fetchHighlights() {
  // let request = [];
  // chrome.storage.local.get("highlights", (result) => {
  //   debugger
  //   request = result.highlights;
  // });
  // const request = chrome.storage.promise.local.get("highlights");
  const request = chromeStorage.get("highlights", "local");

  // const request = chrome.storage.sync.get("highlights");

  return {
    type: FETCH_HIGHLIGHTS,
    payload: request
  }
}

export function createHighlight(props) {

}
