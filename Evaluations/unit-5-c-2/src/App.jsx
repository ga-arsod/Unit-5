import { useState } from 'react'
import './App.css'
import {ShowStudents} from "./components/ShowStudents" 
import {AddStudent} from "./components/AddStudent"

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <button className="togglebtn" onClick={() => {
        setShow(!show);
      }}>{show ? "Go to students list" : "Add a new Student"}</button>

      {show? <AddStudent/> : <ShowStudents/>}
      
    </div>
  )
}

export default App
