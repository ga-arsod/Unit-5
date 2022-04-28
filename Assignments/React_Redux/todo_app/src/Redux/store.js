import {legacy_createStore} from "redux"
import { todoReducer } from "./Todos/reducer"


// const 

export const store = legacy_createStore(todoReducer);