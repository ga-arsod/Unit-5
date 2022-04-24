
import './App.css'
import { Sidebar } from './Components/Sidebar'
import { Toggle } from './Components/Toggle'
import { Users } from './Components/Users'

import { useContext } from "react";
import { ToggleContext } from "./Contexts/ToggleContext";

function App() {
  const {toggle} = useContext(ToggleContext);


  return (
    <div style={{
            background: toggle ? "white": "#1F2327",
            color: toggle ? "#1F2327": "white"
        }}
        className="App">
      <Toggle/>
      <Sidebar />
      <Users/>
    </div>
  )
}

export default App
