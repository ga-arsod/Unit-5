import { useState, useEffect } from 'react'


export const Counter = ({initialTime, endTime}) => {
      const [count, setCount] = useState(initialTime);

      useEffect(() => {
          const timer = setInterval(() => {
              setCount((prev) => {
                  if(prev === endTime) {
                      clearInterval(timer);
                      return endTime;
                  }
                  return prev + 1;
              })
          }, 1000);

          return function cleanup() {
              clearInterval(timer);
          }
      })

    return (
        <div>
            <p>// Initial time : 10 , End time : 20 //</p>
            <h3>Counter: {count}</h3>
        </div>
    )
}