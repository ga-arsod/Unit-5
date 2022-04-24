import { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleContextProvider = ({children}) => {
    const [toggle, setToggle] = useState(true);

    const handleChange = () => {
        setToggle(!toggle)
        console.log(toggle);
    }

    return (
        <ToggleContext.Provider value={{toggle, handleChange}}>{children}</ToggleContext.Provider>
    )
}