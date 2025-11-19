import { useState } from "react";

function ColorChanger() {

    const [color, setcolor] = useState("gray")
  return (
    <>
      <h2>Assignment 5 — Color Changer (Based on Buttons)</h2>
      <div style={{
        height: "150px",
        width: "150px",
        backgroundColor: color,
        border: "2px solid black"
      }}>

      </div>
      <button onClick={() => setcolor("red")}>Red</button>
      <button onClick={() => setcolor("green")}>Green</button>
      <button onClick={() => setcolor("blue")}>Blue</button>
    </>
  );
}

export default ColorChanger;
