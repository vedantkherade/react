import React from "react";
import { useState, useEffect } from "react";

export default function MutipleDependencies() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Something changed");
  }, [count, text]);

  return (
    <div>
      <h2>Assignment 7 — Effect with multiple dependencies</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>

        <br />
        <br />

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
      </div>
    </div>
  );
}
