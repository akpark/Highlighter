import chromeStorage from 'chrome-storage-wrapper';
import { CREATE_TAG, FETCH_TAGS } from '../constants/constants';

export default function(state = [], action) {
  switch(action.type) {
    case CREATE_TAG:
      const newTags = state.slice(0)
      newTags.push(action.payload)
      chromeStorage.set("tags", newTags, "local");
      return newTags

    case FETCH_TAGS:
      return action.payload.tags

    default:
      return state;
  }
}
