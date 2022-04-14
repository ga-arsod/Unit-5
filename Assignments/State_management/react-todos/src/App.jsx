import { useState } from 'react'
import './App.css'
import { ToDos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ToDos></ToDos>
    </div>
  )
}

export default App
