import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
    characters: [
        ['x', 'j', 'o', 'y'],
        ['u', 'r', 't', 's'],
        ['s', 'u', 'n', 's'],
        ['i', 'o', 'a', 'l'],
    ]
};
export default createStore(rootReducer, initialState);
