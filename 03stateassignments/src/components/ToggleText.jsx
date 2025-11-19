import { useState } from "react";

function ToggleText() {
  const [text, setText] = useState("Hello Student!");

  const toggletext = () => {
    setText(text === "Hello Student!" ? "Welcome to React!" : "Hello Student!");
  };

  return (
    <>
      <h2>Assignment 3 — Simple Toggle Text</h2>
      <p>{text}</p>
      <button onClick={toggletext}>Toggle Text</button>
    </>
  );
}

export default ToggleText;
