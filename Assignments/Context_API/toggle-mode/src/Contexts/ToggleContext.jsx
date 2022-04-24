import { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleContextProvider = ({children}) => {
    const [toggle, setToggle] = useState(true);

    const handleChange = () => {
        setToggle(!toggle)
    }

    return (
        <ToggleContext.Provider value={{toggle, handleToggle}}>{children}</ToggleContext.Provider>
    )
}