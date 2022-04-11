import logo from './logo.svg';
import './App.css';
import React  from 'react';
import {useState} from "react";

function App() {

  const [count, setCount] = useState({
    Score: 76,
    Wicket: 2,
    Ball: 50
  });


  let res = false;

  if(count.Score > 100) {
    res = true;
  }

  function Win() {
     if(res) {
       return <h1>India Won</h1>
     }

  }
  
  function change(value, item) {
    if(item == "run") {
      setCount(changeState => {
      return{...changeState, Score: value + count.Score}
    })
    }

    if(item == "wicket") {
      setCount(changeState => {
      return{...changeState, Wicket: value + count.Wicket}
    })
    }

    if(item == "ball") {
      

      setCount(changeState => {
      return{...changeState, Ball: value + count.Ball}
    })
    }
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              count.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              count.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              count.Ball
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => change(1, "run")}>Add 1</button>
        <button className="addScore4" onClick={() => change(4, "run")}>Add 4</button>
        <button className="addScore6" onClick={() => change(6, "run")}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => change(1, "wicket")}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => change(0.1, "ball")}>Add 1</button>
      </div>

      <Win  />
    </div>
  );
}

export default App;
