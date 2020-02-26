import { ADD_SCORE, ADD_WORD_TO_LIST, GET_CHARS } from "./actionTypes";

export const addScore = score => ({
  type: ADD_SCORE,
  payload: {
    score
  }
});

export const addWord = word => ({
  type: ADD_WORD_TO_LIST,
  payload: {
    word
  }
});

export const getCharacters = chars => ({
  type: GET_CHARS,
  payload: {
    chars
  }
});

