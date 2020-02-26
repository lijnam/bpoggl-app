import { createStore } from "redux";
import rootReducer from "./reducers";

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
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => console.log('updated state', store.getState()));


export default store;