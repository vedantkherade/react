import React, { useEffect } from 'react'

export default function Twoeffects() {

    useEffect(() => {
        console.log("Render happened")
    })

    useEffect(() => {
        console.log("Mounted!")
    },[])

  return (
    <div>
      <h2>Assignment 5 — Run two effects: one on every render, one only on mount</h2>
       <h3>Effects Demo</h3>
    </div>
  )
}
