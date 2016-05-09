import chromeStorage from 'chrome-storage-wrapper';
import { CREATE_TAG, FETCH_TAGS, SET_ACTIVE_TAG } from '../constants/constants';

export function fetchTags() {
  const request = chromeStorage.get("tags", "local");

  return {
    type: FETCH_TAGS,
    payload: request
  }
}

export function createTag(title) {
  const newTag = {
    _id: new Date().toISOString(),
    title: title
  }

  return {
    type: CREATE_TAG,
    payload: newTag
  }
}

export function setActiveTag(tag) {
  return {
    type: SET_ACTIVE_TAG,
    payload: tag
  }
}
