import React from 'react'

export default function Child({onPress}) {
  return (
    <div>
      <h2>Assignment 10 — Pass a function as a prop</h2>
       <button onClick={onPress}>Click Me</button>
    </div>
  )
}
    