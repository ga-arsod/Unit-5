import {legacy_createStore} from "redux"
import { todoReducer } from "./reducer"

const initState = {
    todos: []
};

export const store = legacy_createStore(todoReducer, initState);

store.subscribe(() => {
    console.log(store.getState());
})