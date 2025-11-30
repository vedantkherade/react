import React, { useEffect, useState } from "react";

export default function AutoCounter() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
     if(!running) return;

     const id = setInterval(() => {
        setCount(c => c + 1);
     }, 1000)

     return() => clearInterval(id);
  }, [running]);

  return (
    <div>
      <h2>Assignment 13 — Auto-Counter with Cleanup</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>

      <p>{running ? "Running..." : "Stopped."}</p>
    </div>
  );
}
