import { ADD_TODO, REMOVE_TODO } from "./ActionTypes";

export const addTodo = (title) => {
    return {
        type: ADD_TODO,
        payload : {title: title, status:false}
    }
}

export const removeTodo = (title) => {
    return {
        type: REMOVE_TODO,
        payload : {title: title, status:true}
    }
}