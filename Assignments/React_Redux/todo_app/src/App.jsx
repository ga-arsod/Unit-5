import './App.css'
import { Todo } from './Components/TodoList'
import {Routes, Route} from "react-router-dom"
import { TodoDetails } from './Components/TodoDetails'
import { Login } from './Components/Login'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToken } from './Redux/Login/action'

function App() {
  const [state, setState] = useState(true);
  const dispatch = useDispatch();
  // const status = useSelector((store) => store.auth, function equality(prev, updated) {
  //   if(prev == updated) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   } 
  // })

  // console.log(status)
  
  // if(status) {
  //   setState(status.status)
  // }
  // else {
  //   setState(false);
  // }

  const token = JSON.parse(localStorage.getItem("authReducer"))
  
  {token ? dispatch(addToken(token)): console.log("NO")}

  return (
    <div className="App">
      <Routes>
        {state ? 
        <Route path='/' element={<Todo/>}/> :
        <Route path='/login' element={<Login/>}/>
      }
        <Route path='todo/:id' element={<TodoDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
