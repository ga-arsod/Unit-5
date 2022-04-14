import './App.css'
import { Counter } from './component/Counter'

function App() {

  let initialTime = 10;
  let endTime = 20;

  return (
    <div className="App">
      <Counter initialTime = {initialTime} endTime = {endTime}/>
    </div>
  )
}

export default App
