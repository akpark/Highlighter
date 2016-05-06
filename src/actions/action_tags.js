import chromeStorage from 'chrome-storage-wrapper';
import { FETCH_TAGS } from '../constants/constants';

export function fetchTags() {
  const request = chromeStorage.get("tags", "local");

  return {
    type: FETCH_TAGS,
    payload: request
  }
}
