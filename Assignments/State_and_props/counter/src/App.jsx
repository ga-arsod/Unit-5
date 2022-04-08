import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {


  
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter(props) {

const [counter, setCounter] = useState(0);

const handleChange = (value) => {

  if(value == 2) {
    setCounter(counter * 2);
  }
  else {
    setCounter(counter + value);
  }
}
  
  console.log(props)
  return <div>
  <h3>Counter</h3>
      <h2 className={counter % 2 === 0 ? "Even" : "Odd"}>{counter}</h2>
      <button
        onClick={() => {
          handleChange(1)
          }}>
          Increment
        </button>
        <button
        onClick={() => handleChange(-1) }>
          Decrement
        </button>

        <button
        onClick={() => handleChange(2) }>
          Double
        </button>
  </div>
}

export default App;


 