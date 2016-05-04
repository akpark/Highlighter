import { CREATE_HIGHLIGHT, FETCH_HIGHLIGHTS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_HIGHLIGHTS:
      return action.payload.highlights;
    default:
      return state;
  }
}
