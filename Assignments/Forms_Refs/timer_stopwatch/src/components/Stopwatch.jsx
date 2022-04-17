import { useEffect, useRef, useState } from 'react'

export const Stopwatch = () => {
    const [miliSecond, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0)
  const counterRef = useRef(null);

  if(miliSecond == 1000) {
          console.log("Hello")
        }

  useEffect(() => {

    if(miliSecond === 100) {
      setSeconds(seconds + 1);
      setCount(0)
    }

    // counterRef.current = setInterval(() => {
    //   setCount(p => p-1) 
    // },1000)
  }, [miliSecond]);

  return (
    <div className="Stopwatch">
      <h2>Stopwatch</h2>
      <h3>{seconds}s {miliSecond}</h3>
      <button onClick={() => {
        clearInterval(counterRef.current)
      }}>Pause</button>

      <button onClick={() => {
        
        counterRef.current = setInterval(() => {
          
          setCount(p => p+1) 
        },10)
      }}>Start</button>

      <button onClick={() => {
        clearInterval(counterRef.current);
        setCount(0);
        setSeconds(0);
      }}>Reset</button>
    </div>
  )
}