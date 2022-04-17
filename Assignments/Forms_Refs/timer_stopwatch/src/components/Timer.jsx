import { useEffect, useRef, useState } from 'react'

export const Timer = () => {
    const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(4);
  const [show, setShow] = useState(true);
  const counterRef = useRef(null);

  useEffect(() => {

    if(seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59)
    }

    if(minutes === 0 && seconds === 0) {
        clearInterval(counterRef.current);
        setSeconds(0);
        setMinutes(0);
    }

    // counterRef.current = setInterval(() => {
    //   setSeconds(p => p-1) 
    // },1000)
  }, [seconds]);

  const handleChange = (e) => {
      
    setMinutes(e.target.value - 1);
  }

  return (
    <div className="Timer">
        <h2>Timer</h2>

      {show ? <h4 onClick={() => {
          setShow(false)
      }}>{minutes}m {seconds}s</h4>: 
      
      <input type="text" maxLength={2} onChange={handleChange} onKeyPress={(e) => {
          if(e.key === "Enter") {
              setShow(true);
          }
      }}/>
      }

      <button onClick={() => {
        clearInterval(counterRef.current)
      }}>Pause</button>

      <button onClick={() => {
        
        counterRef.current = setInterval(() => {
          
          setSeconds(p => p-1) 
        },1000)
      }}>Start</button>

      <button onClick={() => {
        clearInterval(counterRef.current);
        setSeconds(59);
        setMinutes(4);
      }}>Reset</button>
    </div>
  )
}