import { ADD_TODO, DELETE_TODO } from "./action";

const initState = {
    todos: []
};

export const todoReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case ADD_TODO:
            return {...state, todos: payload};
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== payload)}
        default :
            return state
    }
}