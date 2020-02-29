import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
const initialState = {
    // score: 0,
    // words: [],
    // characters: [
    //     ['x', 'j', 'o', 'y'],
    //     ['u', 'r', 't', 's'],
    //     ['s', 'u', 'n', 's'],
    //     ['i', 'o', 'a', 'l'],
    // ]
};
const store = createStore(
    rootReducer,
    applyMiddleware(thunk),

);
store.subscribe(() => console.log('updated state', store.getState()));


export default store;