import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return (
    <h2>Counter Value: {count}</h2>
  );
};

export default CounterDisplay;
