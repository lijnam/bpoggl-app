import { ADD_SCORE, ADD_WORD_TO_LIST, GET_CHARS, RESET_SCORE } from "../actionTypes";
const initialState = {
  score: 0,
  words: [],
  characters: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_SCORE:
      const { score } = action.payload;
      return { ...state, score: state.score += score };

    case ADD_WORD_TO_LIST:
      const { word } = action.payload;
      return { ...state, words: [...state.words, word] };
    case RESET_SCORE:
      return {
        ...state,
        score: 0,
        words: [],
      };

    case GET_CHARS:
      let { chars } = action.payload;
      console.log(chars);
      return {
        ...state,
        characters: chars
      };
    default:
      return state
  }
}
