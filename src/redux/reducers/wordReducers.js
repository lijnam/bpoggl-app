import { SEARCH_WORD } from "../actionTypes";

const initialState = {
  characters: [
    ['x', 'j', 'o', 'y'],
    ['u', 'r', 't', 's'],
    ['s', 'u', 'n', 's'],
    ['i', 'o', 'a', 'l'],
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_WORD:
      return {
        ...state,
        word: action.payload
      }
      break;
    default:
      return state
  }
}
