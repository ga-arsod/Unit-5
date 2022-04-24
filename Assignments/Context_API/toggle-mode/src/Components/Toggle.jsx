import { Switch } from "@chakra-ui/switch"
import { useContext } from "react";
import { ToggleContext } from "../Contexts/ToggleContext";

export const Toggle = () => {
    const {toggle, handleChange} = useContext(ToggleContext)

    return (
        <div style={{
            background: toggle ? "white": "#1F2327",
            color: toggle ? "#1F2327": "white"
        }} className="toggle">
            <h1>My Dashboard</h1>
            <p>{toggle? "Dark": "Light"} Mode <Switch onChange={() => {
                console.log("Hello");
                handleChange();
            }} size="lg"/></p>
        </div>
    )
}