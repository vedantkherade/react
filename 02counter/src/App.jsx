import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import One from "./One";
import Randomnum from "./Randomnum";
import CountStep from "./CountStep";

function App() {
  return (
    <>
      <Counter />
      <One />
      <Randomnum />
      <CountStep/>
    </>
  );
}

export default App;
