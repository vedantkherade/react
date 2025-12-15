import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

const CounterControls = () => {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default CounterControls;
