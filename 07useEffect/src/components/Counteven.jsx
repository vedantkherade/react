import React, { useEffect, useState } from 'react'

export default function Counteven() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count % 2 == 0){
            console.log("Effect ran", count);
        }
    }, [count])
  return (
    <div>
      <h2>Assignment 6 — Effect runs only when count is EVEN</h2>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  )
}
