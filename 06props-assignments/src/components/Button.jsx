import React from 'react'

export default function Button({text, color}) {
  return (
    <div>
      <h2>Assignment 8 — Reusable Button using props</h2>
       <button style={{color: color, padding: "10px"}}>{text}</button>
    </div>
  )
}
