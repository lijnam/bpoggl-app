import { ADD_SCORE, ADD_WORD_TO_LIST, GET_CHARS, RESET_SCORE } from "./actionTypes";
import { API_URL } from '../env'

import axios from 'axios'

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
export const resetScore = () => ({
  type: RESET_SCORE,
  payload: {
  }
});

export const getCharactersSuccess = chars => ({
  type: GET_CHARS,
  payload: {
    chars
  }
})


export const getCharacters = () => {
  return (dispatch) => {
    return axios.get(API_URL + 'boggle')
      .then(response => {
        dispatch(getCharactersSuccess(response.data.board))
      })
      .catch(error => {
        throw (error);
      });
  };
};
