import { AUTH_ACTION } from "./action";

const initState = {
    auth: {
        authState: false,
        token: ""
    }
}

export const authReducer = (store = initState, {type, payload}) => {
    switch(type) {
        case AUTH_ACTION :
            return {auth: payload};
    default :
        return store;
    }
}