import React, { useState } from "react";

const IncrementDecrement = () => {
  const [num, setNum] = useState(1);

  function increase() {
    setNum((prev) => prev + 2);
  }

  function decrease() {
    setNum((prev) => prev - 2);
  }

  function reset(){
    setNum(0);
  }
  return (
    <>
    <h2>Assignment 6 — Increment & Decrement by 2 (Functional Update Required)</h2>
      <p>Number: {num}</p>
      <button onClick={increase}>Increase by 2</button>
      <button onClick={decrease}>Decrease by 2</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default IncrementDecrement;
