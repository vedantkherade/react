import React from 'react'

export default function CardComp({ title, icon }) {
  return (
    <div>
      <h2>Assignment 18 — Passing Component as Prop + Conditional Rendering</h2>
        <h3>{title}</h3>
        {icon ? icon : <p>No Icon</p>}
    </div>
  )
}
