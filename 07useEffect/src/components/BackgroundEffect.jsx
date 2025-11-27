import React, { useEffect, useState } from 'react'

export default function BackgroundEffect() {
    const [color, setColor] = useState("red");

    useEffect(() => {
        console.log("Background Changed!!");
    },[color])
  return (
    <div style={{backgroundColor: color, height: "100vh" }}>
      <h2> Assignment 8 — Run effect only when the component’s background color changes</h2>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        Toggle Color
      </button>
    </div>
  )
}
