export const AUTH_ACTION = "AUTH_ACTION";

export const addToken = (data) => {
    return {
        type: AUTH_ACTION,
        payload: data
    }
}