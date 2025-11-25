import React from 'react'

export default function Wrapper({ onClick, children }) {
     const box = {
        border: "2px solid white",
        padding: "30px",
        cursor: "pointer"
      }
  return (
    <div style={box} onClick={onClick}>
      <h2>Assignment 17 — Pass Function Prop + children Prop</h2>
       {children}
    </div>
  )
}
