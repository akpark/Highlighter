import chromeStorage from 'chrome-storage-wrapper';
import { CREATE_TAG, FETCH_TAGS } from '../constants/constants';

const INITIAL_STATE = { all: [], active: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_TAG:
      const newTags = state.slice(0)
      newTags.push(action.payload)
      chromeStorage.set("tags", newTags, "local");
      return { all: newTags, active: "recent"}

    case FETCH_TAGS:
      return { all: action.payload.tags, active: "recent" };

    default:
      return state;
  }
}
