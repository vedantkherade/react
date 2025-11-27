import React, {useState, useEffect } from "react";

export default function UpdateCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`
  },[count])

  return (
    <div>
        <h2>Assignment 3 — Update document title with count</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
