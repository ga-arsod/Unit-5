import './App.css'
import { Counter } from './component/Counter'

function App() {

  let initialTime = 20;
  let endTime = 15;

  return (
    <div className="App">
      <Counter initialTime = {initialTime} endTime = {endTime}/>
    </div>
  )
}

export default App
