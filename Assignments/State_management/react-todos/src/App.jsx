import { useState } from 'react'
import './App.css'
import { Completed } from './components/completedTodos'
import { ToDos } from './components/Todos'

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <ToDos></ToDos>

      <button className='showBtn' onClick={() => {
        setShow(!show)}}>SHOW COMPLETED TODOS</button>

      {show ? <Completed /> : null}
    </div>
  )
}

export default App
