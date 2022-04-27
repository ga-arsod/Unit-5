import './App.css'
import { Todo } from './Components/TodoList'
import {Routes, Route} from "react-router-dom"
import { TodoDetails } from './Components/TodoDetails'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Todo/>}/>
        <Route path='todo/:id' element={<TodoDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
