import { ADD_TODO, REMOVE_TODO } from "./ActionTypes";

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            return{...state, todo: [...state.todos, action.payload]};
        case REMOVE_TODO:
            return {};
        default:
            return state
    }
}

export {reducer};