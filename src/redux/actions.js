import { SEARCH_WORD } from "./actionTypes";
import searchService from "../services/search"

export const searchWord = () => dispatch => {
  dispatch(
    {
      type: SEARCH_WORD,
      payload: {
        
      }
    }
  )

};


