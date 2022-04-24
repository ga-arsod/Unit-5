import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [status, setStatus] = useState(false);
    const [token, setToken] = useState()

    const isAuth = () => {
        setStatus(!status)
    }

    const toggleAuth = (data) => {
        if(data) {
            setToken(data.token)
        }
        else {
            setToken(null)
        }
    }

    return (
        <AuthContext.Provider value={{status, token, isAuth, toggleAuth}}>{children}</AuthContext.Provider>
    )
}