import { legacy_createStore as createStore } from "redux";
import { reducer } from "./Reducer";
import { nanoid } from "nanoid";

const initState = {
    todos: [],
    nanoid: nanoid()
}

export const store = createStore(reducer, initState);

console.log(store.getState());