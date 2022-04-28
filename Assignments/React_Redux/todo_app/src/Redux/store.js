import {legacy_createStore} from "redux"
import { todoReducer } from "./Todos/reducer"

const initState = {
    todos: []
};

export const store = legacy_createStore(todoReducer, initState);