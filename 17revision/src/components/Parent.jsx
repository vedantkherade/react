import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [toggle, setToggle] = useState(true);

  return (
    <div>
        <h1>Parent</h1>
      {toggle && <Child/>}

      <button onClick={() => setToggle(prev => !prev)}>Toggle Component</button>
    </div>
  )
}
