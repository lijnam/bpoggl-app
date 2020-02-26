import { ADD_SCORE, ADD_WORD_TO_LIST, GET_CHARS } from "../actionTypes";

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

    case GET_CHARS:
      // let { chars } = action.payload;
      // console.log(chars);

      return {
        ...state,
        characters: [
          ['x', 'j', 'o', 'y'],
          ['u', 'r', 't', 's'],
          ['s', 'u', 'n', 's'],
          ['i', 'o', 'a', 'l']
        ]
      };;
    default:
      return state
  }
}
